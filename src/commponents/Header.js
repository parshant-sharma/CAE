import React from "react";
import { Link } from "react-router-dom";
import CAE_LOGO from "../images/CAE_logo.png";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyItems: "center", width: "100%" }}>
      <header
        style={{
          width: "80%",
          backgroundColor: "white",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <img
          src={CAE_LOGO}
          alt="CAE Logo"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "6rem",
          }}
        />

        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              listStyleType: "none",
              paddingLeft: 0,
            }}
          >
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#home"
                style={{
                  color: "#1e40af", // blue-600
                  fontSize: "1.125rem", // text-lg
                  fontWeight: "500", // font-medium
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316"; // hover:text-orange-400
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#1e40af"; // revert to blue-600
                }}
              >
                Home
              </Link>
            </li>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#services"
                style={{
                  color: "#000", // black
                  fontSize: "1.125rem", // text-lg
                  fontWeight: "500", // font-medium
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316"; // hover:text-orange-400
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000"; // revert to black
                }}
              >
                Services
              </Link>
            </li>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#contact"
                style={{
                  color: "#000", // black
                  fontSize: "1.125rem", // text-lg
                  fontWeight: "500", // font-medium
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316"; // hover:text-orange-400
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000"; // revert to black
                }}
              >
                Contact
              </Link>
            </li>
            <li style={{ marginRight: "1.5rem" }}>
              <Link
                to="#about"
                style={{
                  color: "#000", // black
                  fontSize: "1.125rem", // text-lg
                  fontWeight: "500", // font-medium
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316"; // hover:text-orange-400
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000"; // revert to black
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#support"
                style={{
                  color: "#000", // black
                  fontSize: "1.125rem", // text-lg
                  fontWeight: "500", // font-medium
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#f97316"; // hover:text-orange-400
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#000"; // revert to black
                }}
              >
                Support
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
