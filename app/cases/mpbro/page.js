import Image from "next/image";

export default function MPBro() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">MPBro</h2>
            <p className="case-page-subtitle">
              Программный комплекс для решения повседневных задач поставщика
              маркетплейсов
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Задача</h3>
            <p className="text-block-description">
              Запрос заказчика — оптимизировать всю работу по управлению и
              аналитике торговой деятельности поставщиков на маркетплейсы
              Wildberries и Ozon с учетом особенностей ведения такого бизнеса.
            </p>
            <p className="text-block-description">
              Критически важно было проработать вопрос скорости подгрузки и
              обработки данных.
            </p>
            <p className="text-block-description">
              Кроме того, торговые кабинеты данных маркетплейсов и уже
              реализованные аналитические решения не отвечали требованиям
              заказчика по полноте отображаемых данных, их корректности и
              удобству работы.
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/mpbro/image_1.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/mpbro/image_2.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <p className="text-block-description">
              Была проведена обширная работа по созданию микросервисной
              архитектуры проекта, а также оптимизация запросов к базе данных.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Функционал:</h3>
            <ul className="text-block-description">
              <li>
                Товарная аналитика (отслеживание ликвидных и неликвидных
                товаров, определение объема будущих закупок).
              </li>
              <li>
                Финансовая аналитика: анализ объема логистики, комиссии,
                выявление штрафов, расчет итоговой прибыли.
              </li>
              <li>Отслеживание сроков и корректности приемки поставок.</li>
              <li>
                Печать стикеров для товаров, коробов и паллетов при совершении
                поставок и маркировке.
              </li>
              <li>
                Управление контентом товаров (задание заголовков, описаний,
                свойств, в том числе массовое).
              </li>
              <li>
                Разграничение доступов и введение ролей для пользователей.
              </li>
              <li>Интерактивные дашборды и виджеты.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Использованные технологии:</h3>
            <p className="text-block-description">
              MySQL, Redis, RabbitMQ, Clickhouse, DBT, Airflow, Kubernetes,
              Airbyte
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Язык разработки:</h3>
            <p className="text-block-description">
              PHP, JS(React), Python(FastAPI), Golang
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Ссылка на проект:</h3>
            <p className="text-block-description">
              <a href="https://mpbro.ru" target="_blank" rel="noreferrer">
                <b>mpbro.ru</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
