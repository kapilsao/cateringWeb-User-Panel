

import React, { useEffect , useState } from "react";
import { FaPlus, FaMinus, FaStar, FaUtensils } from "react-icons/fa";
import useCartStore from "../store/cartStore";

export default function Cart() {
    const [deliveryMode, setDeliveryMode] = useState('onsite');

    const { cart, setCart, updateItemQuantity } = useCartStore();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);      


    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          setCart(parsedCart);  // Set the entire cart data into the state
        }
      }, [setCart]);

    useEffect(() => {
        if (cart.length > 0) {
          localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]); 


  const handleIncrease = (itemId) => {
    const item = cart.find((item) => item._id === itemId);
    if (item) {
      updateItemQuantity(itemId, item.quantity + 1);
      
    }
  };

  const handleDecrease = (itemId) => {
    const item = cart.find((item) => item._id === itemId);
    if (item && item.quantity > 1) {
      updateItemQuantity(itemId, item.quantity - 1);
      
    }
  };

  useEffect(()=>{
    console.log(cart);
    
  }, [cart])

  return (
    <div className="max-w-md mx-auto mt-28 mb-28 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-orange-500 p-4 flex items-center gap-3 text-white">
        <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
          <img
            src="/indian thali.png"
            alt="Dev Catering Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">DEV CATERING</h1>
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, index) => (
              <FaStar key={index} className="w-4 h-4 text-white" />
            ))}
            <FaStar className="w-4 h-4 text-white/50" />
            <span className="ml-1">4.8</span>
          </div>
        </div>
        <FaUtensils className="w-8 h-8" />
      </div>

      {/* Menu Title */}
      <h2 className="text-2xl text-center font-bold p-4 text-[#5c2617]">Your Thali</h2>

      {/* Menu Items */}
      <div className="px-4 space-y-2">
        {cart.map((item) => (
          <div key={item._id} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src="/burger.png"
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <span className="text-sm bg-orange-500 text-white px-2 py-0.5 rounded">
                ₹ {item.price}/Piece
              </span>
              <div className="mt-2 flex justify-between">
                {/* Show Quantity of the item */}
                <span className="text-sm font-medium text-gray-700">
                  Quantity: {item.quantity}
                </span>
                <div className="flex items-center gap-3 mt-2">
                  {/* Buttons to increase or decrease quantity */}
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-orange-300 rounded-full"
                    onClick={() => handleDecrease(item._id)}
                  >
                    <FaMinus className="text-white" />
                  </button>
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-orange-300 rounded-full"
                    onClick={() => handleIncrease(item._id)}
                  >
                    <FaPlus className="text-white" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

       {/* Total */}
        <div className="mt-6 mb-4 text-center font-medium text-lg">
          Total Price = ₹{total}
        </div>


        <div className="mt-6">
           <h3 className="font-medium mb-3 text-[#4A2511]">Mode Of Delivery</h3>
           <div className="flex flex-wrap gap-3">
             <label className="flex items-center space-x-2">
               <input
                 type="radio"
                 name="deliveryMode"
                 value="onsite"
                 checked={deliveryMode === 'onsite'}
                 onChange={(e) => setDeliveryMode(e.target.value)}
               />
               <span className="bg-[#E65C00] text-white px-4 py-2 rounded cursor-pointer">
                 Onsite Preparation
               </span>
             </label>
             <label className="flex items-center space-x-2">
               <input
                 type="radio"
                 name="deliveryMode"
                 value="cooked"
                 checked={deliveryMode === 'cooked'}
                 onChange={(e) => setDeliveryMode(e.target.value)}
               />
               <span className="bg-[#E65C00] text-white px-4 py-2 rounded cursor-pointer">
                 Already Cooked
               </span>
             </label>
         </div>
           </div>

      {/* Proceed Button */}
      <div className="p-4 mt-4">
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-2 rounded">
          Proceed for Booking
        </button>
      </div>
    </div>
  );
}



