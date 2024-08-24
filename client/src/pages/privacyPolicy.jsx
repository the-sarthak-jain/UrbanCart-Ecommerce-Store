import React from "react";
import Layout from "../components/layouts/Layout";

const Privacy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card shadow">
              <div class="card-header bg-dark text-white">
                <h3>Privacy Policy</h3>
              </div>
              <div class="card-body">
                <h5>1. Introduction</h5>
                <p>
                  We value your privacy and are committed to protecting your
                  personal data.
                </p>
                <h5>2. Information Collection</h5>
                <p>
                  We collect information to provide better services. This
                  includes personal details, transaction history, and cookies.
                </p>
                <h5>3. Use of Information</h5>
                <p>
                  Your data is used to process transactions, improve our
                  services, and ensure security.
                </p>
                <h5>4. Data Security</h5>
                <p>
                  We use advanced security measures to protect your information.
                </p>
              </div>
              <div class="card-footer text-muted">
                <p>
                  Your continued use of UrbanCart signifies your acceptance of
                  this policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
