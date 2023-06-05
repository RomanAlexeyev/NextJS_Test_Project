import Image from "next/image";

export default function Oncobot() {
  return (
    <div className="portfolio-case-wrapper">
      <div className="portfolio-case-infostrip">
        <div className="infostrip infostrip-text">
          <div className="text-block">
            <h2 className="case-page-title">Онкологика</h2>
            <p className="case-page-subtitle">
              Telegram-бот для благотворительного проекта.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Задача</h3>
            <p className="text-block-description">
              Благотворительный фонд помощи людям с онкологическими
              заболеваниями «Онкологика» обратился с просьбой разработать
              Telegram-бот, который станет альтернативой web-версии сайта в
              коммуникациях как с подопечными фонда, так и с теми, кто хочет
              пожертвовать средства на нужды проекта.
            </p>
          </div>
          <div className="text-block">
            <h3 className="text-block-title">Описание проекта</h3>
            <p className="text-block-description">
              Командой был разработан бот, который позволяет обращаться за
              психологической, материальной и юридической помощью, заказать
              такси, равное и карьерное консультирование, а также связаться с
              операторами горячей линии.
            </p>
            <p className="text-block-description">
              Желающие помочь могут зарегистрироваться в боте и произвести
              разовое пожертвование, подписаться на рекуррентные платежи,
              получить отчет о целевом использовании пожертвованных средств и
              оставить заявку на партнерство с фондом.
            </p>
          </div>
        </div>
        <div className="infostrip infostrip-image">
          <Image
            src="/images/projects/oncobot/image_1.png"
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
            <h3 className="text-block-title">Бот:</h3>
            <p className="text-block-description">
              <a
                href="https://t.me/Oncologica_bot"
                target="_blank"
                rel="noreferrer"
              >
                <b>t.me/Oncologica_bot</b>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
