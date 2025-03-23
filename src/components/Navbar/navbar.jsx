import React from "react";
import { Link } from "react-router-dom"; // ใช้ Link จาก react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-yellow-700 text-white py-4 shadow-lg">
      {/* เพิ่ม container ที่นี่ */}
      <div className="container mx-auto flex justify-between items-center">
        {/* โลโก้ */}
        <div className="text-3xl font-bold text-amber-300">
          <Link to="/">Serious Bacon</Link>
        </div>

        {/* ลิงก์ใน Navbar */}
        <div className="space-x-6">
          <Link
            to="/about"
            className="text-yellow-200 hover:text-yellow-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/music"
            className="text-yellow-200 hover:text-yellow-500 transition duration-300"
          >
            Music
          </Link>
          <Link
            to="/contact"
            className="text-yellow-200 hover:text-yellow-500 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
