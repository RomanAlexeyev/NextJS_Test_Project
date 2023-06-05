"use client";

import { useInView } from "react-intersection-observer";
import Counter from "../utils/counter";

export default function NumbersInfo() {
  const { ref: numbersRef, inView: numbersInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section className="info">
      <div className="info-section quantity" ref={numbersRef}>
        <div className="quantity-section">
          <p className="large">
            <Counter limit={20} inView={numbersInView} />
            <span>+</span>
          </p>
          <p>запущенных проектов</p>
          <p className="small">за полгода</p>
        </div>
        <div className="quantity-section">
          <p className="large">
            <Counter limit={10} inView={numbersInView} />
            <span>+</span>
          </p>
          <p>проектов</p>
          <p className="small">
            над которыми работают
            <br />
            специалисты в рамках аутстаффа
          </p>
        </div>
        <div className="quantity-section">
          <p className="large">
            <Counter limit={50} inView={numbersInView} /> 000<span>+</span>
          </p>
          <p>пользователей</p>
          <p className="small">используют наши продукты ежедневно</p>
        </div>
      </div>
    </section>
  );
}
