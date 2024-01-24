import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There!!
            <br />
            <br />
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              I'm <strong className="purple">Reetvik</strong>
            </h1>
            An aspiring Product Manager with a strong background in product development and engineering in the Hi-Tech industry, I specialize in leading complex technology-driven projects to successful outcomes. My experience includes managing project sprints, ensuring high-quality delivery, and collaborating with diverse teams and stakeholders. Comfortable with various roles, from coding to cloud and automation, I prioritize asking the right questions and assembling effective teams for success.
            <br />
            <br />
            Currently pursuing an <strong className="purple">MBA </strong> at <strong className="purple">Georgetown University McDonough School of Business</strong>, I am enhancing my hands-on industry experience with strategic leadership and technological acumen. My focus areas include Strategy, AI, and New Product Development, reflecting my commitment to driving impactful product development in a fast-paced environment.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
