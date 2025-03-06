import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import carrental from "../assets/img/carrental.jpg";
import weatherapp from "../assets/img/weatherapp.png";
import blogapp from "../assets/img/blog.gif";
import resum from "../assets/img/resum.jpg";
import ottplatform from "../assets/img/ottplatform.jpg";
import book from "../assets/img/book.png";
import Taskmanagement from "../assets/img/taskmanage.jpeg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const projects = [
    {
      title: "Car Rental Website",
      description: "Developed a Car rental website The project allows users to browse available cars, view details, and book rentals",
      imgUrl: carrental,
      githubUrl: "https://github.com/Naveenjith/rental_port.git",
    },
    {
      title: "Resume Builder",
      description: "Designed and developed a resume builder application. The application allows users to create, edit, and download professional resumes in PDF format",
      imgUrl: resum,
      githubUrl: "https://github.com/Naveenjith/resumebuilder.git",
    },
    {
      title: "OTT Platform",
      description: "Developed a comprehensive OTT platform that users can watch films by subscribing with plans",
      imgUrl: ottplatform,
      githubUrl:"https://github.com/Naveenjith/OTTPROJECT.git",
    },
    {
      title: "BookApp",
      description: "Developed a book application that fetches and displays book data using the Google Books API and React",
      imgUrl: book,
      githubUrl:"https://github.com/Naveenjith/Bookapp.git",
    },
    {
      title: "WeatherAPP",
      description: "Developed a weather app using Python, Django, HTML, CSS, and WeatherAPI to display real-time weather data",
      imgUrl: weatherapp,
      githubUrl:"https://github.com/Naveenjith/weatherapp.git",
    },
    {
      title: "BlogApp",
      description: "Developed a full-stack blog application built with Django REST Framework (DRF) and React.",
      imgUrl: blogapp,
      githubUrls: {
        frontend: "https://github.com/Naveenjith/blogfrontend.git",
        backend: "https://github.com/Naveenjith/blogproject.git",
      },
    },
    {
      title: "Task Management System",
      description: "A full-stack task management application built with Django REST Framework and React.",
      imgUrl: Taskmanagement,
      githubUrls: {
        frontend: "https://github.com/Naveenjith/TaskmanagerFrontend.git",
        backend: "https://github.com/Naveenjith/TaskmanagerBackend.git",
      },
    },
    
  ];

  // Split projects into three tabs, with 6 projects per tab
  const projectsTab1 = projects.slice(0, 6);
  const projectsTab2 = projects.slice(6, 12);
  const projectsTab3 = projects.slice(12, 18);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>"Innovative Web Solutions: Building responsive and user-centric applications that simplify complex tasks and enhance user experience."</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsTab1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsTab2.length > 0 ? (
                            projectsTab2.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))
                          ) : (
                            <p>No projects available in this tab.</p>
                          )}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsTab3.length > 0 ? (
                            projectsTab3.map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))
                          ) : (
                            <p>No projects available in this tab.</p>
                          )}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
