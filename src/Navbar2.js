// src/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate("/login");
  };

  return (
    <nav className="container flex items-center justify-between bg-slate-800 max-auto rounded-full p-4 text-white animatedDiv animated infinite">
      <div className="flex items-center">
        <span className="text-xl font-bold">
          Portfolio of Mohammad Khairul Alamgir
        </span>
      </div>
      <div className="flex space-x-4">
        <button className="btn" onClick={() => window.my_modal_4.showModal()}>
          My Projects
        </button>
        <button className="btn" onClick={() => window.my_modal_3.showModal()}>
          About Me
        </button>
        <button className="btn" onClick={downloadPDF}>
          Export Resume
        </button>
        <Link to="/blogs" className="btn">
          Blogs
        </Link>
        {auth ? (
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar2;
