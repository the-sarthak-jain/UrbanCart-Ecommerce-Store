import { Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import PageNotFound from "./pages/Page-not-found";
import About from "./pages/About-us";
import Terms from "./pages/Terms";
import ContactUs from "./pages/Contact-us";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/Forgot-password";
import CartPage from "./pages/CartPage";

// For Admin Dashboard
import AdminDashboard from "./pages/Admin/adminDashboard";
import AdminRoute from "./components/routes/AdminRoute";
import CreateCategory from "./pages/Admin/createCategory";
import CreateProduct from "./pages/Admin/createProduct";
import Products from "./pages/Admin/products";
import UpdateProduct from "./pages/Admin/updateProduct";

// For User Dashboard
import UserDashboard from "./pages/User/userDashboard";
import PrivateRoute from "./components/routes/Private";
import Profile from "./pages/User/Profile";
import DetailPage from "./pages/detailPage";
import Orders from "./pages/User/orders";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<DetailPage />} />

        {/* User Dashboard */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
