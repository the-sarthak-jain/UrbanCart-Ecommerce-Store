import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Badge } from "antd";
import logo from "../images/logo.svg";

import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <header>
      {/* Top Navigation Bar */}
      <div className="bg-dark text-light d-none d-md-flex justify-content-between align-items-center py-2 px-4">
        <div className="d-flex align-items-center">
          <select
            className="form-select bg-dark text-light border-0"
            aria-label="Select Language"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="de">German</option>
          </select>
          <span className="ms-3">Free Shipping On All Orders</span>
        </div>
        <div>
          {!auth?.user ? (
            <>
              <NavLink to="/login" className="text-light me-3">
                Login
              </NavLink>
              <NavLink to="/register" className="text-light">
                Register
              </NavLink>
            </>
          ) : (
            <div className="dropdown d-inline">
              <NavLink
                className="nav-link text-light dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {auth?.user?.name}
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/login"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <NavLink className="navbar-brand text-white" to="/">
            <img src={logo} alt="Logo" style={{ width: "150px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-white"
                  to="/computers"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Computers
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/desktop" className="dropdown-item">
                      Desktop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/monitors" className="dropdown-item">
                      Monitors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/keybord-mouses" className="dropdown-item">
                      Keyboard & Mouses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gaming-pc" className="dropdown-item">
                      PC Gaming
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/laptops" className="dropdown-item">
                      Laptops
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/accessories" className="dropdown-item">
                      Accessories
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-white"
                  to="/smartphone"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Smartphone
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/smartphones" className="dropdown-item">
                      Smartphones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/smartphone-accessories"
                      className="dropdown-item"
                    >
                      Smartphones Accessories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cases-covers" className="dropdown-item">
                      Cases & Covers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/smartwatches" className="dropdown-item">
                      Smartwatches
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-white"
                  to="/audio"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Audio
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/bluetooth-speakers" className="dropdown-item">
                      Bluetooth Speakers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/portable-speakers" className="dropdown-item">
                      Portable Speakers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/professional-speakers"
                      className="dropdown-item"
                    >
                      Professional Speakers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/headphones" className="dropdown-item">
                      Headphones
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/speakers" className="dropdown-item">
                      Speakers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/others" className="dropdown-item">
                      Other's
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/cameras" className="nav-link text-white">
                  Camera
                </NavLink>
              </li>
            </ul>
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for products..."
                aria-label="Search"
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </form>
            <div className="d-flex align-items-center ms-3">
              <NavLink to="#" className="text-white me-3">
                <i className="fa-regular fa-heart fs-4 me-2"></i>
                <span className="d-none d-md-inline">Wishlist</span>
              </NavLink>
              <NavLink to="/cart" className="text-white">
                <Badge count={cart?.length} showZero>
                  <i className="fa-solid fa-cart-shopping fs-4 me-2 text-white"></i>
                </Badge>
                <span className="d-none d-md-inline ps-2">My Cart</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      {/* Ensure to include additional options for mobile view if necessary */}
      <div className="d-md-none">
        <div className="row bg-dark text-light py-2">
          <div className="col-6 text-center">
            {auth?.user ? (
              <NavLink
                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                className="text-light"
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink to="/login" className="text-light">
                Login
              </NavLink>
            )}
          </div>
          <div className="col-6 text-center">
            {auth?.user ? (
              <NavLink
                to="/login"
                onClick={handleLogout}
                className="text-light"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/register" className="text-light">
                Register
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;