import Image from "next/image";

export default function YourChoise() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">Your Choise</h2>
            <p className="case-page-subtitle">
              Единая платформа для проведения внутрикорпоративных опросов.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Задача</h3>
            <p className="text-block-description">
              Заказчику был необходим удобный инструмент в виде собственного
              сервиса оценки изображений-обложек товаров для маркетплейсов перед
              отправкой продукции на реализацию на основе мнений пользователей.
            </p>
            <p className="text-block-description">
              Для товарного бизнеса бывает проблематично выбрать привлекающую,
              продающую карточку товара. Обычно решения принимаются субъективно
              и могут не совпадать со статистическим мнением большинства
              покупателей без предварительного тестирования.
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/your_choise/image_1.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/your_choise/image_2.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <p className="text-block-description">
              Было принято решение разработать корпоративную web-платформу для
              создания интерактивных опросов.
            </p>
            <p className="text-block-description">
              Пользователь загружает до 500 изображений, на основе которых
              сервис генерирует тематические опросы с рассылкой на голосование
              по фокус-группам. Кроме того, пользователь может выставлять
              требования к тому, сколько раз загружаемые изображения должны
              сравниваться между собой для точности оценки.
            </p>
            <p className="text-block-description">
              По итогам прохождения опроса пользователь получает выборку из
              картинок, которые получили самое больше количество положительных
              оценок. Результаты опросов выдаются в виде таблицы, по которым
              можно визуально отследить популярность того или иного изображения.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Функционал:</h3>
            <ul className="text-block-description">
              <li>Личный кабинет с разделением ролей</li>
              <li>Опция создания собственной организации</li>
              <li>Конструктор опросов с различными видами логики</li>
              <li>Готовые шаблоны для организаторов опросов</li>
              <li>Модификации опросов (цвет, дизайн, текст)</li>
              <li>Библиотека для изображений</li>
              <li>Создание папок с опросами</li>
              <li>Выдача отчетности в табличном формате</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Использованные технологии:</h3>
            <p className="text-block-description">
              Postgres, Redis, RabbitMQ, Kubernetes
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
      </div>
    </div>
  );
}
