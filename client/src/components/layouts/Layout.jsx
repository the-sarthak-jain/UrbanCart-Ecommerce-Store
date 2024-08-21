import React from "react";
import { Helmet } from "react-helmet";

import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <main style={{ minHeight: "70vh" }}>
        {/* {Toaster} */}
        <Toaster />
        {children}
      </main>
    </>
  );
};

Layout.defaultProps = {
  title: "UrbanCart - E-commerce Store,
  description: "MERN Stack E-commerce Project by Sarthak Jain",
  keywords: "mern, react, express, node, mongodb",
  author: "Sarthak Jain",
};
export default Layout;
