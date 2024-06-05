import DesktopImg from '../../assets/images/Desktop.png';
import SmartphoneImg from "../../assets/images/Smartphone.png";
import './Line.css';
import { dataportfolio } from '../../content_option';
import gitLogo from '../../assets/images/gitLogo.svg'
import wwwlogo from '../../assets/images/internetLogo.svg'
import { useState, useEffect } from 'react';

export function PortfolioLine () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(document.querySelector('.Line'));
    return () => {
      observer.unobserve(document.querySelector('.Line'));
    };
  }, []);

  return (
    <>
      <div className="Line" data-visible={isVisible}>
        {dataportfolio.map((data, index) => (
          <div className="Line-desktop" key={index}>
            <div href={data.link} className='portfolio-link'>
              <div className={`desktop-container ${isVisible ? 'start-animation' : ''}`}>
                <img className="desktop" src={DesktopImg} alt="Desktop" />
                <img className="capture-desktop" src={data.captureDesktop} alt="Capture d'écran" />
              </div>
              <div className='Link-description'>
                <p className='title'>{data.title}</p>
                <p className='descrition'>{data.description}</p>
                <p className='descrition'>{data.responsive}</p>
                <div className='links'>
                  <a href={data.link} target="_blank"> <img className='wlogo' src={wwwlogo}/></a>
                  <a href={data.gitLink} target="_blank"> <img className='git-logo' src={gitLogo}/></a>
                </div>
              </div>
              <div className={`smartphone-container ${isVisible ? 'start-animation' : ''}`}>
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
