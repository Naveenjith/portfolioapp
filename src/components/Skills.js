import React from "react";
import css from "../assets/img/css.webp";
import js from "../assets/img/js.png";
import html from "../assets/img/html.webp";
import jq from "../assets/img/jq.png";
import python from "../assets/img/imgpython.webp";
import django from "../assets/img/django-python-logo.png";
import react from "../assets/img/logo-react-icon.png";
import boot from "../assets/img/bootstrap-removebg-preview.png";
import rest from "../assets/img/rest.png";
import mysql from "../assets/img/mysql.png";
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
                autoPlay={true}
                autoPlaySpeed={2000}
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
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>Mysql</h5>
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
