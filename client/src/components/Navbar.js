import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar({ currentPage, handlePageChange }) {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    handlePageChange("BragBoard");
  };

  const handleChange = (event) => {
    const { userName, value } = event.target;
    if (userName !== "") {
      setSearchText(value);
    }
  };
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <nav className="navbar navbar-expand-lg">
        <Link
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "Home" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/"
        >
          Home
        </Link>
        <Link>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              value={searchText}
              onChange={handlePageChange}
              aria-describedby="button-addon2"
            />
            <button
              type="button"
              id="button-addon2"
              onClick={handleSubmit}
              className={
                currentPage === "BragBoard"
                  ? "btn btn-primary nav-link active fs-3"
                  : "btn btn-primary nav-link fs-3"
              }
              to="/BragBoard"
            >
              Search
            </button>
          </div>
        </Link>
        <Link
          onClick={() => handlePageChange("Login")}
          className={
            currentPage === "Login" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/Login"
        >
          Login
        </Link>
        <Link
          onClick={() => handlePageChange("Signup")}
          className={
            currentPage === "Signup" ? "nav-link active fs-3" : "nav-link fs-3"
          }
          to="/Signup"
        >
          Signup
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
