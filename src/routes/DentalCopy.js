import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import dentalImage from "../assets/zaradental.jpg";
import "../components/Dental.css";
import dentalDataCopy from "../components/dentalMyStoryData";
import dentalInfoData from "../components/dentalInfoData";
import dentaltour1 from "../assets/dentaltour1.jpg";
import dentaltour2 from "../assets/dentaltour2.jpg";
import dentaltour3 from "../assets/dentaltour3.jpg";

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

function Dental() {
  const renderParagraphs = (paragraphs) => {
    return paragraphs.map((paragraph, index) => (
      <Paragraph key={index} text={paragraph} />
    ));
  };

  return (
    <Container>
      <div className="d-flex flex-column align-items-center justify-content-between mt-5">
        <h1 className="text-center mb-5">Дентал Туризм</h1>
        <div className="row">
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
          <div className="col-lg-6 d-flex align-items-stretch justify-content-center">
            <div
              style={{ minHeight: "100%", textAlign: "center" }}
              className="custom-shadow"
            >
              <Image src={dentalImage} fluid style={{ maxWidth: "80%" }} />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column ">
          {renderParagraphs([
            dentalDataCopy.p6,
            dentalDataCopy.p7,
            dentalDataCopy.p8,
          ])}
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-column">
          {renderParagraphs([
            dentalInfoData.p1,
            dentalInfoData.p2,
            dentalInfoData.p3,
            dentalInfoData.p4,
          ])}
        </div>
      </div>
      <div style={{ marginBottom: "5em" }}>
        <div className="d-flex flex-column align-items-center mt-5">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch justify-content-center">
              <div
                className="custom-shadow"
                style={{ minHeight: "100%", textAlign: "center" }}
              >
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
              <div className="d-flex flex-column">
                {renderParagraphs([
                  dentalInfoData.p1,
                  dentalInfoData.p2,
                  dentalInfoData.p3,
                ])}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Dental;
