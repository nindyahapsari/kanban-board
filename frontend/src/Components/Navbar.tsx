import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  border: "2px solid #222222;",
  padding: "10px;",
  margin: "10px;",
};

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-solid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-lg">MyLogo</span>
          </div>
          <div className="flex">
            <div className="ml-4">
              <Link to="/settings">
                <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Settings
                </button>
              </Link>
            </div>
            <div className="ml-4">
              <Link to="/account">
                <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                  Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
