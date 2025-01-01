import React, { useEffect, useState } from 'react';
import { FaSearch, FaSlidersH, FaPhone, FaEnvelope } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Categories() {
  const [visibleCategories, setVisibleCategories] = useState(4);
  const[categories , setCategories] = useState([])
  // const categories = [
  //   'Maharashtrian Thali', 'Punjabi Thali', 'Gujarati Thali', 'South Indian Thali',
  //   'Bengali Thali', 'Rajasthani Thali', 'Kashmiri Thali', 'Kerala Thali',
  //   'Chettinad Thali', 'Goan Thali'
  // ];

  const navigate =useNavigate();

  useEffect(  ()=>{

    const fetchcategories = async () =>{
      const response = await axios.get('http://localhost:5001/api/categories')
    console.log(response.data.categories);
    
    // const catArray = response.data.categories.map((category) => ({
    //   name: category.name,
    //   id: category._id // Or category.id if that's the key you use for the ID
    // }));
     setCategories(response.data.categories)

    }

    fetchcategories();

    

  } ,[])

  const handleSeeMore = () => {
    setVisibleCategories((prev) => prev + 4);
  };

  const handleCardClick = (categoryId) => {
    
    
    navigate(`/caterers/${categoryId}`); // Navigate to the specific category page
  };

  



  return (
    <div className="bg-gray-100  mt-16 mb-14 min-h-screen p-8">
      {/* Hero Section */}
      <div className="relative bg-red-600 text-white rounded-3xl overflow-hidden shadow-lg">
        <img
         src="indian thali.png"  // Replace with actual image URL
         alt="Warm Bowls"
         className="w-full h-80 object-cover sm:h-96"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold md:text-4xl">Warm Bowls Bold Flavors!</h1>
          <p className="text-sm md:text-lg mt-2 text-center">
            Come in and discover your new favorite comfort food—made just for you!
          </p>
          <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600">
            EXPLORE
          </button>
        </div>
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button className="p-2 bg-white rounded-full shadow-md text-red-600">
            <FaPhone />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md text-red-600">
            <FaEnvelope />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-center md:text-2xl">Categories</h2>

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
      {categories.slice(0, visibleCategories).map((category) => (
        <div
          key={category._id} // Use unique `_id` from the database
          onClick={() => handleCardClick(category._id)} // Add onClick event
          className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer active:scale-95"
        >
          <img
            src="burger.png" // Replace with actual category image URL
            alt={category.name} // Use category name for the alt attribute
            className="w-full h-32 object-cover md:h-40"
          />
          <p className="py-3 font-medium text-base md:text-lg hover:text-indigo-600">
            {category.name}
          </p>
        </div>
      ))}
    </div>

        {/* See More Button */}
        {visibleCategories < categories.length && (
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
