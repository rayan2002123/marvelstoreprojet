import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = new URLSearchParams(location.search).get("email");

  useEffect(() => {
    if (email) {
      axios.post("http://localhost:5000/api/stripe/send-confirmation", { toEmail: email });
    }
  }, [email]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎉 Payment Successfully !</h1>
      <p>Thank for your order !</p>
      <p>A confirmation email has been sent to {email}</p>

      <button
        onClick={() => navigate("/cart")}
        style={{ marginTop: "10px", backgroundColor: "gray", padding: "10px", borderRadius: "5px", color: "white", cursor: "pointer" }}
      >
        ⬅ Back to cart
      </button>
    </div>
  );
};

export default SuccessPage;
