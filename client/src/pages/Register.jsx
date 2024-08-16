import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import axios from "axios"; // Used to get/fetch Data from Backend to Frontend
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#6c757d" }}
      >
        <div
          className="shadow-lg p-4 rounded"
          style={{
            backgroundColor: "white",
            maxWidth: "600px",
            width: "100%",
            marginTop: "60px",
            marginBottom: "60px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3 text-center">Register</h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoFocus
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="address" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="answer" className="form-label">
                  Answer:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="answer"
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  autoFocus
                  required
                />
              </div>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
              <NavLink to="/login" className="btn btn-outline-primary mb-2">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
