import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";

import {
  faAddressCard,
  faMailBulk,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqinxgh",
        "template_10ykkaz",
        form.current,
        "v97-lHq-_1JJq7JTp"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-100 contact" id="contact">
      <div className="container">
        <h1>GET IN TOUCH</h1>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 my-icons" data-aos="fade-up">
            <div className="contact-icons">
              <div className="d-flex items-center">
                <a
                  className="contact-icon"
                  href="https://www.linkedin.com/in/abdullah-bakr-3656811a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faMailBulk} />
                </a>
                <div className="des ">
                  <h4>Email</h4>
                  <p>abdullahbakr364@gmail.com</p>
                </div>
              </div>
              {/* <div className="d-flex items-center ">
                <a
                  className="contact-icon"
                  href="https://www.linkedin.com/in/abdullah-bakr-3656811a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "50px" }}
                >
                  <FontAwesomeIcon icon={faPerson} />
                </a>
                <div className="des">
                  <h4>Freelance</h4>
                  <p>Available Right Now </p>
                </div>
              </div> */}
              <div className="d-flex items-center ">
                <a
                  className="contact-icon"
                  href="https://www.linkedin.com/in/abdullah-bakr-3656811a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "50px" }}
                >
                  <FontAwesomeIcon icon={faPhoneSquare} />
                </a>
                <div className="des">
                  <h4>Phone</h4>
                  <p>+201024464190</p>
                </div>
              </div>
              <div className="d-flex items-center">
                <a
                  className="contact-icon"
                  href="https://www.linkedin.com/in/abdullah-bakr-3656811a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faAddressCard} />
                </a>
                <div className="des">
                  <h4>Address</h4>
                  <p>Egypt ,Kafr Elsheikh ,Biyala </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6" data-aos="fade-up">
            <div className="full-info">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group
                  className="mb-3 gap-2"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    style={{ margin: "20px 0" }}
                    required
                  />
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-4">
                  <Form.Control
                    type="text"
                    placeholder="Your Subject"
                    name="subject"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                    name="message"
                    required
                  />
                </Form.Group>
                <button className="btn cv">Send Message</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
