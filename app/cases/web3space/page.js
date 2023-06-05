import Image from "next/image";

export default function Web3SpaceBot() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">Web3Space</h2>
            <p className="case-page-subtitle">
              Прикладное ПО в виде Telegram-бота для автоматизированной
              аналитики проектов в сфере блокчейна и криптовалют и самописная
              CRM-система для управления проектом и сбора внутренней аналитики.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <p className="text-block-description">
              Telegram-бот позволяет пользователю в пару кликов получать
              обширную информацию о проектах в сфере блокчейна и криптовалют,
              данные по проекту предоставляются в виде удобно скомпонованной
              таблицы, разбитой по направлениям анализа (Финансового,
              технического и социального).
            </p>
            <p className="text-block-description">
              Все собираемые по проекту данные анализируются через заложенный в
              продукт алгоритм, что значительно ускоряет и упрощает для
              пользователя собственный анализ проекта.
            </p>
            <p className="text-block-description">
              Среди других популярных функций — создание динамического макета
              собственного инвестиционного портфеля, всевозможные кастомные
              рейтинги и удобные оповещения.
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/web3space/image_1.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/web3space/image_2.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Функционал бота:</h3>
            <ul className="text-block-description">
              <li>
                Парсинг данных из 50+ ресурсов, а также их дальнейшая обработка,
                хранение и удобная выдача десятков параметров по 20 000+
                проектов в сфере блокчейна и криптовалют.
              </li>
              <li>Собственная скоринг-система проектов.</li>
              <li>
                Кастомные рейтинги по заданным параметрам с системой фильтрации.
              </li>
              <li>
                Добавление проектов в Избранное и Портфель, а также выставление
                сигналов на движение их рыночной цены.
              </li>
              <li>Нативные инструкции + обучающий блок.</li>
              <li>Аналитика по инвестиционным фондам.</li>
              <li>Локализация на английский язык.</li>
              <li>
                3 версии продукта (Free, Light, Pro), отличающиеся по полноте
                выдаваемых данных.
              </li>
              <li>
                Интеграция системы оплаты (Paymaster, Tinkoff, Robokassa).
              </li>
              <li>Интеграция промокодов.</li>
              <li>
                Связка с самописной CRM-системой, отслеживающей все необходимые
                метрики - пользовательское поведение, оплаты, активация промо
                кодов от блогеров и т.д.
              </li>
            </ul>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Функционал CRM-системы:</h3>
            <ul className="text-block-description">
              <li>
                Инструменты внутренней аналитики (выгрузки, дашборды и т.д.)
              </li>
              <li>База данных клиентов.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Использованные технологии:</h3>
            <p className="text-block-description">
              MongoDB, Redis, RabbitMQ, Nginx, Clickhouse,DBT, Airflow,
              Kubernetes
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Язык разработки:</h3>
            <p className="text-block-description">Python, Golang</p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Сайт проекта:</h3>
            <p className="text-block-description">
              <a
                href="https://bot.web3space.io"
                target="_blank"
                rel="noreferrer"
              >
                <b>bot.web3space.io</b>
              </a>
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Бот:</h3>
            <p className="text-block-description">
              <a
                href="https://t.me/web3space_bot"
                target="_blank"
                rel="noreferrer"
              >
                <b>t.me/web3space_bot</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
