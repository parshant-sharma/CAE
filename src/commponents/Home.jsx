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
  var settings = {
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

  var settings1 = {
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
      <div style={{ justifyItems: "center" }}>
        <div className="Home">
          <div style={{ alignContent: "center" }}>
            <h1 className="Home_heading">
              Transforming Education For the Digital Age
            </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                marginTop: "10px",
                marginBottom: "50px",
                width: "90%",
              }}
            >
              At CAE 21, we’re redefining learning with innovative, scalable
              solutions for students, educators, and institutions worldwide.
            </p>

            <button
              style={{
                background: "#000076",
                color: "white",
                fontWeight: "500",
                fontSize: "20px",
                paddingLeft: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "20px",
                borderRadius: "5px",
              }}
            >
              Get Started
            </button>
          </div>

          <div>
            <img src={RectangleHome} alt="Home Rectangle" />
          </div>
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
          <div style={{ justifyItems: "center" }}>
            <h1
              style={{
                color: "#212121",
                fontWeight: "700",
                fontSize: "64px",
                lineHeight: "120%",
              }}
            >
              150<span style={{ color: "blue" }}>+</span>
            </h1>
            <h1 className="statists_desc">Clients</h1>
          </div>
          <div style={{ justifyItems: "center" }}>
            <h1
              style={{
                color: "#212121",
                fontWeight: "700",
                fontSize: "64px",
                lineHeight: "120%",
              }}
            >
              100<span style={{ color: "blue" }}>k</span>
            </h1>
            <h1 className="statists_desc">Students worldwide</h1>
          </div>
          <div style={{ justifyItems: "center" }}>
            <h1
              style={{
                color: "#212121",
                fontWeight: "700",
                fontSize: "64px",
                lineHeight: "120%",
              }}
            >
              45<span style={{ color: "blue" }}>k</span>
            </h1>
            <h1 className="statists_desc">Educators</h1>
          </div>
          <div style={{ justifyItems: "center" }}>
            <h1
              style={{
                color: "#212121",
                fontWeight: "700",
                fontSize: "64px",
                lineHeight: "120%",
              }}
            >
              99<span style={{ color: "blue" }}>%</span>
            </h1>
            <h1 className="statists_desc">Student satisfactions</h1>
          </div>
        </div>
      </div>

      <div
        style={{
          justifyItems: "center",
          background: "#E8E8E8",
          marginTop: "40px",
          padding: "30px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "500", padding: "30px" }}>
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
          <div
            style={{
              background: "white",
              padding: "40px",
              paddingBottom: "30px",
            }}
          >
            <img
              src={techIcon}
              style={{ width: "65px", marginBottom: "30px" }}
            />
            <h1 className="facilites_heading">Innovative Technology</h1>
            <p className="facilities_desc">
              -Leveraging AI, VR, AR, and blockchain to stay ahead of the curve.
            </p>
          </div>
          <div
            style={{
              background: "white",
              padding: "40px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <img
              src={teamIcon}
              style={{ width: "65px", height: "65px", marginBottom: "20px" }}
            />
            <h1 className="facilites_heading">Expert team</h1>
            <p className="facilities_desc">
              -A passionate team of educators, developers, and innovators
              driving impactful change.
            </p>
          </div>
          <div
            style={{
              background: "white",
              padding: "40px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <img
              src={trophyIcon}
              style={{ width: "65px", height: "65px", marginBottom: "20px" }}
            />
            <h1 className="facilites_heading">Expert Team</h1>
            <p className="facilities_desc">
              -A passionate team of educators, developers, and innovators
              driving impactful change.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${crousal_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "500",
            color: "white",
            textAlign: "center",
            paddingTop: "40px",
          }}
        >
          Explore Our Services
        </h1>
        <Slider
          {...settings}
          style={{ paddingTop: "60px", paddingBottom: "90px" }}
        >
          <div
            className="slick-slide"
            style={{ background: "white", margin: "10px" }}
          >
            <img
              src={exploreImg}
              style={{ background: "white", padding: "20px" }}
            />
            <h1
              style={{
                background: "white",
                paddingBottom: "20px",
                paddingLeft: "20px",
              }}
            >
              Online Learning Platform
            </h1>
          </div>
          <div className="slick-slide">
            <img
              src={exploreImg}
              style={{ background: "white", padding: "20px" }}
            />
            <h1
              style={{
                background: "white",
                paddingBottom: "20px",
                paddingLeft: "20px",
              }}
            >
              Virtual Classrooms
            </h1>
          </div>
          <div className="slick-slide">
            <img
              src={exploreImg}
              style={{ background: "white", padding: "20px" }}
            />
            <h1
              style={{
                background: "white",
                paddingBottom: "20px",
                paddingLeft: "20px",
              }}
            >
              AI-Powered Personalization
            </h1>
          </div>
          <div className="slick-slide">
            <img
              src={exploreImg}
              style={{ background: "white", padding: "20px" }}
            />
            <h1
              style={{
                background: "white",
                paddingBottom: "20px",
                paddingLeft: "20px",
              }}
            >
              service 1
            </h1>
          </div>
          <div className="slick-slide">
            <img
              src={exploreImg}
              style={{
                background: "white",
                padding: "20px",
                paddingLeft: "20px",
              }}
            />
            <h1
              style={{
                background: "white",
                paddingBottom: "20px",
                paddingLeft: "20px",
              }}
            >
              service 2
            </h1>
          </div>
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
          }}
        >
          <div style={{ position: "relative" }}>
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
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "-200px",
                padding: "25px",
                background: "white",
                borderRadius: "5px",
                width: "333px",
              }}
            >
              <h1 className="coreValue_heading">Innovation</h1>
              <p className="coreValue_desc">
                Pushing the boundaries of what's <br /> possible in education.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "50px",
                left: "-200px",
                padding: "25px",
                paddingRight: "0px",
                background: "white",
                borderRadius: "5px",
                width: "333px",
              }}
            >
              <h1 className="coreValue_heading">Assessibility</h1>
              <p className="coreValue_desc">
                Ensuring quality learning opportunities <br /> for everyone,
                everywhere.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                top: "50px",
                right: "-200px",
                padding: "25px",
                background: "white",
                borderRadius: "5px",
                width: "333px",
              }}
            >
              <h1 className="coreValue_heading">Excellence</h1>
              <p className="coreValue_desc">
                Striving for the highest standards in <br /> technology and
                pedagogy.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "50px",
                right: "-200px",
                padding: "25px",
                background: "white",
                borderRadius: "5px",
                width: "333px",
              }}
            >
              <h1 className="coreValue_heading">Collaboration</h1>
              <p className="coreValue_desc">
                Building meaningful partnerships to <br /> maximize impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#E8E8E8",
          paddingTop: "50px",
          marginBottom: "-20px",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "500",
          }}
        >
          Testimonies
        </h1>

        <div>
          <Slider
            {...settings1}
            style={{ paddingTop: "60px", paddingBottom: "90px" }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "white",
                  padding: "20px",
                }}
              >
                <h1 style={{ fontSize: "13px", fontWeight: "500" }}>
                  2 Mar, 2025
                </h1>
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
                    display: "inline",
                  }}
                >
                  {" "}
                  CAE 21 has transformed the way I teach. The interactive
                  platform keeps students engaged, and the AI-powered
                  personalization ensures they learn at their own pace. Virtual
                  classrooms make online sessions seamless, and the LMS
                  simplifies course management. It's a complete package for
                  modern educators, making teaching more effective and
                  enjoyable!.CAE 21 has transformed the way I teach. The
                  interactive platform keeps students engaged, and the
                  AI-powered personalization ensures they learn at their own
                  pace. Virtual classrooms make online sessions seamless, and
                  the LMS simplifies course management. It's a complete package
                  for modern educators, making teaching more effective and
                  enjoyable!{" "}
                </p>
                <img
                  src={doubleQuoteclose}
                  style={{ display: "inline", paddingTop: "7px" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "30px",
                  }}
                >
                  <img src={testimoniesProfileImg} />
                  <div style={{ paddingLeft: "15px" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "13px" }}>
                      Ram Prasad
                    </h1>
                    <p style={{ fontWeight: "500", fontSize: "8px" }}>
                      Student
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "white",
                  padding: "20px",
                }}
              >
                <h1 style={{ fontSize: "13px", fontWeight: "500" }}>
                  2 Mar, 2025
                </h1>
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
                    display: "inline",
                  }}
                >
                  {" "}
                  CAE 21 has transformed the way I teach. The interactive
                  platform keeps students engaged, and the AI-powered
                  personalization ensures they learn at their own pace. Virtual
                  classrooms make online sessions seamless, and the LMS
                  simplifies course management. It's a complete package for
                  modern educators, making teaching more effective and
                  enjoyable!.CAE 21 has transformed the way I teach. The
                  interactive platform keeps students engaged, and the
                  AI-powered personalization ensures they learn at their own
                  pace. Virtual classrooms make online sessions seamless, and
                  the LMS simplifies course management. It's a complete package
                  for modern educators, making teaching more effective and
                  enjoyable!{" "}
                </p>
                <img
                  src={doubleQuoteclose}
                  style={{ display: "inline", paddingTop: "7px" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "30px",
                  }}
                >
                  <img src={testimoniesProfileImg} />
                  <div style={{ paddingLeft: "15px" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "13px" }}>
                      seta devi
                    </h1>
                    <p style={{ fontWeight: "500", fontSize: "8px" }}>
                      Educator
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "white",
                  padding: "20px",
                }}
              >
                <h1 style={{ fontSize: "13px", fontWeight: "500" }}>
                  2 Mar, 2025
                </h1>
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
                    display: "inline",
                  }}
                >
                  CAE 21 has transformed the way I teach. The interactive
                  platform keeps students engaged, and the AI-powered
                  personalization ensures they learn at their own pace. Virtual
                  classrooms make online sessions seamless, and the LMS
                  simplifies course management. It's a complete package for
                  modern educators, making teaching more effective and
                  enjoyable!.CAE 21 has transformed the way I teach. The
                  interactive platform keeps students engaged, and the
                  AI-powered personalization ensures they learn at their own
                  pace. Virtual classrooms make online sessions seamless, and
                  the LMS simplifies course management. It's a complete package
                  for modern educators, making teaching more effective and
                  enjoyable!{" "}
                </p>
                <img
                  src={doubleQuoteclose}
                  style={{ display: "inline", paddingTop: "7px" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "30px",
                  }}
                >
                  <img src={testimoniesProfileImg} />
                  <div style={{ paddingLeft: "15px" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "13px" }}>
                      Jamiyu Aliyu
                    </h1>
                    <p style={{ fontWeight: "500", fontSize: "8px" }}>
                      Educator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* footer  */}

      <Footer />
    </>
  );
};

export default Home;
