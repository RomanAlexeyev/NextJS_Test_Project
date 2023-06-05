import Image from "next/image";

export default function Beahero() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">Бытьгероем.рф</h2>
            <p className="case-page-subtitle">
              Некоммерческий проект по доработке сайта и созданию бота поддержки
              благотворительному проекту для помощи людям с онкологическими
              заболеваниями.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <p className="text-block-description">
              Был разработан нативный чат-бот для навигации по сайту и поддержки
              пользователей, доработана структура сайта и созданы новые блоки.
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/beahero/image_1.png"
            width={500}
            height={16}
            alt=""
          />
        </div>
      </div>

      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Язык разработки:</h3>
            <p className="text-block-description">Python</p>
          </div>
        </div>
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h3 className="text-block-title">Сайт проекта:</h3>
            <p className="text-block-description">
              <a
                href="https://t.me/sportivity_test_bot"
                target="_blank"
                rel="noreferrer"
              >
                <b>бытьгероем.рф</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
