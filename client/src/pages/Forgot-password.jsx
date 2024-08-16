import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/Forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Forgot Password - Ecommerce App">
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ backgroundColor: "#6c757d" }}
      >
        <div
          className="shadow-lg p-4 rounded"
          style={{ backgroundColor: "#f8f9fa", width: "400px" }}
        >
          <form onSubmit={handleSubmit}>
            <h2 className="mb-3 text-center">Forgot Password</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
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
              <label htmlFor="exampleInputAnswer1" className="form-label">
                Answer
              </label>
              <input
                type="text"
                className="form-control"
                name="answer"
                id="exampleInputAnswer1"
                aria-describedby="answerHelp"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary mb-2">
                Submit
              </button>
              <NavLink to="/login" className="btn btn-outline-primary">
                Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
