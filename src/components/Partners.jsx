import Marquee from "react-fast-marquee";
import "./Partners.css";
import ocLogo from "../assets/OC-logo.png";

export default function Partners() {
  return (
    <div className="partners-container">
      <h2 className="partners-title">Наши партнёры</h2>
      <p className="partners-text">
        Мы гордимся сотрудничеством с организациями, которые разделяют наши
        ценности и помогают делать путешествия ещё интереснее.
      </p>

      <Marquee direction="left" speed={80} gradient={false}>
        <div className="partner-logo-wrapper">
          <a href="https://ocnederland.nl/" target="_blank" rel="noreferrer">
            <img alt="OC Nederland партнёр" src={ocLogo.src || ocLogo} className="partner-logo" />
          </a>
        </div>
      </Marquee>
    </div>
  );
}

