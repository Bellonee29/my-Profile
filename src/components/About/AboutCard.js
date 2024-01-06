import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Wajiu Bello Olarewaju </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <ul>
              <li className="about-activity">
                <br />
                <ImPointRight /> I am currently employed as a software developer at Flamong LLC.
              </li>
              <li className="about-activity">
                <br />
                  <ImPointRight /> Completed Integrated BSc in Computer Science at LAUTECH, Ogbomosho, Nigeria.
              </li>
              <li className="about-activity">
                <br />
                <ImPointRight /> I have completed Integrated Higher National Diploma in computer Science at Federal Polytechnic Offa,
            Kwara State, Nigeria.
            <br />
            </li>
            </ul>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Aim to apply my skills and creativity to develop innovation technological solution that positively impact users and business!"{" "}
          </p>
          <footer className="blockquote-footer">Wajiu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
