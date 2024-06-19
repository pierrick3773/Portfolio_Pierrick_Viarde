import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  services,
} from "../../content_option";
import Skills from '../../components/skills/skills'



export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        
        <Helmet>
          <meta charSet="utf-8" />
          
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">


          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
            <Skills />
          </Col>
        </Row>
        <div className="presentation-container">
          <Row className="sec_sp presentation">
            <Col lg="5">
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div className="about-txt">
                <p>Je suis un Développeur Web Front-End junior passionné, spécialisé dans la création d'interfaces utilisateur conviviales et réactives. J'ai de bonnes connaissances dans les technologies front-end telles que HTML, CSS, JavaScript, avec une préférence pour React.<br /><br />
              Mon sens aiguisé du design me permet de transformer les maquettes en interfaces web fonctionnelles et visuellement attrayantes. Je suis également reconnu pour ma capacité à résoudre rapidement les problèmes de code, à optimiser le rendu des pages et à garantir une expérience utilisateur fluide.<br /><br />
              Je travaille efficacement en équipe, je communique clairement et je suis toujours prêt à apprendre de nouvelles technologies pour rester à jour dans ce domaine en constante évolution.</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </HelmetProvider>
  );
};
