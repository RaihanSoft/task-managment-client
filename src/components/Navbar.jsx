import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { FiLogOut, FiSun, FiMoon } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function Navbar() {
  const { user, signOutUser } = useContext(authContext);
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("storeDarkLight") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("storeDarkLight", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out shadow-lg backdrop-blur-lg 
      ${isScrolled || pathname !== "/" ? "bg-/50" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
        <span className="tracking-wider">Task Manager</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-lg font-medium">
          <NavLink to="/" className="hover:text-secondary transition-all">Home</NavLink>
          {user && <NavLink to="/dashboard" className="hover:text-secondary flex items-center gap-1 transition-all"><MdDashboard /> Dashboard</NavLink>}
        </nav>
        
        {/* User Section */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all">
            {theme === "light" ? <FiSun size={24} className="text-yellow-300" /> : <FiMoon size={24} className="text-gray-300" />}
          </button>
          
          {user ? (
            <div className="relative flex items-center space-x-3">
              <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-secondary" data-tooltip-id="profile-tooltip" data-tooltip-content={user.displayName} />
              <Tooltip id="profile-tooltip" />
              <button onClick={signOutUser} className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-red-600 transition-all">
                <FiLogOut /> Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-80 transition-all">Login</Link>
          )}
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all">
            <HiMenuAlt4 size={28} className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary/80 backdrop-blur-md p-6 flex flex-col space-y-4 text-center text-white text-lg">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          {user && <NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink>}
        </div>
      )}
    </header>
  );
}
