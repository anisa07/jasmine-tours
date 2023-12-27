import React from "react";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import Image from "react-bootstrap/Image";
import dentalData from "../components/dentalData";
import dentalImage from "../assets/zaradental.jpg";
import dentaltour1 from "../assets/dentaltour1.jpg";
import dentaltour2 from "../assets/dentaltour2.jpg";
import dentaltour3 from "../assets/dentaltour3.jpg";
import city1 from "../assets/cappadociadental.jpg";
import city2 from "../assets/bakudental.jpg";
import city3 from "../assets/tbilisidental.jpg";
import "../components/Dental.css";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

function Dental() {
  const { introText, mainText, secondaryText } = dentalData;
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition }}
      >
        <div className="d-flex flex-column align-items-center justify-content-between mt-5">
          <h1 className="text-center mb-5">Дентал Туризм</h1>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="d-flex flex-column justify-content-between">
                <p style={{ fontSize: "1.1em" }}>{introText}</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-stretch justify-content-center">
              <motion.div
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                style={{ minHeight: "100%" }}
              >
                <Image src={dentalImage} fluid style={{ maxWidth: "80%" }} />
              </motion.div>
            </div>
          </div>
          <div style={{ marginBottom: "5em" }}>
            <div className="d-flex flex-column align-items-center mt-5">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-stretch justify-content-center">
                  <div style={{ minHeight: "100%" }}>
                    <Image
                      src={dentaltour1}
                      fluid
                      style={{ maxWidth: "80%", marginBottom: "2em" }}
                    />
                    <Image
                      src={dentaltour2}
                      fluid
                      style={{ maxWidth: "80%", marginBottom: "2em" }}
                    />
                    <Image
                      src={dentaltour3}
                      fluid
                      style={{ maxWidth: "80%", marginBottom: "2em" }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-stretch">
                  <p style={{ fontSize: "1.1em", marginBottom: 0 }}>
                    {mainText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-between">
              <h2 className="text-center mb-5">
                Какие услуги покрывает стоматологический туризм?
              </h2>
              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="d-flex flex-column justify-content-between">
                  <p style={{ fontSize: "1.1em", marginBottom: "2em" }}>
                    {secondaryText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-stretch mb-5">
            <div className="d-flex  justify-content-between">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100%" }}
              >
                <div className="images-container">
                  <Image className="images" src={city1} fluid />
                  <Image className="images" src={city2} fluid />
                  <Image className="images" src={city3} fluid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
}

export default Dental;
