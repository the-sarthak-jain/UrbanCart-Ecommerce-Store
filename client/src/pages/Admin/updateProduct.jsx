import React, { useState, useEffect } from "react";
import Layout from "../../components/layouts/Layout";
import AdminMenu from "../../components/layouts/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

  // Get Single Category
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/find-products/${params.slug}`
      );
      console.log(data);
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping ? "1" : "0");
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line
  }, []);

  // Get all Category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Create Product Function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      photo && productData.append("photo", photo);
      productData.append("category", category);
      productData.append("shipping", shipping === "1");
      const { data } = axios.put(
        `/api/v1/product/edit-products/${id}`,
        productData
      );

      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/product");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Delete a Product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure want to delete this product?");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/product/delete-products/${id}`
      );
      if (data.success) {
        toast.success("Product Deleted Successfully");
        navigate("/dashboard/admin/product");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
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
              {/* <form> */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label">
                    Name
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
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="num"
                    className="form-control"
                    name="price"
                    id="price"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <Select
                    bordered={false}
                    placeholder="Select a Category"
                    size="large"
                    className="form-select mb-3"
                    onChange={(value) => {
                      setCategory(value);
                    }}
                    value={category}
                  >
                    {categories?.map((c) => (
                      <Option key={c._id} value={c._id}>
                        {c.name}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    id="quantity"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="photo" className="form-label me-3">
                    Photo
                  </label>
                  <label className="btn btn-outline-secondary col-md-12 mb-2">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                  {/* </div> */}
                  <div className="mb-3">
                    {photo ? (
                      <div className="text-center">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt="product_photo"
                          height={"200px"}
                          className="img img-responsive"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <img
                          src={`/api/v1/product/get-photo/${id}`}
                          alt="product-photo"
                          height={"200px"}
                          className="img img-responsive"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <Select
                    bordered={false}
                    placeholder="Select shipping"
                    size="large"
                    className="form-select mb-3"
                    value={shipping}
                    onChange={(value) => {
                      setShipping(value);
                    }}
                  >
                    <Option value="0">No</Option>
                    <Option value="1">Yes</Option>
                  </Select>
                </div>
              </div>

              <button onClick={handleUpdate} className="btn btn-primary">
                Update Product
              </button>
              <button onClick={handleDelete} className="btn btn-danger">
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
