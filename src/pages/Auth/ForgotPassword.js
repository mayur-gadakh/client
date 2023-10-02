import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../style/AuthStyle.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethig went wrrong ");
    }
  };
  return (
    <Layout>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Reset Password</h4>

          <div className="mb-3">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your first attended school"
              required
            />
          </div>

          <div className="mb-3">
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter New Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Set Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
