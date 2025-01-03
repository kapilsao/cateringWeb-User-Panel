import React, { useEffect, useState } from 'react';
import { FaSearch, FaSlidersH, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Caterors() {
  const [visibleCaterers, setVisibleCaterers] = useState();
  const [caterers , setCaterers] = useState([]);
  const {categoryId} = useParams()
  const navigate = useNavigate()
  // const caterors = [
  //   'Maharashtrian Thali', 'Punjabi Thali', 'Gujarati Thali', 'South Indian Thali',
  //   'Bengali Thali', 'Rajasthani Thali', 'Kashmiri Thali', 'Kerala Thali',
  //   'Chettinad Thali', 'Goan Thali'
  // ];
  useEffect(()=>{
    const fetchCaterer =async ()=>{

     try {
      console.log(categoryId);
      
        const response = await axios.get(`http://localhost:5001/api/caterers/${categoryId}`)
        console.log(response);

        setCaterers(response.data.caterer || [])



  
       }  catch (error) {
        console.error(error);
  
       }

    }

    fetchCaterer()

  }, [])

  const handleSeeMore = () => {
    setVisibleCaterers((prev) => prev + 2);
  };
  const handleCardClick = (id) => {
    navigate(`/caterers/${categoryId}/${id}/menu`);// Navigate to the route with the card's ID
  };


  

  return (
    <div className="bg-gray-100  mt-16 mb-14 min-h-screen p-8">
     
     

      {/* Caterors Section */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-center md:text-2xl">Caterors</h2>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-lg shadow-md p-3 mt-4 max-w-md mx-auto">
          <FaSearch className="text-orange-500 text-lg" />
          <input
            type="text"
            placeholder="Filter Your Category"
            className="flex-grow ml-2 text-sm md:text-base focus:outline-none"
          />
          <FaSlidersH className="text-gray-500 text-lg" />
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-3 lg:grid-cols-4">
          {caterers.slice(0, visibleCaterers).map((cateror, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:scale-105"
              onClick={() => handleCardClick(cateror._id)}>
              <img
                src="/burger.png" // Replace with actual category image URL
                alt={cateror.name}
                className="w-full h-32 object-cover md:h-40"
              />
              <p className="py-3 font-medium text-base md:text-lg">{cateror.name}</p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {visibleCaterers < caterers.length && (
         <div className="text-right  mt-4 mb-10">
         <button
           className="text-orange-500 font-medium hover:text-orange-600 flex items-center"
           onClick={handleSeeMore}
         >
           See More
           
           <ChevronRight size={20} />
         </button>
       </div>
        )}
      </section>
    </div>
  );
}


