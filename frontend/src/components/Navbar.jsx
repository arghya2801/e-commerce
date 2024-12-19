import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { useUserStore } from "../stores/useUserStore.js";

const Navbar = () => {
  // const user = false;
  // const isAdmin = true;
  
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";

  return (
    <header className="fixed top-0 left-0 w-full bg-[#78009c] bg-opacity-90 backdrop-blur-md shadow-lg z-40">
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">Ecommerce</h1>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
          {user && (
            <Link to="/cart" className="text-white hover:text-gray-400">
              <ShoppingCart className="text-white hover:text-gray-400" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute sm:hidden top-0 right-0 w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                3
              </span>
            </Link>
          )}

          {isAdmin && (
            <Link to="/admin" className="text-white hover:text-gray-400">
              <div className="flex items-center">
                <Lock className="mr-2 text-white hover:text-gray-400" />
                <span className="hidden sm:inline">Dashboard</span>
              </div>
            </Link>
          )}

          {user ? (
            <button className="text-white hover:text-[#78009c]" onClick={logout}>
              <LogOut />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <>
              <Link to="/signup" className="flex items-center px-3 py-2 text-[#6c5ce7] bg-white rounded hover:bg-[#78009c] hover:text-white">
                <UserPlus className="mr-2" />
                Sign Up
              </Link>
              <Link to="/login" className="flex items-center px-3 py-2 text-[#6c5ce7] bg-white rounded hover:bg-[#78009c] hover:text-white">
                <LogIn className="mr-2" />
                Log in
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

