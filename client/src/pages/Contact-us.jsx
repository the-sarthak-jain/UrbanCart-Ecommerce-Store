import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";

function ContactUs() {
  const navigate = useNavigate();

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
          <form method="post" action="/contact-us">
            <h2 className="mb-4 text-center">Contact Us</h2>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="exampleInputName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="nameHelp"
                  required
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
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
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
                  name="phoneNumber"
                  id="exampleInputPhone"
                  required
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
                  id="exampleInputMessage"
                  required
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
