import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { ReactComponent as CanvaSvgImage } from '../../assets/skills_img/canva.svg';
import { ReactComponent as CssSvgImage } from '../../assets/skills_img/css.svg';
import { ReactComponent as FigmaSvgImage } from '../../assets/skills_img/figma.svg';
import { ReactComponent as GitSvgImage } from '../../assets/skills_img/git.svg';
import { ReactComponent as HtmlSvgImage } from '../../assets/skills_img/html.svg';
import { ReactComponent as JsSvgImage } from '../../assets/skills_img/javascript.svg';
import { ReactComponent as MongoSvgImage } from '../../assets/skills_img/mongoDB.svg';
import { ReactComponent as PhotoshopSvgImage } from '../../assets/skills_img/photoshop.svg';
import { ReactComponent as ViteSvgImage } from '../../assets/skills_img/vitejs.svg';
import { ReactComponent as ReactSvgImage } from '../../assets/skills_img/react.svg';
import { ReactComponent as SassSvgImage } from '../../assets/skills_img/sass.svg';
import './skills.css'

function Skills() {
  return (
    <React.Fragment>
      <div className="skills-responsive">
        <div className="skillsContainer-responsive">
          <div className="skill--box" >
            <CssSvgImage className="skill--icon" />
            <h3>Css</h3>
          </div>
          <div className="skill--box" >
            <FigmaSvgImage className="skill--icon" />
            <h3>Figma</h3>
          </div>
          <div className="skill--box" >
            <GitSvgImage className="skill--icon" />
            <h3>Git</h3>
          </div>
          <div className="skill--box" >
            <HtmlSvgImage className="skill--icon" />
            <h3>Html</h3>
          </div>
          <div className="skill--box" >
            <JsSvgImage className="skill--icon" />
            <h3>Javascript</h3>
          </div>
          <div className="skill--box" >
            <ViteSvgImage className="skill--icon" />
            <h3>ViteJS</h3>
          </div>
          <div className="skill--box" >
            <ReactSvgImage className="skill--icon" />
            <h3>React</h3>
          </div>
          <div className="skill--box" >
            <SassSvgImage className="skill--icon" />
            <h3>Sass</h3>
          </div>
        </div>
      </div>
      <div id="skills" className="skills" >
        <div className="skillsContainer">
          <div className="skill--scroll">
            <Marquee
              gradient={false}
              speed={80}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
            >
              <div className="skill--box" >
                <CanvaSvgImage className="skill--icon" />
                <h3>Canva</h3>
              </div>
              <div className="skill--box" >
                <CssSvgImage className="skill--icon" />
                <h3>Css</h3>
              </div>
              <div className="skill--box" >
                <FigmaSvgImage className="skill--icon" />
                <h3>Figma</h3>
              </div>
              <div className="skill--box" >
                <GitSvgImage className="skill--icon" />
                <h3>Git</h3>
              </div>
              <div className="skill--box" >
                <HtmlSvgImage className="skill--icon" />
                <h3>Html</h3>
              </div>
              <div className="skill--box" >
                <JsSvgImage className="skill--icon" />
                <h3>Javascript</h3>
              </div>
              <div className="skill--box" >
                <MongoSvgImage className="skill--icon" />
                <h3>MongoDB</h3>
              </div>
              <div className="skill--box" >
                <PhotoshopSvgImage className="skill--icon" />
                <h3>Photoshop</h3>
              </div>
              <div className="skill--box" >
                <ViteSvgImage className="skill--icon" />
                <h3>ViteJS</h3>
              </div>
              <div className="skill--box" >
                <ReactSvgImage className="skill--icon" />
                <h3>React</h3>
              </div>
              <div className="skill--box" >
                <SassSvgImage className="skill--icon" />
                <h3>Sass</h3>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills;
