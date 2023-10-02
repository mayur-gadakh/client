import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>1. Information Collection</p>
          <p>2. Information Usage</p>
          <p>3. Information Sharing</p>
          <p>4. Security</p>
          <p>5. Cookies</p>
          <p>6. Children's Privacy</p>
          <p>7. Your Rights</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
