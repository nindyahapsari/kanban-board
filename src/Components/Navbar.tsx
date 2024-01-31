import React from "react";

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
              <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Option 1
              </button>
            </div>
            <div className="ml-4">
              <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Option 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
