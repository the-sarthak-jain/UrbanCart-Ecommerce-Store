import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center my-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Admin Panel</h4>
        </div>
        <div className="list-group list-group-flush">
          <NavLink
            to="/dashboard/admin"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="fa-solid fa-user me-2"></i> Admin
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i className="fas fa-list-alt me-2"></i> Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i className="fas fa-box-open me-2"></i> Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/product"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i class="fa-solid fa-cubes me-2"></i> Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i className="fas fa-shopping-cart me-2"></i> Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i className="fas fa-users me-2"></i> Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;