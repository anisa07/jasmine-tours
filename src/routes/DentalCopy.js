import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import dentalImage from "../assets/zaradental.jpg";
import "../components/Dental.css";
import dentaltour1 from "../assets/dentaltour1.jpg";
import dentaltour2 from "../assets/dentaltour2.jpg";
import dentaltour3 from "../assets/dentaltour3.jpg";
import city1 from "../assets/cappadociadental.jpg";
import city2 from "../assets/erciyesdental.jpg";
import city3 from "../assets/tbilisidental.jpg";
import city4 from "../assets/kakhetidental.jpg";
import city5 from "../assets/mtskhetadental.jpg";
import city6 from "../assets/bakudental.jpg";
import city7 from "../assets/lahicdental.jpg";
import city8 from "../assets/ateshgahdental.jpg";
import dentalDataCopy from "../components/dentalMyStoryData";
import dentalInfoData from "../components/dentalInfoData";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

function Paragraph({ text }) {
  return (
    <p
      className="justified-text"
      style={{ fontSize: "1.1em", textAlign: "justify" }}
    >
      {text}
    </p>
  );
}

function RenderParagraphs({ paragraphs }) {
  return paragraphs.map((paragraph, index) => (
    <Paragraph key={index} text={paragraph} />
  ));
}

function Dental() {
  const renderParagraphs = (paragraphs) => {
    return <RenderParagraphs paragraphs={paragraphs} />;
  };

  return (
    <Container>
      <motion.div
        className="d-flex flex-column align-items-center justify-content-between mt-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition }}
      >
        <h1 className="text-center mb-5">Дентал Туризм</h1>
        <motion.div
          className="row"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition }}
        >
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-between">
              {renderParagraphs([
                dentalDataCopy.p1,
                dentalDataCopy.p2,
                dentalDataCopy.p3,
                dentalDataCopy.p4,
                dentalDataCopy.p5,
              ])}
            </div>
          </div>
          <motion.div
            className="col-lg-6 d-flex align-items-stretch justify-content-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition }}
          >
            <div
              style={{ minHeight: "100%", textAlign: "center" }}
              className="custom-shadow"
            >
              <Image
                src={dentalImage}
                fluid
                style={{ maxWidth: "80%", marginBottom: "1em" }}
              />
            </div>
          </motion.div>
        </motion.div>
        <div className="d-flex flex-column ">
          {renderParagraphs([
            dentalDataCopy.p6,
            dentalDataCopy.p7,
            dentalDataCopy.p8,
          ])}
        </div>
      </motion.div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          {renderParagraphs([
            dentalInfoData.p1,
            dentalInfoData.p2,
            dentalInfoData.p3,
          ])}
        </div>
        <h3 className=" text-center my-4">
          Какие услуги покрывает стоматологическийтуризм?
        </h3>
        <p>{dentalInfoData.p4}</p>
      </div>
      <div style={{ marginTop: "5em" }}>
        <Container>
          <Row style={{ textAlign: "justify" }}>
            <Col md={6} className="d-flex flex-column my-3">
              <h4 className="text-center mb-5">Реставрация зубов</h4>
              <p>{dentalInfoData.p5}</p>
            </Col>
            <Col md={6} className="mb-3 custom-shadow">
              <Image src={dentaltour3} fluid alt="Related Image" />
            </Col>
            <Col md={6} className="d-flex flex-column my-3">
              <h4 className="text-center mb-5">Имплантация</h4>
              <p>{dentalInfoData.p6}</p>
            </Col>
            <Col md={6} className="mb-3 custom-shadow">
              <Image src={dentaltour2} fluid alt="Related Image" />
            </Col>
            <Col md={6} className="d-flex flex-column my-3">
              <h4 className="text-center mb-5">All-on-4 или all-on-6</h4>
              <p>{dentalInfoData.p7}</p>
            </Col>
            <Col md={6} className="mb-3 custom-shadow">
              <Image src={dentaltour1} fluid alt="Related Image" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <p className="my-4">{dentalInfoData.p8}</p>
            </Col>
            <Col md={6} className="custom-shadow">
              <Image src={city1} fluid alt="Related Image" />
            </Col>
            <Col md={6} className="custom-shadow">
              <Image src={city2} fluid alt="Related Image" />
            </Col>
            <Col md={12}>
              <p className="my-4 text-center">
                <b>
                  <i>Грузия ( Тбилиси, Кахетия, Мцхета)</i>
                </b>
              </p>
            </Col>
            <Col md={4} className="custom-shadow">
              <Image src={city3} fluid alt="Related Image" />
            </Col>
            <Col md={4} className="custom-shadow">
              <Image src={city4} fluid alt="Related Image" />
            </Col>
            <Col md={4} className="custom-shadow">
              <Image src={city5} fluid alt="Related Image" />
            </Col>
            <Col md={12}>
              <p className="my-4 text-center">
                <b>
                  <i>Азербайджан( Баку, Лахидж, Атешкях)</i>
                </b>
              </p>
            </Col>
            <Col md={4} className="custom-shadow">
              <Image src={city6} fluid alt="Related Image" />
            </Col>
            <Col md={4} className="custom-shadow">
              <Image src={city7} fluid alt="Related Image" />
            </Col>
            <Col md={4} className="custom-shadow">
              <Image src={city8} fluid alt="Related Image" />
            </Col>
            <Col md={12} className="mt-4">
              <p>
                Мы сотрудничаем с лучшими клиниками и специалистами этих стран.
                Вы получите высокого качества услуги в любой сфере стоматологии.
              </p>
              <p>
                По всем вопросам свяжитесь с нами по телефону:{" "}
                <b>
                  <i>+31642065803</i>
                </b>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default Dental;
