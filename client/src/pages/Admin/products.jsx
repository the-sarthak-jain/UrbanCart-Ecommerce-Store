import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layouts/AdminMenu";
import Layout from "../../components/layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Get all Products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Lifecycle Method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title="Dashboard - All Products">
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
            <div className="card shadow-lg p-4 mb-4">
              <h3 className="card-title">All Products List</h3>
              <div className="card-body">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {products?.map((p) => (
                    <div className="col" key={p._id}>
                      <Link
                        to={`/dashboard/admin/product/${p.slug}`}
                        className="text-decoration-none"
                      >
                        <div className="card h-100 shadow-sm">
                          <img
                            src={`/api/v1/product/get-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "contain",
                              padding: "8px",
                            }}
                          />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="card-text text-muted">
                              {p.description}
                            </p>
                            <h5 className="card-text text-success">
                              ₹{p.price}
                            </h5>
                            <div className="mt-auto">
                              <Link
                                to={`/dashboard/admin/product/${p.slug}`}
                                className="btn btn-primary w-100"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
