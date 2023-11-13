import React from "react";
import profile from "../assets/Zaraprofile.jpg";

const Main = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={profile} alt="Zara" className="img-fluid thumbnail" />
        </div>
        <div className="col-md-6">
          <h1>Откройте Амстердам вместе с Зарой</h1>
          <p>
            Приветствую вас! Меня зовут Зара, и я живу в Амстердаме уже 5 лет. В
            этом прекрасном городе я стала профессиональным гидом и организую
            индивидуальные и групповые экскурсии по Нидерландам для
            русскоязычных туристов. Если вы хотите погрузиться в местную
            культуру и историю, то я готова с удовольствием провести вас через
            это невероятное путешествие, предоставив интересную экскурсионную
            программу и языковую поддержку.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
