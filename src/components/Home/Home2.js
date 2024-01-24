import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an aspiring Product Manager currently pursuing my <b className="purple"> MBA </b> at
              <b className="purple"> Georgetown University McDonough School of Business.</b> With a background in
              <b className="purple"> cloud architecture, DevOps, managing engineering teams and successful product delivery</b>, I bring a
              unique blend of technical expertise and strategic thinking to the table.
              Explore my journey and discover how I drive impactful product
              development in the ever-evolving tech landscape.
              <br />
              <br />
              <br />
              <h1 style={{ fontSize: "2.3em" }}>
              <span className="purple"><center> WHAT I DO</center></span>
              </h1>
              <b className="purple"><h1 style={{ fontSize: "1.3em" }}>PRODUCT MANAGEMENT</h1></b>
              
              Developing product vision and strategy, making sure teams work on the right problems for customers and the business, designing systems to ensure great execution and delivery.
              <br />
              <br />
              <b className="purple"><h1 style={{ fontSize: "1.3em" }}>PRODUCT STRATEGY</h1></b>
              Defining a product's vision, goals, and roadmap to ensure successful development and market success
              <br />
              <br />
              <b className="purple"><h1 style={{ fontSize: "1.3em" }}>CLOUD ARCHITECTURE & AUTOMATION</h1></b>
              As a Cloud Architect with dual certifications—AWS Certified Cloud Architect and GCP Certified Cloud Architect—I excel in designing and managing scalable cloud solutions. Through my expertise in Cloud Architecture and Automation, I ensure optimal resource utilization, driving innovation and efficiency within my portfolio.
              <br />
              <br />
              <b className="purple"><h1 style={{ fontSize: "1.3em" }}>USER EXPERIENCE RESEARCH & DESIGN</h1></b>
              Understand the problem, empathize with the person. Explore the competitive landscape. Identify strategic opportunities. Define design goals and requirements.
              <br />
              <br />
              <b className="purple"><h1 style={{ fontSize: "1.3em" }}>DEVELOPMENT PROCESS DESIGN</h1></b>
              Understanding the needs of developers and the rest of the business, and collaborating with engineering leaders to design a development process that fits the culture of the organization and gets everyone involved in an appropriate way.
              <br />
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/reetvik7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/reetvik7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:re305@georgetown.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
