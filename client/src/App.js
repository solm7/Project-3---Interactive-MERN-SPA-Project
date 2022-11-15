import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BragBoard from "./components/Bragboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

//remove this eventually
let id;

function App() {
  const [currentPage, setCurrentPage] = useState("Brag_Board");
  const handlePageChange = (page) => setCurrentPage(page);
  const [stats, setStats] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      console.log(response);
      //want bragboard to contain response data from User *??*
      setUserName(response.data);
    });
  }, []);

  //Login (might need)
  const [token, setToken] = useState();

  //create brag board *??*
  const addBragBoard = () => {
    Axios.post("http://localhost:3001/insert", {
      userName: userName,
      bragBoard: stats,
    });
  };

  //update stats
  const updateBragBoard = () => {
    Axios.put("http://localhost:3001/update", {
      userName: userName,
      bragBoard: stats,
    });
  };

  //delete Bragboard
  const deleteBragBoard = () => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  };

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/BragBoard" element={<BragBoard />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
