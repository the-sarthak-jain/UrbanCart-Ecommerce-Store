import Layout from "../components/layouts/Layout";

function PageNotFound() {
  return (
    <Layout title="Error 404 - Ecommerce App">
      <div className="container d-flex justify-content-center">
        <h1 className="text-center my-5">Error 404! Page not found</h1>
      </div>
    </Layout>
  );
}

export default PageNotFound;
