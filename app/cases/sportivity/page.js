import Image from "next/image";

export default function Sportivity() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">Sportivity</h2>
            <p className="case-page-subtitle">
              Интерактивный дневник наблюдений для анализа психоэмоционального
              состояния спортсменов на соревнованиях и самописная CRM-система
              для управления проектом и сбора внутренней аналитики.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Задача</h3>
            <p className="text-block-description">
              Заказчик — профессиональный игрок в бильярд, которая решила
              разработать электронный дневник, помогающий спортсменам
              анализировать свое психоэмоциональное состояние во время турнирных
              матчей.
            </p>
            <p className="text-block-description">
              Полученную информацию спортсмен мог бы использовать для взгляда на
              себя «со стороны» с целью корректировки своих эмоциональных
              установок и улучшения игровых показателей.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <p className="text-block-description">
              Заказчик обратился с готовыми наработками для дневника, попросив
              «красиво» упаковать продукт в простой и доступный инструмент. Для
              этого было предложено реализовать логику через телеграм-бота с
              применением технологии Webapp.
            </p>
            <p className="text-block-description">
              Интерактивный дневник Sportivity позволяет спортсменам любого
              уровня отслеживать свое психоэмоциональное состояние на разных
              этапах соревнований.
            </p>
            <p className="text-block-description">
              Дневник выполнен в виде опросника, по результатам прохождения
              которого, пользователь получает отчет за спортивное мероприятие с
              наглядным графиком, рекомендации и инструменты для проработки
              сложностей и проблемных установок.
            </p>
            <p className="text-block-description">
              Пользователь также может сравнить результаты любых ранее
              пройденных опросов между собой.
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/sportivity/image_1.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/sportivity/image_2.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Функционал бота:</h3>
            <ul className="text-block-description">
              <li>Личный кабинет пользователя.</li>
              <li>
                Интерактивный дневник в виде красочного WebApps-приложения для
                Telegram, после прохождения которого пользователь получает отчет
                с наглядным графиком.
              </li>
              <li>
                Возможность сравнения нескольких ранее пройденных опросов.
              </li>
              <li>Тренажеры для проработки психологических установок.</li>
              <li>
                Рассылка статей по воронке, настраиваемой в CRM-системе проекта.
              </li>
              <li>Выбор языка (русский/английский).</li>
              <li>Возможность оплаты (интеграция платежных сервисов).</li>
            </ul>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Функционал CRM-системы:</h3>
            <ul className="text-block-description">
              <li>База данных пользователей и пройденных ими опросов.</li>
              <li>
                Инструменты внутренней аналитики — выгрузки, дашборды и т.д.
              </li>
              <li>Управление ролями доступа.</li>
              <li>Проработка воронок рассылок.</li>
              <li>Управление постингом контента.</li>
            </ul>
          </div>
          <div className="text-block">
            <p className="text-block-description">
              Проект был очень хорошо принят мультиязычной аудиторией на стадии
              тестирования. В первый месяц работы бота заказчику удалось
              привлечь более 1000 пользователей.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Использованные технологии:</h3>
            <p className="text-block-description">
              Postgres, Redis, Nginx, Docker Swarm
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Язык разработки:</h3>
            <p className="text-block-description">Python, PHP, JS(React)</p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Ссылка на проект:</h3>
            <p className="text-block-description">
              <a
                href="https://t.me/sportivity_test_bot"
                target="_blank"
                rel="noreferrer"
              >
                <b>t.me/sportivity_test_bot</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
