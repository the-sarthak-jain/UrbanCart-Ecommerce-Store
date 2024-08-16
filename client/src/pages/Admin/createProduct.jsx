import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import AdminMenu from "../../components/layouts/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  // Get Category
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

  // // Handle Form

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      productData.append("shipping", shipping);
      const { data } = await axios.post(
        "/api/v1/product/create-products",
        productData
      );
      if (data?.error) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        Navigate("/dashboard/admin/product");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Dashboard - Create Category">
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
              <form>
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
                      showSearch
                      className="form-select mb-3"
                      onChange={(value) => {
                        setCategory(value);
                      }}
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
                      {photo && (
                        <div className="text-center">
                          <img
                            src={URL.createObjectURL(photo)}
                            alt="product_photo"
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
                      showSearch
                      className="form-select mb-3"
                      onChange={(value) => {
                        setShipping(value);
                      }}
                    >
                      <Option value="0">No</Option>
                      <Option value="1">Yes</Option>
                    </Select>
                  </div>
                </div>

                <button onClick={handleCreate} className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
