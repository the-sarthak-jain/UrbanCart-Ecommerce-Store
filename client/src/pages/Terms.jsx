import React from "react";
import Layout from "../components/layouts/Layout";

const Terms = () => {
  return (
    <Layout title={"Terms and Conditions"}>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card shadow">
              <div class="card-header bg-primary text-white">
                <h3>Terms and Conditions</h3>
              </div>
              <div class="card-body">
                <h5>1. Introduction</h5>
                <p>
                  Welcome to UrbanCart. By accessing our site, you agree to
                  abide by these terms and conditions.
                </p>
                <h5>2. Use of Website</h5>
                <p>
                  You agree not to misuse our site or services and to comply
                  with all applicable laws.
                </p>
                <h5>3. Purchases</h5>
                <p>
                  All sales are final. Ensure you review products carefully
                  before making purchases.
                </p>
                <h5>4. Liability</h5>
                <p>
                  We are not liable for any damages arising from your use of our
                  site.
                </p>
                <h5>5. Contact Us</h5>
                <p>
                  If you have any questions or concerns about these Terms and
                  Conditions, please contact us at "mail.sarthakjain@gmail.com".
                </p>
              </div>
              <div class="card-footer text-muted">
                <p>
                  By using UrbanCart, you agree to these terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
