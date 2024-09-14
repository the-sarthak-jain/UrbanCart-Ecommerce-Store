import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/auth";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/cart";
import { WishlistProvider } from "./context/wishlist";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </>,

  document.getElementById("root")
);
