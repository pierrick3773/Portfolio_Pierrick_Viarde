import React,{ useContext } from 'react';
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
import './skills.css'

 function Skills() {

    

    

    return (
        <div id ="skills"className="skills" >
            <div className="skillsHeader">
                
            </div>
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
                            </div>
                            <div className="skill--box" >
                            <CssSvgImage className="skill--icon" />
                            </div>
                            <div className="skill--box" >
                            <FigmaSvgImage className="skill--icon" />
                            </div>
                            <div className="skill--box" >
                            <GitSvgImage className="skill--icon" />
                            </div>
                            <div className="skill--box" >
                            <HtmlSvgImage className="skill--icon" />
                            </div>
                            <div className="skill--box" >
                            <JsSvgImage className="skill--icon" />
                            </div>
                            <div className="skill--box" >
                            <MongoSvgImage className="skill--icon" />
                            </div>
                            <div className="skill--box" >
                            <PhotoshopSvgImage className="skill--icon" />
                            </div>
                            <div className="skill--box" >
                            <ViteSvgImage className="skill--icon" />
                            </div>
                       
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
export default Skills;