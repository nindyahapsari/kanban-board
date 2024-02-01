import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className=" w-64 h-screen">
      <ul className="p-4">
        <li className="mb-2">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/about">About</Link>
        </li>
        <li className="mb-2">
          <Link to="/list">List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
