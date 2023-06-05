import Image from "next/image";

export default function Artbrix() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">Artbrix</h2>
            <p className="case-page-subtitle">
              Приложение для генерации изображений по фотографии с подключением
              нейросети.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Задача</h3>
            <p className="text-block-description">
              Заказчик, поставщик товаров для творчества, пришел с запросом
              разработать сервис, позволяющий обрабатывать изображения таким
              образом, чтобы они могли использоваться в его продукции, —
              Алмазной мозаике по загружаемым фотографиям с целью усиления
              бренда и разработки собственного программного продукта для
              русскоговорящей аудитории.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <p className="text-block-description">
              На основании анализа конкурентов в данной нише и пожеланий
              заказчика, было необходимо реализовать конкурентоспособный продукт
              с расширенным функционалом.
            </p>
            <p className="text-block-description">
              После загрузки изображения сервис производит его обработку и
              преобразует в шаблон для выкладки элементов мозаики.
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/artbrix/image_1.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/artbrix/image_2.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Функционал бота:</h3>
            <ul className="text-block-description">
              <li>Онлайн-редактор фото</li>
              <li>
                Личный кабинет пользователя, позволяющий:
                <ul>
                  <li>Использовать интерактивную сборку</li>
                  <li>Сохранять прогресс</li>
                  <li>
                    Отслеживать количество попыток, использованных по промокоду
                    от набора
                  </li>
                </ul>
              </li>
              <li>
                Бесплатная версия платформы с возможностью:
                <ul>
                  <li>Посмотреть свой портрет в формате мозаики</li>
                  <li>Выбрать подходящий интерьер</li>
                  <li>Поделиться результатом в социальных сетях</li>
                </ul>
              </li>
              <li>
                Платная версия платформы с расширенными опциями:
                <ul>
                  <li>Получить схему</li>
                  <li>Добавить подпись или стикер на обрабатываемое фото</li>
                  <li>
                    Взаимодействовать с интерактивный сборкой в личном кабинете
                  </li>
                </ul>
              </li>
              <li>
                Опция добавления работ в архив или удаления как неликвидных
              </li>
              <li>
                Панель администратора поставщика с разделением доступа для
                формирования индивидуального кода по будущей партии товара
              </li>
              <li>
                Возможность взаимодействия с базой данных через панель
                администратора по:
                <ul>
                  <li>Данным пользователей</li>
                  <li>Работам пользователей</li>
                  <li>Использованным промокодам и числом попыток</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Использованные технологии:</h3>
            <p className="text-block-description">Postgres, Redis</p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Язык разработки:</h3>
            <p className="text-block-description">PHP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
