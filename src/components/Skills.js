import React from "react";
import css from "../assets/img/logo-css-3-2048.png";
import js from "../assets/img/JavaScript-Emblem.png";
import html from "../assets/img/html-logo.png";
import jq from "../assets/img/jquery-icon-png-18.jpg";
import python from "../assets/img/imgpython.webp";
import django from "../assets/img/django-logo.png";
import react from "../assets/img/logo-react-icon.png";
import boot from "../assets/img/boot.jpeg";
import rest from "../assets/img/rest.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                In this section, I showcase my professional and technical
                proficiencies across various domains.<br></br> These skills
                highlight my expertise and experience, demonstrating my
                capability to contribute effectively to any project.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                    <img src={python} alt="Image" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={django} alt="Image" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={jq} alt="Image" />
                  <h5>Jquery</h5>
                </div>
                <div className="item">
                  <img src={boot} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={rest} alt="Image" />
                  <h5>RestAPI</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
