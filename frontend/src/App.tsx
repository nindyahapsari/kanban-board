import { Routes, Route } from "react-router-dom";
import socketIO from "socket.io-client";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";

import AboutPage from "./Pages/AboutPage";
import ItemDetails from "./Pages/ItemDetails";
import List from "./Pages/List";

import "./App.css";

import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

socket.emit("customEvent", { myData: "hello socket" });

function App() {
  return (
    <div className="flex flex-col h-full min-h-screen overflow-hidden">
      <Navbar />

      <div className="flex-grow grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/list" element={<List socket={socket} />} />
            <Route path="/details" element={<ItemDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>

      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}

export default App;
