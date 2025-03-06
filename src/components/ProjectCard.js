import { Col } from "react-bootstrap";
import React from "react";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, githubUrls }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
          
          {githubUrls ? (
            <div>
              <a
                href={githubUrls.frontend}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "underline", display: "block" }}
              >
                Frontend Code
              </a>
              <a
                href={githubUrls.backend}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "underline", display: "block" }}
              >
                Backend Code
              </a>
            </div>
          ) : (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
