import React from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_o64ss8b",  //  EmailJS Service ID
        "template_m87lyq4",  //  EmailJS Template ID
        form.current,
        "Z-_EeZWvp257AOMoL"    //  EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Send");
          setStatus({ success: true, message: "Message sent successfully!" });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
          setStatus({ success: false, message: "Something went wrong. Please try again later." });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Lets Connect</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="user_name" placeholder="Your Name" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="user_email" placeholder="Your Email" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="user_phone" placeholder="Phone No." />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" placeholder="Your Message" required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
