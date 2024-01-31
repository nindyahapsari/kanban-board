
import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-200 w-64 h-screen">
            <ul className="p-4">
                <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">Option 1</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-gray-700 hover:text-gray-900">Option 2</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
