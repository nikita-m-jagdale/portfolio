import React, { useRef, useEffect } from "react";
import "./header.css";
import { Container, Row, Col } from "reactstrap";
// import logo from "../../assets/images/eco-logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
//import userIcon from "../../assets/images/user-icon.png";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";

const Header = () => {
  const nav_links = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "about",
      display: "About",
    },
    {
      path: "contact",
      display: "Contact",
    },
    
  ];
  const headerRef = useRef(null);
  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  useEffect(() => {
    stickyHeaderFunction();
    return () => window.removeEventListener("scroll", { stickyHeaderFunction });
  });
  return (
    <header ref={headerRef} className="header">
      <Container>

        <Row>
          <div className="nav_wrapper">
              <Link to="/home">
                <div className="logo">
                  <h1>Nikita Jagdale</h1>
                </div>
              </Link>
              <div className="navigation">
                <ul className="menu">
                  {nav_links.map((item, index) => (
                    <motion.li
                      whileTap={{ scale: 1.3 }}
                      className="nav_item"
                      key={index}
                    >
                      <NavLink
                        className={(navClass) =>
                          navClass.isActive ? "nav_active" : ""
                        }
                        to={item.path}
                      >
                        {item.display}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
