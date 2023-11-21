import React from "react";
import profile from "../assets/Zaraprofile.jpg";
import Container from "react-bootstrap/Container";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-custom-bg">
      <Container>
        <div className="container mt-md-0 pb-md-5">
          <div className="row justify-content-center m-md-4">
            <div className="col-md-8 text-center main-text">
              <h2>Немного обо мне</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 mb-md-0 custom-shadow">
              <img
                src={profile}
                alt="Zara"
                className="img-fluid thumbnail "
                style={{ width: "100%", height: "auto", marginTop: "2.5em" }}
              />
            </div>
            <div className="col-md-7">
              <h4
                className="mb-md-4 m-sm-4"
                style={{ marginTop: "2em", marginBottom: "2em" }}
              >
                Откройте Амстердам вместе с Зарой
              </h4>
              <p style={{ fontSize: "1.1em" }}>
                Приветствую вас! Меня зовут Зара, и я живу в Амстердаме уже 5
                лет. В этом прекрасном городе я стала профессиональным гидом и
                организую индивидуальные и групповые экскурсии по Нидерландам
                для русскоязычных туристов. Если вы хотите погрузиться в местную
                культуру и историю, то я готова с удовольствием провести вас
                через это невероятное путешествие, предоставив интересную
                экскурсионную программу и языковую поддержку.
              </p>
              <p style={{ fontSize: "1.1em" }}>
                Во время экскурсии я расскажу вам множество удивительных фактов
                и легенд о городе, покажу знаменитые достопримечательности, и вы
                сможете окунуться в атмосферу этого удивительного места. Я
                сосредоточусь на ваших интересах и предпочтениях, чтобы каждый
                из вас получил незабываемые впечатления от поездки.
              </p>
              <p style={{ fontSize: "1.1em" }}>
                Не стесняйтесь задавать вопросы и делиться своими пожеланиями -
                ваше удовольствие от путешествия для меня превыше всего!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
