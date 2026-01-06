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
<nav
  className="
    hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50
    items-center space-x-4
    px-6 py-2 rounded-full

    bg-white/25
    backdrop-blur-2xl

    shadow-[0_10px_40px_rgba(0,0,0,0.22),inset_0_0_0_1px_rgba(255,255,255,0.25)]

    supports-[backdrop-filter]:bg-white/25
  "
>


  {/* Left Icon */}
  <Link
    to="home"
    smooth={true}
    duration={600}
    offset={-60}
    className="
      text-black/80 text-xl font-bold cursor-pointer
      hover:text-black
      hover:bg-white/20
      rounded-full p-2
      transition-all duration-300
    "
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
      className="
        text-black/70 text-lg font-medium cursor-pointer
        px-3 py-1 rounded-full

        hover:text-black
        hover:bg-white/20
        hover:backdrop-blur-lg

        transition-all duration-300
      "
    >
      {item}
    </Link>
  ))}

  {/* Resume button */}
  <motion.button
    whileTap={{ scale: 0.95 }}
    className="
      ml-2 rounded-full
      px-4 py-1
text-lg font-medium 
      bg-black/10
      backdrop-blur-lg
      border border-white/30

      text-black/80
      hover:text-black
      hover:bg-white/30

      transition-all duration-300
    "
  >
    <a
      href="assets/RESUME THAKAR DEVAM.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      Resume
    </a>
  </motion.button>
</nav>


  {/* ✅ Mobile Navbar */}
<nav
  className="
    md:hidden fixed top-4 left-4 right-4 z-50
    flex items-center justify-between
    px-4 h-[50px] rounded-full

    bg-white/30
    backdrop-blur-2xl

    shadow-[0_10px_40px_rgba(0,0,0,0.22),inset_0_0_0_1px_rgba(255,255,255,0.25)]
  "
>
  {/* Left Icon */}
  <Link
    to="home"
    smooth={true}
    duration={600}
    offset={-60}
    className="text-black text-xl cursor-pointer"
  >
    <LuCodeXml />
  </Link>

  {/* Hamburger / Close Button */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="
      text-black text-sm px-3 pr-0 rounded-md
      flex items-center gap-2
    "
  >
    Menu
    {menuOpen ? (
      <FiX className="text-black text-xl mt-1" />
    ) : (
      <FiMenu className="text-black text-xl mt-1" />
    )}
  </button>
</nav>


    {/* ✅ Mobile Dropdown Menu */}
{menuOpen && (
  <motion.div
    initial={{ y: "-30%", opacity: 0 }}
    animate={{ y: "0", opacity: 1 }}
    exit={{ y: "-30%", opacity: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="
      md:hidden fixed top-[70px] right-4 z-40 mt-2

      w-[75%]
      rounded-4xl p-4 text-center

      bg-white/30
      backdrop-blur-2xl

      shadow-[0_10px_40px_rgba(0,0,0,0.22),inset_0_0_0_1px_rgba(255,255,255,0.25)]
    "
  >
    {navItems.map((item) => (
      <Link
        key={item}
        to={item.toLowerCase()}
        smooth={true}
        duration={600}
        offset={-60}
        onClick={() => setMenuOpen(false)}
        className="
          block py-2
          text-black/80
          hover:text-black
          hover:bg-white/30
          rounded-full
          transition-all
        "
      >
        {item}
      </Link>
    ))}

    <motion.button
      whileTap={{ scale: 0.95 }}
      className="
        mt-3 w-full rounded-full px-4 py-2

        bg-white/40
        backdrop-blur-xl
        border border-white/40

        text-black font-medium text-sm
        hover:bg-white/50

        transition-all
      "
    >
      <a
        href="assets/RESUME THAKAR DEVAM.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        Resume / CV
      </a>
    </motion.button>
  </motion.div>
)}

    </>
  );
};

export default Navbar;
