import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import axios from "axios"; // Used to get/fetch Data from Backend to Frontend
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state?.from || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Login - Ecommerce App">
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#6c757d" }}
      >
        <div
          className="shadow-lg p-4 rounded"
          style={{ backgroundColor: "white", width: "400px" }}
        >
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3 text-center">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
              <NavLink to="/register" className="btn btn-outline-primary mb-2">
                Register
              </NavLink>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forget Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
