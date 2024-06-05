import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import {
  dataabout,
  worktimeline,
  skills,
} from "../../content_option";
import { About } from "../about";
import { Portfolio } from "../portfolio";
import { ContactUs } from "../contact";
import bgImage from "../../assets/images/204646.png";
import bgImageSmall from "../../assets/images/fotor-ai-2024052192112.jpg";

export const Home = () => {
  return (
    <HelmetProvider>
      <style>
        {`
          @media (max-width: 900px) {
            .intro_sec {
              background-image: url(${bgImageSmall});
            }
          }
        `}
      </style>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div
          className="intro_sec d-block d-lg-flex align-items-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'round'
          }}
        >
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <a href="#portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <a href="#contact" className="text_2">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        <div id="portfolio"></div>
        <Portfolio />
        <div id="contact"></div>
        <ContactUs />
      </section>
    </HelmetProvider>
  );
};
