import React, { useEffect, useState } from "react";
import UserMenu from "../../components/layouts/UserMenu";
import Layout from "../../components/layouts/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid p-4 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mb-4">Your Orders</h1>
            {orders.length === 0 ? (
              <div className="text-center my-5">
                <h2 className="text-muted">No orders yet! 😔</h2>
                <p>
                  Looks like you haven’t purchased anything. Start shopping to
                  fill this page with awesome products!
                </p>
                <Link to="/" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            ) : (
              orders?.map((o, i) => (
                <div className="card mb-4 shadow-lg border-0" key={i}>
                  <div className="card-header bg-success text-white">
                    <h5>Order #{i + 1}</h5>
                    <small>
                      {moment(o?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </small>
                  </div>
                  <div className="card-body">
                    <h6>Status: {o?.status}</h6>
                    <h6>Buyer: {o?.buyer?.name}</h6>
                    <h6>
                      Payment: {o?.payment.success ? "Success" : "Failed"}
                    </h6>
                    <h6>Items: {o?.products?.length}</h6>
                    <hr />
                    <div className="container-fluid">
                      {o?.products?.map((p, index) => (
                        <div
                          className="row mb-2 align-items-center"
                          key={index}
                        >
                          <div className="col-md-2">
                            <img
                              src={`/api/v1/product/get-photo/${p._id}`}
                              className="img-fluid rounded shadow-sm"
                              alt={p.name}
                            />
                          </div>
                          <div className="col-md-8">
                            <Link to={`/product/${p.slug}`}>
                              <h5 className="">{p.name}</h5>
                            </Link>
                            <p>{p.description.substring(0, 50)}...</p>
                            <p className="text-success font-weight-bold">
                              Price:{" "}
                              {p.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "INR",
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer text-muted">
                    Ordered {moment(o?.createdAt).fromNow()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
