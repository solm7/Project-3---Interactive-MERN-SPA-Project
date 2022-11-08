import { Link } from "react-router-dom";

function Navbar({ currentPage, handlePageChange }) {
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

        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
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
