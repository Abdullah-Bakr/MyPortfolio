import React, { useEffect } from "react";
import mycode from "../Code typing-bro (1).png";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import mycv from "../Abdullah-front-end.pdf";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const downloadCV = () => {
    window.open(mycv, "_blank");
  };

  return (
    <div className="w-100 about" id="about">
      <div className="container">
        <h1 className="title">ABOUT ME</h1>
        <div className="row">
          <div
            className="col-12 col-md-6 col-lg-6 about-pic"
            data-aos="fade-up"
          >
            <div>
              <img src={mycode} alt="" />
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-6 about-info"
            data-aos="fade-up"
          >
            <div>
              <h3>Hello, I'm Abdullah Bakr</h3>
              <p className="p-2">
                Specializing in building eye-catching websites that exceed
                expectations. Utilizing HTML, CSS, and JavaScript expertise to
                create user-friendly, visually appealing sites that leave a
                lasting impression and ensure a smooth browsing experience for
                all.
              </p>
              <table className="p-2">
                <tbody>
                  <tr className="mb-2">
                    <td className="pe-5">Name :</td>
                    <td> Abdullah Bakr</td>
                  </tr>
                  <tr>
                    <td className="pe-5">Age :</td>
                    <td> 29</td>
                  </tr>
                  <tr>
                    <td className="pe-5">Address :</td>
                    <td> Egypt, Kafr El-Sheikh</td>
                  </tr>
                  <tr>
                    <td className="pe-5">E-mail :</td>
                    <td> abdullahbakr364@gmail.com</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn cv" onClick={downloadCV}>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
