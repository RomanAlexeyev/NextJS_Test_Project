"use client";

import { useInView } from "react-intersection-observer";
import "../../styles/advantages.css";

export default function Advantages() {
  const { ref: advantagesRef, inView: advantagesInView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section className="advantages" ref={advantagesRef}>
      <div
        className={`advantage-section in-view ${
          advantagesInView ? "in-view" : ""
        }`}
      >
        <div className="advantage-section-title">
          <h3>Индивидуальный подход</h3>
        </div>
        <div className="advantage-section-description">
          <p>
            Каждая задача уникальна, мы находим <b>лучшее решение</b> для
            клиента, исходя из его запросов
          </p>
        </div>
      </div>
      <div
        className={`advantage-section in-view ${
          advantagesInView ? "in-view" : ""
        }`}
      >
        <div className="advantage-section-title">
          <h3>Консультация</h3>
        </div>
        <div className="advantage-section-description">
          <p>
            Помогаем с бизнес-процессами и всегда <b>делимся</b> личным опытом
          </p>
        </div>
      </div>
      <div
        className={`advantage-section in-view ${
          advantagesInView ? "in-view" : ""
        }`}
      >
        <div className="advantage-section-title">
          <h3>Поддержка</h3>
        </div>
        <div className="advantage-section-description">
          <p>
            Всегда нацелены на <b>долгосрочное сотрудничество</b> и
            сопровождение продукта
          </p>
        </div>
      </div>
      <div
        className={`advantage-section in-view ${
          advantagesInView ? "in-view" : ""
        }`}
      >
        <div className="advantage-section-title">
          <h3>Прозрачность</h3>
        </div>
        <div className="advantage-section-description">
          <p>
            <b>Открыто и честно</b> ведем все процессы разработки
          </p>
        </div>
      </div>
      <div
        className={`advantage-section in-view ${
          advantagesInView ? "in-view" : ""
        }`}
      >
        <div className="advantage-section-title">
          <h3>Надежность</h3>
        </div>
        <div className="advantage-section-description">
          <p>
            Партнерства с <b>крупными агентствами</b>, которые помогают в
            сопровождении <b>сложных проектов</b>
          </p>
        </div>
      </div>
      <div
        className={`advantage-section in-view ${
          advantagesInView ? "in-view" : ""
        }`}
      >
        <div className="advantage-section-title">
          <h3>В ногу со временем</h3>
        </div>
        <div className="advantage-section-description">
          <p>
            Осваиваем и внедряем <b>новые трендовые технологии</b> в проекты
          </p>
        </div>
      </div>
    </section>
  );
}
