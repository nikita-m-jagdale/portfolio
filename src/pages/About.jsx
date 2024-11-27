import React from "react";
import Helmet from "../component/helmet/Helmet";
import { Col , Row } from "react-bootstrap";
import "../style/about.css";
import aboutImg from '../assets/image/personImg.jpg';
import computerImg from '../assets/image/computer_images.jpg'

const About = () => {
  return (
    <Helmet title="About">
      <section className="information">
        <Row>
          <Col lg="6">
            <div>
              <h2>Profile</h2>
              <p style={{ color: "black" }}>
                We are seeking a passionate and results-driven Digital Marketing
                Specialist to join our dynamic marketing team. In this role, you
                will be responsible for developing, implementing, and managing
                our digital marketing strategies to enhance brand awareness,
                drive traffic, and generate leads across various online
                platforms.
              </p>
            </div>
          </Col>
          <Col>
            <div className="prof_img">
              <img src={aboutImg} alt="no " />
              
            </div>
          </Col>
        </Row>
      </section><br /><br />
      <section>
        <Row>
          <Col lg="6">
            <div className="respo_img">

            </div>
          </Col>
          <Col lg="6">
            <div respo>
              <h2>Responsibilities</h2>
              <p style={{ color: "black" }}>
                <h5>Strategy Development : <span className="desc">Collaborate with the marketing team to create and execute comprehensive digital marketing strategies that align with business goals and target audience needs.</span></h5>
              </p>
              <p style={{ color: "black" }}>
                <h5>Content Creation : <span className="desc">Develop engaging and relevant content for various digital channels, including websites, blogs, social media, email newsletters, and paid advertising campaigns.</span></h5>
              </p>
              <p style={{ color: "black" }}>
                <h5>Social Media Management : <span className="desc"> Manage and grow our social media presence across platforms such as Facebook, Instagram, LinkedIn, and Twitter by creating compelling content, engaging with followers, and analyzing performance metrics.</span></h5>
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <section className="information">
        <Row>
          <Col lg="6">
            <div>
              <h2>What we Offer</h2>
              <ul>
                <li>A collaborative and inclusive work environment.</li>
                <li>Opportunities for professional growth and development.</li>
                <li>Competitive salary and benefits package.</li>
                <li>Flexible work arrangements.</li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      <section className="respo">
        <Row>
          <Col lg="7">
          <img src={computerImg} alt="no found" />
          </Col>
          <Col lg="5">
            <div className="knowledge">
              <h2>Computer Knowledge</h2>
              <ul>
                <li>Canva</li>
                <li>Web Development</li>
                <li>Python Graph Design</li>
                <li>PowerPoint</li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
    </Helmet>
  );
};

export default About;
