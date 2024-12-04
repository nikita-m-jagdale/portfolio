import React from "react";
import "../style/home.css";
import Helmet from "../component/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router";
import personImg from "../assets/image/personImg.jpg";

const Home = () => {
  const downloadUrl = (url) => {
  };

  return (
    <Helmet title="Home">
      <section>
        <div className="bg_img">
        </div>
      </section>
      <section>
        <div className="description">
          <Row>
            <Col lg={6}>
              <div className="w_e">
                <span className="heading">
                  <i class="ri-arrow-right-double-line"></i>Education
                </span>
                <div className="w_e_desc">
                  <span>Journalism - UES | 2017 - 2021</span>
                  <br />
                  <span>
                    Digital Marketing and Advertising - UES21 | 2019 -2022
                  </span>
                  <br />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="w_e">
                <span className="heading">
                  <i class="ri-arrow-right-double-line"></i>Work Experience{" "}
                </span>
                <div className="w_e_desc">
                  <span>
                    Marketing and Business Development - Coven | 2023 -
                    Currently
                  </span>
                  <br />
                  <span>
                    Marketing and partnerShip Specialist - intermedia | 2022 -
                    2023
                  </span>
                  <br />
                  <span>
                    Partnership & new Business - Ballon Group | 2021 - 2022
                  </span>
                  <br />
                  <span>
                    Digital & Marketing Consultancy - ArgVet | 2020 - 2021
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section>
        <div className="description">
          <Row>
            <Col lg={6}>
              <div className="w_e">
                <span className="heading">
                  <i class="ri-arrow-right-double-line"></i>Certification
                </span>
                <div className="w_e_desc">
                  <span>Python of Data Science AI - IBM Coursera | 2023</span>
                  <br />
                  <span>UX/UI Advanced Design - Coderhouse | 2022</span>
                  <br />
                  <span>UX/UI Design - Coderhouse | 2021</span>
                  <br />
                  <span>
                    First Certification in English (FCE) - Cambridge English|
                    2015
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="w_e">
                <span className="heading">
                  <i class="ri-arrow-right-double-line"></i>Expertiese{" "}
                </span>
                <div className="w_e_desc">
                  <span>
                    Marketing and Business Development - Coven | 2023 -
                    Currently
                  </span>
                  <br />
                  <span>
                    Marketing and partnerShip Specialist - intermedia | 2022 -
                    2023
                  </span>
                  <br />
                  <span>
                    Partnership & new Business - Ballon Group | 2021 - 2022
                  </span>
                  <br />
                  <span>
                    Digital & Marketing Consultancy - ArgVet | 2020 - 2021
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <div className="body_section">
        <div className="person_info">
          <Row>
            <Col lg="5" md="5">
              <div className="person_title">
                <p className="person_subtitile">hello,</p>
                <h1>
                  <span>I'm</span> &nbsp;Nikita Jagdale
                </h1>
                <p>
                  <span className="person_prof">Digital Marketing</span>
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  onClick={{ downloadUrl }}
                  className="resume_btn"
                >
                  <Link to="/resume">
                    <h2>Download Resume</h2>
                  </Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="5" md="5">
              <div className="person_img">
                <img src={personImg} alt=" no " />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <section>
        <div className="personal_desc">
          <h3>How can I help you ?</h3>
          <div className="answer">
            <Row>
              <Col lg={6}>
                <h4>SMM</h4>
                <br />
                <p>Strategic planning of posts</p>
                <p>Content Scheduling </p>
                <p>Content Creation</p>
                <p>Community Building</p>
                <br />
                <br />
                <br />
                <br />
                <h4>Design</h4>
                <br />
                <p>
                  UX/Ui Design : Website , Application , User Interface <br />{" "}
                  And Experience , landing pages.
                </p>
                <p>
                  Graphics Design : Invitation , Cards , Presentation, <br />
                  Social Media Content , Videos, Logotypes
                </p>
              </Col>
              <Col lg={6}>
                <h4>Digital Marketing</h4>
                <br />
                <p>
                  Brand Positioning : Market analysis and testing ,<br />{" "}
                  benchmarking , advertising, lead generation campaigns
                </p>
                <p>
                  Strategic Communication : Writing digital Content,
                  <br />
                  UX writing, Email Marketing , Articles
                </p>
                <p>Analytics : Measurement and Performance Reporting . </p>
                <p>Management of email Marketing tools CRM</p>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
