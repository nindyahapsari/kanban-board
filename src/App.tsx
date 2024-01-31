import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
