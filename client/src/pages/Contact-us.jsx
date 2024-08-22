import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/contact/contact-us", {
        name,
        email,
        number,
        message,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Contact Us - Ecommerce App">
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          padding: "60px 0",
          backgroundColor: "#6c757d",
        }}
      >
        <div
          className="shadow-lg p-4 rounded"
          style={{ backgroundColor: "white", maxWidth: "800px", width: "100%" }}
        >
          <form onSubmit={handleSubmit}>
            <h2 className="mb-4 text-center">Contact Us</h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="exampleInputName" className="form-label">
                  Full Name
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
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="emailAddress"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="number"
                  id="number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="exampleInputMessage" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                name="rememberMe"
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
              <button
                type="button"
                className="btn btn-outline-primary mb-2"
                onClick={() => {
                  navigate("/");
                }}
              >
                Go to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
