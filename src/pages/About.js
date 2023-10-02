import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Ecommerce Website, your ultimate destination for all your
            online shopping needs! We are a passionate team of dedicated
            individuals who believe in the power of e-commerce to transform the
            way you shop and live. Our mission is to provide you with a seamless
            and enjoyable online shopping experience, offering a wide range of
            products that cater to your every need.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
