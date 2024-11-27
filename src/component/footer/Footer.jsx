import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4">
            <div className="name">
              <h3>Nikita Jagdale</h3>
              <p>I am glad to meet you !!</p>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="social_media">
              <Link to="/home">Home</Link> <br />
              <Link to="/about">About</Link><br />
              <Link to="contact">Contact</Link>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="social_media">
              <Link to="https://www.instagram.com/_nikiee_03/profilecard/?igsh=MXIxanpuMnY3MHA0aQ==">
                <i class="ri-instagram-line"></i> instagram
              </Link>
              <br />
              <Link>
                <i class="ri-linkedin-box-line"></i> Linked in
              </Link>
              <br />
              <Link to="https://github.com/Nikita-Jagdale">
                <i class="ri-github-fill"></i> GitHub
              </Link>
            </div>
          </Col>
        </Row>
        <section className="copyright_section">
          <Row>
            <Col lg="16">
              <div className="copyright">
                <span>
                  <marquee direction="right">
                    Copyrights <i class="ri-copyright-line"></i>Portfolio ||
                    Developed by Nikita Jagdale
                  </marquee>
                </span>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </section>
  );
};

export default Footer;
