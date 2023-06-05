import Image from "next/image";

export default function Maranbet() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">Maranbet</h2>
            <p className="case-page-subtitle">
              Платформа для онлайн-беттинга на спортивные события с оплатой в
              криптовалюте.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Задача</h3>
            <p className="text-block-description">
              Заказчик обратился для полномасштабной доработки проекта,
              поскольку предыдущие исполнители не смогли довести его до
              минимально рабочего состояния.
            </p>
            <p className="text-block-description">
              Желаемый функционал отсутствовал, архитектура самого проекта была
              создана некорректно, поскольку не отвечала требованиям к нагрузке,
              скорости работы и полноте отображаемых данных, отсутствовала
              интеграция с блокчейном и т.д
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/maranbet/image_1.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/maranbet/image_2.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <ul className="text-block-description">
              <li>Реализована логика работы ставок на платформе</li>
              <li>Проработаны архитектура и безопасность.</li>
              <li>Увеличена пропускная способность сайта.</li>
              <li>Разработан личный кабинет пользователя.</li>
              <li>
                Подключены необходимые API-сервисы для отображения данных по
                событиям, — спортивные мероприятия, коэффициенты, вся
                дополнительная информация.
              </li>
              <li>Проведена интеграция с сервисом Metamask.</li>
              <li>
                Разработан смарт-контракт в сети ERC-20 с записью ставок в базу
                данных на блокчейне для большей степени безопасности.
              </li>
              <li>Проработаны карточки событий, поиска, календаря и т.д.</li>
              <li>Разработана мобильная версия платформы.</li>
            </ul>
          </div>
          <div className="text-block">
            <p className="text-block-description">
              Клиент получил полностью полностью рабочую беттинговую платформу,
              которая отвечает требования безопасности как на уровне
              архитектуры, так и блокчейна.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Использованные технологии:</h3>
            <p className="text-block-description">
              MySQL, Redis, RabbitMQ, Nginx, Kubernetes
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Язык разработки:</h3>
            <p className="text-block-description">PHP, Vue.js</p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Сайт проекта:</h3>
            <p className="text-block-description">
              <b>на стадии разработки</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
