import React from "react";
import { Heart, Home, MessageCircle, ShoppingBag, User } from 'lucide-react'


const Footer = () => {
  return (
    <div className="fixed bottom-0 left-10 right-10 bg-red-500 flex justify-center items-center px-4 py-2 rounded-full ">
      <div className="flex items-center  gap-4 rounded-full bg-white px-6 py-2">
        {/* Chat Icon */}
        <div className="text-red-500">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 9H16.5M9.75 12H14.25M10.5 15H13.5M4.5 9.75v-1.5c0-2.485 2.015-4.5 4.5-4.5h6c2.485 0 4.5 2.015 4.5 4.5v1.5c0 1.086-.386 2.083-1.029 2.855M3 21l4.5-4.5"
            />
          </svg> */}
                      <MessageCircle  className="h-6 w-6" />

        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>

        {/* Heart Icon */}
        <div className="text-red-500">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            />
          </svg> */}
          <Heart className="h-6 w-6" />
        </div>

        {/* Home Icon */}
        <div className="rounded-full bg-red-500 p-2 text-white">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10.18L12 4l9 6.18V21a2 2 0 01-2 2H5a2 2 0 01-2-2V10.18z"
            />
          </svg> */}
          <Home className="h-6 w-6" />
        </div>

        {/* Shopping Bag Icon */}
        <div className="text-red-500">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 11h14M6 19h12a2 2 0 002-2v-7H4v7a2 2 0 002 2z"
            />
          </svg> */}
          <ShoppingBag className="h-6 w-6 rounded-full" />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>

        {/* User Icon */}
        <div className="text-red-500">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 01-9 0M12 14.25v4.5M9 15H15"
            />
          </svg> */}
          <User className="h-6 w-6" />
        </div>
      </div>
    </div>
    
  );
};

export default Footer;
