import React from "react";
import { useAuth } from "../context/auth";
import { useNavigate, Link } from "react-router-dom";
import { useWishlist } from "../context/wishlist";
import { useCart } from "../context/cart";
import Layout from "../components/layouts/Layout";
import toast from "react-hot-toast";

const WishlistPage = () => {
  const [auth] = useAuth();
  const [wishlist, setWishlist] = useWishlist();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  const removeWishlistItem = (pid) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== pid);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const moveToCart = (pid) => {
    removeWishlistItem(pid);
    navigate("/cart");
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 mb-4 text-center">
            <h1>My Wishlist</h1>
            <h4>{auth?.user ? `Welcome, ${auth.user.name}` : "Hello Guest"}</h4>
            <p>
              {wishlist.length
                ? `You have ${wishlist.length} item(s) in your wishlist`
                : "Your wishlist is empty"}
            </p>
          </div>

          <div className="col-md-8 offset-md-2">
            {wishlist.length ? (
              wishlist.map((p) => (
                <div className="card mb-3 shadow-lg wishlist-card p-3" key={p._id}>
                  <div className="row g-0 align-items-center">
                    <div className="col-5 col-md-4">
                      <img
                        src={`/api/v1/product/get-photo/${p._id}`}
                        alt={p.name}
                        className="img-fluid rounded-start"
                        style={{ objectFit: "contain", height: "200px" }}
                      />
                    </div>
                    <div className="col-7 col-md-5">
                      <div className="card-body">
                        <Link
                          to={`/product/${p.slug}`}
                          className="text-decoration-none text-dark"
                        >
                          <h5 className="card-title">{p.name}</h5>
                        </Link>
                        <p className="card-text text-muted">
                          {p.description.substring(0, 50)}...
                        </p>
                        <p className="card-text">
                          <strong>Price:</strong>{" "}
                          {p.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "INR",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="col-md-3 text-center d-flex flex-column justify-content-center gap-2">
                      <button
                        className="btn btn-primary mb-2  w-75 mx-auto"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to cart");
                        }}
                      >
                        Move to Cart
                      </button>
                      <button
                        className="btn btn-danger  w-75 mx-auto"
                        onClick={() => removeWishlistItem(p._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <p>
                  Your wishlist is empty! Let's fill it with some amazing finds!
                  🌟
                </p>
                <Link to="/" className="btn btn-primary">
                  Explore Products
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
