
import React ,{useState, useEffect}from "react";
import { FaPlus, FaStar, FaUtensils } from "react-icons/fa";
import { useParams , useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import axios from "axios";

const MenuList = () => {
    const {catererId , categoryId} = useParams();
    const addItem = useCartStore((state) => state.addItem);
    const {cart} = useCartStore()
    const navigate = useNavigate()

    const[menuItems , setMenuItems] = useState({
        name : "",
        menu : []
    })

    useEffect(()=>{
        const fetchMenu = async () =>{
            try {
                const response = await axios.get(`http://localhost:5001/api/caterers/${categoryId}/${catererId}/menu`)
                console.log(response.data);
                
                setMenuItems(response.data)
                console.log(cart);

                
            } catch (error) {
                console.error(error)
            }

        }
        fetchMenu()

    },[])
    useEffect(()=>{
        console.log(cart);
        

    }, [cart])

    const handleOnclick = () =>{
        navigate('/cart')

    }

    

//   const menuItems = [
//     { name: "Chapati", price: 5 },
//     { name: "Rice", price: 5 },
//     { name: "Dal", price: 5 },
//     { name: "Kadi", price: 5 },
//     { name: "Sabji", price: 5 },
//     { name: "Achar", price: 5 },
//   ];

  return (
    <div className="max-w-md mx-auto mt-28 mb-28  bg-white min-h-screen">
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
      <h2 className="text-2xl font-bold text-center p-4 text-[#5c2617]">
        Add Dishes In your Thali
      </h2>

      {/* Menu Items */}
      <div className="px-4 space-y-2">
        {menuItems.menu.map((item) => (
          <div
            key={item._id}
            className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg"
            
          >
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
            </div>
            <button
              className="h-8 w-8 flex items-center justify-center text-orange-500 hover:text-orange-600 hover:bg-orange-100 rounded-full"
              onClick={() => {addItem(item)
                
                }}
            >
              <FaPlus className="h-5 w-5" />
              <span className="sr-only">Add {item.name}</span>
            </button>
          </div>
        ))}
      </div>

      {/* Proceed Button */}
      <div className="p-4 mt-4">
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-2 rounded"
        onClick={handleOnclick}>
          Proceed
        </button>
      </div>
    </div>
  );
};

export default MenuList;
