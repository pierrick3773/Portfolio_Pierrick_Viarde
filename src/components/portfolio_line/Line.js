import Desktop from '../../assets/images/Desktop.png';
import Smartphone from "../../assets/images/Smartphone.png";
import './Line.css'; 

export function PortfolioLine () {
  return (
    <>
    <div className="Line"> 
      <a  > <img src={Desktop} alt="Desktop" /></a>
      <p>atreqfaerfe</p>
      <a> <img src={Smartphone} alt="Smartphone" /></a>
    </div>
    </>
  );
}
