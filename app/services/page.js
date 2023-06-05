import "../../styles/advantages.css";

import { outstaffPrices } from "@/lib/outstaff-prices";
import OutstaffPricesTable from "@/components/tables/outstaff-prices-table";

export default function Services() {
  return (
    <div className="page">
      <div className="page-title">
        <h1>Услуги</h1>
      </div>
      <div className="info-section advantages">
        <div className={`advantage-section big in-view`}>
          <div className="advantage-section-title">
            <h3>Аналитические платформы</h3>
          </div>
          <div className="advantage-section-description">
            <p>
              Реализация интерфейсов сбора и анализа массивов данных в удобные
              сервисы и приложения с полным выводом метрик
            </p>
          </div>
        </div>
        <div className={`advantage-section big in-view`}>
          <div className="advantage-section-title">
            <h3>ERP / CRM-системы</h3>
          </div>
          <div className="advantage-section-description">
            <p>
              Разработка и внедрение индивидуального ПО с автоматизацией
              процессов под задачи бизнеса
            </p>
          </div>
        </div>
        <div className={`advantage-section big in-view`}>
          <div className="advantage-section-title">
            <h3>Telegram-боты / ML</h3>
          </div>
          <div className="advantage-section-description">
            <p>
              Создание ботов любой сложности с опцией внедрения интеллектуальных
              сервисов на основе AI/ML технологий
            </p>
          </div>
        </div>
        <div className={`advantage-section big in-view`}>
          <div className="advantage-section-title">
            <h3>Корпоративные порталы</h3>
          </div>
          <div className="advantage-section-description">
            <p>
              Создание единых корпоративных цифровых экосистем с высокой
              степенью безопасности и гибкостью настройки{" "}
            </p>
          </div>
        </div>
        <div className={`advantage-section big in-view`}>
          <div className="advantage-section-title">
            <h3>Web-cервисы</h3>
          </div>
          <div className="advantage-section-description">
            <p>
              Проектирование и разработка отказоустойчивых масштабируемых и
              высоконагруженных web-сервисов
            </p>
          </div>
        </div>
        <div className={`advantage-section big in-view`}>
          <div className="advantage-section-title">
            <h3>Web-разработка / Mobile</h3>
          </div>
          <div className="advantage-section-description">
            <p>
              Разработка web-приложений с широким функционалом и сложными
              интеграциями
            </p>
          </div>
        </div>
        <div className={`advantage-section big in-view`}>
          <div className="advantage-section-title">
            <h3>Техподдержка готовых продуктов</h3>
          </div>
          <div className="advantage-section-description">
            <p>
              Предоставление хостинга на собственных серверных мощностях и
              обеспечение стабильной работы проектов
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-5">
        <div className="services-container">
          <h2 className="text-5xl font-extrabold mb-5">Форматы работы</h2>
          <h4 className="font-bold text-2xl mb-3">Аутсорс</h4>
          <h4 className="font-bold text-2xl mb-3">Аутстаф</h4>
          <h4 className="font-bold text-2xl mb-3">Retainer</h4>
        </div>
        <div className="services-container">
          <h2 className="text-5xl font-extrabold mb-5">Модели оплаты</h2>
          <h4 className="font-bold text-2xl mb-3">Fixed Price</h4>
          <h4 className="font-bold text-2xl mb-3">Time&Material</h4>
          <h4 className="font-bold text-2xl mb-3">Milestone</h4>
        </div>
      </div>
      <div className="page-title">
        <h1>Аутстафф</h1>
      </div>
      {outstaffPrices.map((item) => {
        return <OutstaffPricesTable key={item.code} data={item} />;
      })}
    </div>
  );
}
