import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

import Dashboard from "./Pages/Dashboard";
import ErrorPage from "./Pages/ErrorPage";

import AboutPage from "./Pages/AboutPage";
import ItemDetails from "./Pages/ItemDetails";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Details" element={<ItemDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
