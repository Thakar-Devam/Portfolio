import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { LuCodeXml } from 'react-icons/lu';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['Work', 'About', 'Skills'];

  return (
    <>
      {/* ✅ Desktop Navbar (unchanged) */}
      <nav className="hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 items-center space-x-4 bg-black px-6 py-2 rounded-full border border-[#333] shadow-lg">
        {/* Left Icon */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-60}
          className="text-white text-xl cursor-pointer hover:text-yellow-400 transition-all"
          aria-label="Scroll to top"
        >
          <LuCodeXml />
        </Link>

        {/* Links */}
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={600}
            offset={-60}
            className="text-white text-sm cursor-pointer px-3 py-1 hover:text-yellow-400 transition-all"
          >
            {item}
          </Link>
        ))}

        {/* Resume button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="ml-2 bg-[#FCCA83] text-black font-semibold px-4 py-1 rounded-full hover:bg-[#f3cb9d] transition"
        >
          <a
            href="assets/RESUME THAKAR DEVAM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1 transition-all"
          >
            Resume/CV
          </a>
        </motion.button>
      </nav>

      {/* ✅ Mobile Navbar */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between bg-black px-4 h-[50px] rounded-full border border-[#333] shadow-lg">
        {/* Left Icon */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          offset={-60}
          className="text-white text-xl cursor-pointer"
        >
          <LuCodeXml />
        </Link>

        {/* Hamburger / Close Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-sm px-3 pr-0 rounded-md flex items-center gap-2">
          Menu
          {menuOpen ? (
            <FiX className="text-[#FCCA83] text-xl mt-1" />
          ) : (
            <FiMenu className="text-[#FCCA83] text-xl mt-1" />
          )}
        </button>
      </nav>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[70px] left-4 right-4 bg-black text-white rounded-4xl p-4 text-center shadow-xl z-40 mt-2">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-60}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-300 hover:text-yellow-400 transition"
            >
              {item}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className=" bg-[#FCCA83] text-black font-semibold px-4 py-1 mt-1 w-full rounded-full hover:bg-[#f3cb9d] transition"
          >
            <a
              href="assets/RESUME THAKAR DEVAM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 transition-all"
            >
              Resume/CV
            </a>
          </motion.button>
        </div>
      )}
    </>
  );
};

export default Navbar;
