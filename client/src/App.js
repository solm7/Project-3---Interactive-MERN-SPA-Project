import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BragBoard from "./components/BragBoard";
import About from "./components/About";
import Features from "./components/Features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Brag_Board");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<BragBoard />} />
          <Route path="/About" element={<BragBoard />} />
        </Routes>
      </BrowserRouter>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
