import React from "react";
import lapto from "../Assets/images/about.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <>
      <section className="section about-sec" id="about">
        <div
          className="container"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="hero is-halfheight">
            <div className="hero-body">
              <div className="columns pt-6 mobile-about">
                <div className="column is-5 is-11-mobile">
                <img src={lapto} alt="about" className="img-fluid" />
                </div>
                <div className="column is-1"></div>
                <div className="column is-6 is-11-mobile">
                  <h3
                    className="has-text-weight-bold is-size-3-desktop is-size-5-mobile"
                    style={{ color: "white" }}
                  >
                    About Me
                  </h3>
                  <p
                    className="is-size-5 is-size-6-mobile pt-1"
                    style={{ color: "white" }}
                  >
                   I'm Hechem Ben Ahmed.I am about to finish my studies at the university, specialized in developing web systems
                  </p>
                 
                  <p
                    className="is-size-5 pt-5 is-size-6-mobile"
                    style={{ color: "white" }}
                  >
                    I started coding in 2018 and since then, I've been
                    passionate about it. I'm currently focusing on front-end web
                    development.
                  </p>
                  <p className="pt-6 ">
                    <button className="button is-size-5-desktop">
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/ben-asker-ichrak/"
                        style={{ color: "white" }}
                      >
                        {" "}
                        <span className="pl-3">LinkedIn</span>
                      </a>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;