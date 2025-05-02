import React, { useEffect, useState } from 'react'
import { FaUtensils } from 'react-icons/fa'
import { useLocation , useNavigate } from 'react-router-dom'
import useCartStore from '../store/cartStore'
// import newLogo from './new-logo.svg' // Replace with your updated logo path

const foodItems = [
  { name: 'Chapati' }, // Replace with actual food item image paths
  { name: 'Rice'},
  { name: 'Dal' },
  { name: 'Kadi' },
]



const ConfirmOrder = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [tokenAmount , setTokenAmount]= useState(99)

  const {cart}= useCartStore();
  const total = localStorage.getItem("Ototal")
  const quantity = localStorage.getItem("quantity")
  const mode = localStorage.getItem("mode")
  const caterer_name = localStorage.getItem("caterer name")


  const handleClick = () =>{
    localStorage.removeItem("Ototal");
    localStorage.removeItem("quantity");
    localStorage.removeItem("mode");

    navigate('/rating')



  }



  return (
    <div className="min-h-screen max-w-md mx-auto mt-28 mb-28  bg-white">
      {/* Header */}
      <header className="bg-[#F26522]  p-4 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <img src="/indian thali.png" alt="Dev Catering Logo" className="object-cover h-full w-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">{caterer_name}</h1>
              <div className="flex items-center">
                <span className="text-white">★★★★</span>
                <span className="ml-1 text-sm text-white">4.8</span>
              </div>
            </div>
          </div>
          <FaUtensils className="h-8 w-8 text-white" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-2xl p-4">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#592C1C]">
          Confirm Order
        </h2>

        {/* Food Items Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-[#FFF6F0] p-4">
          {cart.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 rounded-lg p-2"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <img
                  src='/burger.png'
                  alt={item.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <span className="text-lg font-medium text-[#592C1C]">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
  <div className="flex items-center justify-between">
    <label className="text-lg font-medium text-[#592C1C]">
      Total Quantity
    </label>
    <span className="w-48 text-right border border-gray-300 rounded px-2 py-1">
      {quantity}
    </span>
  </div>

  <div className="flex items-center justify-between">
    <label className="text-lg font-medium text-[#592C1C]">
      Total Amount
    </label>
    <span className="w-48 text-right border border-gray-300 rounded px-2 py-1">
      {total}
    </span>
  </div>

  <div className="flex items-center justify-between">
    <label className="text-lg font-medium text-[#592C1C]">
      Mode Of Delivery
    </label>
    <div className="w-48">
      <button
        className="w-full bg-[#F26522] text-white rounded px-4 py-2 hover:bg-[#F26522]/90"
      >
        {mode}
      </button>
    </div>
  </div>

  <div className="flex items-center justify-between">
    <label className="text-lg font-medium text-[#592C1C]">
      Token Amount
    </label>
    <span className="w-48 text-right border border-gray-300 rounded px-2 py-1">
      {tokenAmount}
    </span>
  </div>
</div>


        {/* Confirm Button */}
        <div className="mt-8 flex justify-center">
          <button
            className="w-full max-w-md bg-[#F26522] text-white rounded px-4 py-2 hover:bg-[#F26522]/90 text-lg"
            onClick={handleClick}
          >
            Confirm Booking
          </button>
        </div>
      </main>
    </div>
  )
}

export default ConfirmOrder
