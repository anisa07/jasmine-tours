import React from "react";
import EventAccordion from "../components/EventAccordion";
import EventAccordionData from "../components/EventAccordionData";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import heroimage from "../assets/eventsbackground.png";
import { motion } from "framer-motion";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

function Events() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition }}
    >
      <Container>
        <div className="d-flex flex-column align-items-center mt-5">
          <h1 className="m-5">Мероприятия</h1>
          <p className="mb-5" style={{ fontSize: "1.1em" }}>
            На протяжении трех лет наша команда успешно осуществляет организацию
            самых разнообразных мероприятий по всей территории Нидерландов. Мы
            специализируемся на создании и воплощении идей от скромных и уютных
            мероприятий до грандиозных шоу. Наш опыт включает в себя организацию
            концертов, фестивалей, корпоративных мероприятий, деловых бранчей и
            тематических вечеринок. Мы гордимся возможностью предложить полный
            спектр услуг, начиная с разработки концепции и планирования и
            заканчивая проведением и послепродажным обслуживанием. Независимо от
            темы или формата мероприятия, мы нацелены на обеспечение высочайшего
            уровня организации и внимания к деталям, чтобы сделать каждое
            событие незабываемым для наших клиентов
          </p>
        </div>

        <motion.div
          className="row align-items-center"
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="col-lg-12 mb-5 text-center">
            <Image src={heroimage} fluid />
          </div>

          <div className="col-lg-12">
            <div className="row">
              <div>
                <EventAccordion data={EventAccordionData} />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Events;
