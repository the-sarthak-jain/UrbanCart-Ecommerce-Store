import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { Checkbox, Radio } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // Get All Categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get Total Count of Products
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Get All Products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      // const { data } = await axios.get(`/api/v1/product/get-products?page=${page}`);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Handle Checkbox Change
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // Filter Products
  const filterProduct = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Handle Radio Button Change
  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  // Fetch Initial Data
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // Fetch Products on Page Change
  useEffect(() => {
    if (page > 1) {
      getAllProducts();
    }
  }, [page]);

  // Fetch Filtered Products
  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    } else {
      setPage(1); // Reset page to 1 when filters are cleared
      setProducts([]);
      getAllProducts(); // Re-fetch all products if no filters are applied
    }
  }, [checked, radio]);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // Load More
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout title="Home Ecommerce app">
      {/* Main container with backdrop shadow */}
      <div className="container-fluid mt-4 p-4 bg-light rounded shadow-sm">
        <div className="row">
          {/* Filter Section */}
          <div className="col-md-3 mb-4">
            <div className="p-3 bg-white rounded shadow-sm">
              <h4 className="text-center">Filter by Category</h4>
              <div className="d-flex flex-column text-dark">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>
              <h4 className="text-center mt-4">Filter by Price</h4>
              <div className="d-flex flex-column">
                {/* Price filters */}
                <Radio.Group onChange={handleRadioChange}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
              <div className="d-flex flex-column mt-2">
                <button
                  className="btn btn-danger"
                  onClick={() => window.location.reload()}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
          {/* Products List */}
          <div className="col-md-9">
            <h1 className="text-center mb-4">All Products</h1>
            <div className="row">
              {products.map((p) => (
                <div key={p._id} className="col-lg-4 col-md-6 mb-4">
                  <Link
                    to={`/product/${p.slug}`}
                    className="product-link text-decoration-none"
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
                      <p className="card-text">
                        {p.description.substring(0, 60)}...
                      </p>
                      <h6 className="mt-auto card-text text-success">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </h6>
                      <div className="card-name-price mt-2">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => navigate(`/product/${p.slug}`)}
                        >
                          More Details
                        </button>
                        <button
                          className="btn btn-warning text-white ms-2"
                          onClick={() => {
                            setCart([...cart, p]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, p])
                            );
                            toast.success("Item Added to cart");
                          }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center">
              {products && products.length < total && (
                <button
                  className="btn loadmore btn-primary my-3 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? (
                    "Loading..."
                  ) : (
                    <>
                      {" "}
                      Load More <AiOutlineReload />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
