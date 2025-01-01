// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Hamburger Icon and Logo */}
//         <div className="flex items-center space-x-4">
//           <button
//             className="text-2xl md:hidden focus:outline-none"
//             onClick={toggleMenu}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//           <h1 className="text-2xl font-bold">
//             <span className="text-orange-300">ROOM</span>
//             <span className="text-gray-100">EASY</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isOpen ? 'block' : 'hidden'
//           } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6`}
//         >
//           <a href="#" className="hover:text-orange-300">
//             Home
//           </a>
//           <a href="#" className="hover:text-orange-300">
//             Categories
//           </a>
//           <a href="#" className="hover:text-orange-300">
//             About
//           </a>
//           <a href="#" className="hover:text-orange-300">
//             Contact
//           </a>
//         </nav>

//         {/* Profile Icon */}
//         <div className="text-2xl md:text-3xl">
//           <FaUserCircle />
//         </div>
//       </div>
//     </header>
//   );
// }


// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-10 relative">
//         {/* Hamburger Icon */}
//         <button
//           className="text-2xl md:hidden focus:outline-none text-gray-800"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-orange-500 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
//           ROOM<span className="text-gray-800">EASY</span>
//         </h1>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isOpen ? 'block' : 'hidden'
//           } absolute top-full left-0 w-full bg-white md:static md:flex md:w-auto md:items-center md:space-x-6 text-gray-800 md:block`}
//         >
//           <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
//             Home
//           </a>
//           <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
//             Categories
//           </a>
//           <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
//             About
//           </a>
//           <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
//             Contact
//           </a>
//         </nav>

//         {/* Profile Icon */}
//         <div className="text-2xl md:text-3xl text-gray-800 cursor-pointer">
//           <FaUserCircle />
//         </div>
//       </div>
//     </header>
//   );
// }




import React, { useState } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6 lg:px-10 relative">
        {/* Hamburger Icon */}
        <button
          className="text-2xl md:hidden focus:outline-none text-gray-800"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500 absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          ROOM<span className="text-gray-800">EASY</span>
        </h1>

        {/* Navigation Links */}
        {/* <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white md:static md:flex md:w-auto md:items-center md:space-x-6 text-gray-800 md:block`}
        >
          <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
            Home
          </a>
          <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
            Categories
          </a>
          <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
            About
          </a>
          <a href="#" className="block px-4 py-2 md:inline-block hover:text-orange-500">
            Contact
          </a>
        </nav> */}

        {/* Profile Icon */}
        <div className="text-2xl md:text-3xl text-gray-800 cursor-pointer">
          <FaUserCircle />
        </div>
      </div>
    </header>
  );
}
