import { Container, Row, Col, Image } from "react-bootstrap";
import dentalMyStoryData from "../data/dentalMyStoryData.js";
import dentalInfoData from "../data/dentalInfoData.jsx";
import { motion } from "framer-motion";
import "./Dental.css";
import zaradental from "../assets/zaradental.jpg";
import dentaltour1 from "../assets/dentaltour1.jpg";
import dentaltour2 from "../assets/dentaltour2.jpg";
import dentaltour3 from "../assets/dentaltour3.jpg";

function Paragraph({ text }) {
  return (
    <p className="justified-text" style={{ textAlign: "justify" }}>
      {text}
    </p>
  );
}

function RenderParagraphs({ paragraphs }) {
  return paragraphs.map((paragraph, index) => (
    <Paragraph key={index} text={paragraph} />
  ));
}

function DentalContent() {
  const renderParagraphs = (paragraphs) => {
    return <RenderParagraphs paragraphs={paragraphs} />;
  };

  return (
    <Container>
      <motion.div
        className="d-flex flex-column align-items-center justify-content-between mt-5 dental-text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center mb-5">Дентал Туризм</h1>
        <motion.div
          className="row"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-between">
              {renderParagraphs([
                dentalMyStoryData.p1,
                dentalMyStoryData.p2,
                dentalMyStoryData.p3,
                dentalMyStoryData.p4,
                dentalMyStoryData.p5,
              ])}
            </div>
          </div>
          <motion.div
            className="col-lg-6 d-flex align-items-stretch justify-content-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div
              style={{ minHeight: "100%", textAlign: "center" }}
              className="custom-shadow"
            >
              <Image
                src={zaradental.src || zaradental}
                fluid
                style={{ maxWidth: "80%", marginBottom: "1em" }}
                alt="Дентал туризм"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
        <div className="d-flex flex-column ">
          {renderParagraphs([
            dentalMyStoryData.p6,
            dentalMyStoryData.p7,
            dentalMyStoryData.p8,
          ])}
        </div>
      </motion.div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          <Paragraph text={dentalInfoData.p1} />
          <Paragraph text={dentalInfoData.p2} />
          <Paragraph text={dentalInfoData.p3} />
          <Paragraph text={dentalInfoData.p4} />
        </div>
        <Row className="mb-5">
          <Col lg={4} md={6} className="mb-3">
            <Image
              src={dentaltour1.src || dentaltour1}
              fluid
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
              alt="Дентал тур 1"
              loading="lazy"
            />
          </Col>
          <Col lg={4} md={6} className="mb-3">
            <Image
              src={dentaltour2.src || dentaltour2}
              fluid
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
              alt="Дентал тур 2"
              loading="lazy"
            />
          </Col>
          <Col lg={4} md={6} className="mb-3">
            <Image
              src={dentaltour3.src || dentaltour3}
              fluid
              style={{ height: "300px", objectFit: "cover", width: "100%" }}
              alt="Дентал тур 3"
              loading="lazy"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default DentalContent;

