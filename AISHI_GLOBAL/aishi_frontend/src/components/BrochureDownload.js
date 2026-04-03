import React, { useState } from "react";
import axios from "axios";

const BrochureDownload = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/leads/", { email });

      window.open("/AISHI_Technical_Brochure.pdf", "_blank");

      setShowModal(false);
      alert("Thank you! Your download will start.");
    } catch (error) {
      console.error("Error saving lead:", error);
    }
  };

  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <button
        onClick={() => setShowModal(true)}
        style={{
          padding: "15px 30px",
          background: "orange",
          color: "white",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        DOWNLOAD TECHNICAL BROCHURE
      </button>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ background: "white", padding: "30px" }}>
            <h3>Enter Email to Download</h3>

            <form onSubmit={handleDownload}>
              <input
                type="email"
                required
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <br />
              <br />

              <button type="submit">Download</button>
            </form>

            <br />

            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrochureDownload;