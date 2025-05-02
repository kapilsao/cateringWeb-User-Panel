import React, { useEffect, useState } from "react";
import { FaUserCircle, FaEnvelope, FaPhone } from "react-icons/fa";
import axios from 'axios'

export default function UserProfile() {
//   const [userEmail, setUserEmail] = useState("");
  const [userData , setUserData ] = useState({})

  const userEmail = localStorage.getItem("UsersEmail")

 
  useEffect(() => {
    // Fetch user data from local storage when the component loads
   

    const fetchUserdata = async () =>{
        try {
            const response = await axios.post('http://localhost:5001/api/user', { email: userEmail });

            console.log(response.data);
            
            setUserData(response.data)


            
        } catch (error) {
            console.log(error.message|| error);
            
        }
    }

    fetchUserdata();


  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        {userData ? (
          <div className="text-center">
            {/* Profile Icon */}
            <div className="flex justify-center mb-4">
              <FaUserCircle size={100} className="text-indigo-500" />
            </div>

            {/* User Details */}
            <h1 className="text-2xl font-bold text-gray-800">Welcome, {userData.fullName}!</h1>
            <p className="text-gray-600 text-sm mt-1">Here's your profile information:</p>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-indigo-500" />
                <p className="text-gray-800">
                  <strong>Email:</strong> {userData.email}
                </p>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <FaPhone className="text-indigo-500" />
                <p className="text-gray-800">
                  <strong>Phone:</strong> {userData.MobNo}
                </p>
              </div>
            </div>

            {/* Edit Profile Button */}
            {/* <button
              className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 shadow-md"
              onClick={() => alert("Edit profile functionality coming soon!")}
            >
              Edit Profile
            </button> */}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-500">No user data found. Please log in.</p>
          </div>
        )}
      </div>
    </div>
  );
}
