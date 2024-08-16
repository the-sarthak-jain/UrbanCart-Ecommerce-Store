import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="text-center my-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">User Panel</h4>
        </div>
        <div className="list-group list-group-flush">
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i className="fas fa-user me-2"></i> Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action d-flex align-items-center"
          >
            <i className="fas fa-shopping-cart me-2"></i> Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;