import React from "react";
import Layout from "../../components/layouts/Layout";
import AdminMenu from "../../components/layouts/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title="Admin Dashboard">
      <div
        className="container-fluid py-4"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="text-center mb-4">Admin Dashboard</h2>
        <div className="row">
          <div className="col-lg-3 mb-4">
            <AdminMenu />
          </div>
          <div className="col-lg-9">
            <div className="card shadow-lg p-4">
              <div className="card-body">
                <h3 className="card-title">Admin Details</h3>
                <hr />
                <p className="card-text">
                  <strong>Name: </strong>
                  {auth?.user?.name}
                </p>
                <p className="card-text">
                  <strong>Email: </strong>
                  {auth?.user?.email}
                </p>
                <p className="card-text">
                  <strong>Contact: </strong>
                  {auth?.user?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
