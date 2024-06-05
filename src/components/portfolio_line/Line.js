import DesktopImg from '../../assets/images/Desktop.png';
import SmartphoneImg from "../../assets/images/Smartphone.png";
import './Line.css';
import { dataportfolio } from '../../content_option';
import gitLogo from '../../assets/images/gitLogo.svg'
import wwwlogo from '../../assets/images/internetLogo.svg'
import { useState, useEffect, useRef } from 'react';

export function PortfolioLine () {
  const refs = useRef([]);
  const [isVisible, setIsVisible] = useState(new Array(dataportfolio.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (index !== -1) {
            setIsVisible((prevState) => {
              const newState = [...prevState];
              newState[index] = entry.isIntersecting;
              return newState;
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    const lineDesktops = document.querySelectorAll('.Line-desktop');
    lineDesktops.forEach((lineDesktop, index) => {
      refs.current[index] = lineDesktop;
      observer.observe(lineDesktop);
    });
    return () => {
      lineDesktops.forEach((lineDesktop, index) => {
        observer.unobserve(lineDesktop);
      });
    };
  }, []);

  return (
    <>
      <div className="Line">
        {dataportfolio.map((data, index) => (
          <div ref={refs[index]} className="Line-desktop" key={index}>
            <div className='portfolio-link'>
              <div className={`desktop-container ${isVisible[index] ? 'start-animation' : 'end-animation'}`}>
                <img className="desktop" src={DesktopImg} alt="Desktop" />
                <img className="capture-desktop" src={data.captureDesktop} alt="Capture d'écran" />
              </div>
              <div className='Link-description'>
                <p className='title'>{data.title}</p>
                <p className='descrition'>{data.description}</p>
                <p className='descrition'>{data.responsive}</p>
                <div className='links'>
                  {data.link && (
                    <a href={data.link} target="_blank">
                      <img className='wlogo' src={wwwlogo}/>
                    </a>
                  )}
                  <a href={data.gitLink} target="_blank">
                    <img className='git-logo' src={gitLogo}/>
                  </a>
                </div>
              </div>
              <div className={`smartphone-container ${isVisible[index] ? 'start-animation' : 'end-animation'}`}>
                <img className="smartphone" src={SmartphoneImg} alt="Smartphone" />
                <img className="capture-smartphone" src={data.captureSmartphone} alt="Capture d'écran" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
