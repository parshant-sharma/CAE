import React from "react";
import Header from "./Header";
import RectangleHome from "../images/Rectangle_Home.png";
import techIcon from "../images/Vector.png";
import teamIcon from "../images/Vector(1).png";
import trophyIcon from "../images/Vector(2).png";
import Slider from "react-slick";
import exploreImg from "../images/exploreImg.png";
import crousal_bg from "../images/crousal_bg.png";
import Footer from "./Footer";
import CoreValuePic from "../images/coreValuePic.png";
import ratingImg from "../images/ratings.png";
import doubleQuoteopen from "../images/doubleQuote1.png";
import doubleQuoteclose from "../images/doubleQuote2.png";
import testimoniesProfileImg from "../images/testimonies_profile_img.png";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <Header />
      <div className="Home">
        <div style={{ textAlign: "center" }}>
          <h1 className="Home_heading">Transforming Education For the Digital Age</h1>
          <p style={{ fontWeight: "400", fontSize: "16px", marginTop: "10px", marginBottom: "50px" }}>
            At CAE 21, we’re redefining learning with innovative, scalable solutions for students, educators, and institutions worldwide.
          </p>
          <button
            style={{
              background: "#000076",
              color: "white",
              fontWeight: "500",
              fontSize: "20px",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            Get Started
          </button>
        </div>

        <div>
          <img src={RectangleHome} alt="Home Rectangle" />
        </div>

        <div
          style={{
            marginTop: "50px",
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            background: "#E8E8E8",
            padding: "20px",
          }}
        >
          {[
            { value: "150+", label: "Clients" },
            { value: "100k", label: "Students worldwide" },
            { value: "45k", label: "Educators" },
            { value: "99%", label: "Student satisfactions" },
          ].map(({ value, label }, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <h1 style={{ color: "#212121", fontWeight: "700", fontSize: "64px" }}>
                {value}
              </h1>
              <h1 className="statists_desc">{label}</h1>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#E8E8E8",
          marginTop: "40px",
          padding: "30px",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "500", textAlign: "center", marginBottom: "30px" }}>
          Our Facilities
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "30px",
            padding: "30px",
          }}
        >
          {[
            { icon: techIcon, title: "Innovative Technology", description: "-Leveraging AI, VR, AR, and blockchain to stay ahead of the curve." },
            { icon: teamIcon, title: "Expert Team", description: "-A passionate team of educators, developers, and innovators driving impactful change." },
            { icon: trophyIcon, title: "Expert Team", description: "-A passionate team of educators, developers, and innovators driving impactful change." },
          ].map(({ icon, title, description }, index) => (
            <div key={index} style={{ background: "white", padding: "40px" }}>
              <img src={icon} style={{ width: "65px", marginBottom: "30px" }} />
              <h1 className="facilites_heading">{title}</h1>
              <p className="facilities_desc">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${crousal_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "500", color: "white" }}>Explore Our Services</h1>
        <Slider {...settings} style={{ paddingTop: "60px", paddingBottom: "90px" }}>
          {["Online Learning Platform", "Virtual Classrooms", "AI-Powered Personalization", "Service 1", "Service 2"].map((service, index) => (
            <div key={index} className="slick-slide" style={{ background: "white", margin: "10px" }}>
              <img src={exploreImg} style={{ padding: "20px" }} />
              <h1 style={{ paddingBottom: "20px", paddingLeft: "20px" }}>{service}</h1>
            </div>
          ))}
        </Slider>
      </div>

      <div
        style={{
          background: "#E8E8E8",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "700",
            padding: "50px",
          }}
        >
          Core Values
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            position: "relative",
          }}
        >
          <img
            src={CoreValuePic}
            style={{
              display: "block",
              margin: "auto",
              position: "relative",
              width: "696px",
              maxWidth: "80vw",
            }}
          />
          {[
            { title: "Innovation", description: "Pushing the boundaries of what's possible in education.", position: "top" },
            { title: "Accessibility", description: "Ensuring quality learning opportunities for everyone, everywhere.", position: "bottom" },
            { title: "Excellence", description: "Striving for the highest standards in technology and pedagogy.", position: "top" },
            { title: "Collaboration", description: "Building meaningful partnerships to maximize impact.", position: "bottom" },
          ].map(({ title, description, position }, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                [position]: "50px",
                left: position === "top" ? "-200px" : "auto",
                right: position === "bottom" ? "-200px" : "auto",
                padding: "25px",
                background: "white",
                borderRadius: "5px",
                width: "333px",
              }}
            >
              <h1 className="coreValue_heading">{title}</h1>
              <p className="coreValue_desc">{description}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#E8E8E8",
          paddingTop: "50px",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "48px", fontWeight: "500" }}>
          Testimonies
        </h1>

        <div>
          <Slider {...settings1} style={{ paddingTop: "60px", paddingBottom: "90px" }}>
            {[
              { name: "Ram Prasad", role: "Student", date: "2 Mar, 2025", content: "CAE 21 has transformed the way I teach..." },
              { name: "Sita Devi", role: "Educator", date: "2 Mar, 2025", content: "CAE 21 has transformed the way I teach..." },
              { name: "Jamiyu Aliyu", role: "Educator", date: "2 Mar, 2025", content: "CAE 21 has transformed the way I teach..." },
            ].map(({ name, role, date, content }, index) => (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "white",
                    padding: "20px",
                  }}
                >
                  <h1 style={{ fontSize: "13px", fontWeight: "500" }}>{date}</h1>
                  <img src={ratingImg} />
                </div>
                <div style={{ background: "white", padding: "20px" }}>
                  <img src={doubleQuoteopen} style={{ marginBottom: "-5px" }} />
                  <p
                    className="testimonies_para"
                    style={{
                      fontWeight: "500",
                      fontSize: "15px",
                      textAlign: "justify",
                    }}
                  >
                    {content}
                  </p>
                  <img src={doubleQuoteclose} style={{ paddingTop: "7px" }} />
                  <div style={{ display: "flex", alignItems: "center", paddingTop: "30px" }}>
                    <img src={testimoniesProfileImg} />
                    <div style={{ paddingLeft: "15px" }}>
                      <h1 style={{ fontWeight: "500", fontSize: "13px" }}>{name}</h1>
                      <p style={{ fontWeight: "500", fontSize: "8px" }}>{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
