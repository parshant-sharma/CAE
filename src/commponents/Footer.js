import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 2fr",
          background: "#626262",
          gap: "50px",
          padding: "60px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "30px", fontWeight: "700", color: "white" }}>
            CAE 21
          </h1>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "400",
              color: "white",
              marginTop: "20px",
              textAlign: "justify",
            }}
          >
            CAE 21 is an innovative EdTech startup revolutionizing education for
            the digital era. We provide interactive learning platforms,
            AI-powered personalization, and seamless virtual classrooms to
            enhance learning experiences. Our solutions cater to students,
            educators, and corporate professionals, ensuring scalable and
            impactful education. With a strong focus on technology-driven
            learning, we make education accessible and engaging. Join us in
            shaping the future of learning!
          </p>
        </div>
        <div>
          <h1 className="Footer_heading">Quick links</h1>
          <Link className="Footer_Link" to="#">
            LMS
          </Link>
          <Link className="Footer_Link" to="#">
            Virtual Classroom
          </Link>
          <Link className="Footer_Link" to="#">
            Online Learning
          </Link>
          <Link className="Footer_Link" to="#">
            Explore
          </Link>
        </div>
        <div>
          <h1 className="Footer_heading">Company</h1>
          <Link className="Footer_Link" to="#">
            Privacy Policy
          </Link>
          <Link className="Footer_Link" to="#">
            Refund Policy
          </Link>
          <Link className="Footer_Link" to="#">
            FAQ
          </Link>
          <Link className="Footer_Link" to="#">
            About
          </Link>
        </div>
        <div>
          <h1 className="Footer_heading">Social Media</h1>
          <Link className="Footer_Link" to="#">
            Facebook
          </Link>
          <Link className="Footer_Link" to="#">
            Twitter
          </Link>
          <Link className="Footer_Link" to="#">
            Instagram
          </Link>
          <Link className="Footer_Link" to="#">
            Linkedin
          </Link>
        </div>
        <div>
          <h1 className="Footer_heading">Newsletter</h1>
          <p className="Footer_Link">Kindly subscribe to our newsletter .</p>
          <div style={{ position: "relative" }}>
            <input
              placeholder="    Enter your email"
              className="placeholder:text-gray-300 placeholder:text-xl"
              style={{
                height: "45px",
                width: "100%",
                background: "white",
                boxShadow: "none",
                border: "none",
                borderRadius: "5px",
              }}
            />
            <button
              style={{
                fontSize: "13px",
                fontWeight: "600",
                position: "absolute",
                top: "5px",
                right: "5px",
                color: "white",
                padding: "10px",
                background: "#000076",
                borderRadius: "2px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
