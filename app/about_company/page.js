import Advantages from "@/components/sections/advantages";
import YandexMap from "@/components/utils/yandex-map";
import Image from "next/image";

const bankingDetails = [
  {
    code: "account",
    displayName: "Расчет. счет",
    value: "4080 2810 5000 0365 7092",
  },
  {
    code: "bankName",
    displayName: "Банк",
    value: "АО «Тинькофф Банк»",
  },
  {
    code: "bic",
    displayName: "БИК",
    value: "044 525 974",
  },
  {
    code: "abonentAccount",
    displayName: "Кор. счет",
    value: "3010 1810 1452 5000 0974",
  },
];

const taxDetails = [
  {
    code: "companyName",
    displayName: "Наименование",
    value: "ИП Калинин Юнус Александрович",
  },
  {
    code: "inn",
    displayName: "ИНН",
    value: "7716 7963 6095",
  },
  {
    code: "ogrnip",
    displayName: "ОГРНИП",
    value: "322 774 600 524 491",
  },
];

export default function AboutCompany() {
  return (
    <div className="page">
      <div className="page-title">
        <h1>Kalina Soft</h1>
      </div>
      <div className="page-descriptor">
        <p>
          Слаженная команда из более 20 опытных специалистов с фокусом на
          оптимизацию бизнес-процессов и решение других задач в B2B- и
          B2C-сегментах.
        </p>
      </div>
      <div className="info-block">
        <h3 className="font-extrabold text-3xl mb-4">Наша миссия</h3>
        <p className="text-xl font-medium pr-0 md:pr-2/4">
          Поиск и интеграция наиболее эффективных методик и технологий
          разработки для решения задачи заказчика.
        </p>
      </div>
      <Advantages />
      <div className="info-block grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2">
        <div className="grow">
          <h3 className="text-3xl font-bold mb-6">Банковские реквизиты</h3>
          {bankingDetails.map((detail) => {
            return (
              <div
                key={detail.code}
                className="mb-4 flex flex-wrap items-center font-medium text-xl"
              >
                <div className="basis-60 text-gray-400">
                  {detail.displayName}
                </div>
                <div className="grow whitespace-nowrap">{detail.value}</div>
              </div>
            );
          })}
        </div>
        <div className="grow">
          <h3 className="text-3xl font-bold mb-6">Налоговые данные</h3>
          {taxDetails.map((detail) => {
            return (
              <div
                key={detail.code}
                className="mb-4 flex flex-wrap items-center font-medium text-xl"
              >
                <div className="basis-60 text-gray-400">
                  {detail.displayName}
                </div>
                <div className="grow whitespace-nowrap">{detail.value}</div>
              </div>
            );
          })}
        </div>
        <div className="grow">
          <YandexMap />
        </div>
        <div className="mt-2">
          <div className="mb-4 font-medium text-xl">
            <div className="text-gray-400 flex items-center mb-1">
              <Image
                src={`/images/metro_icon.svg`}
                alt=""
                width={25}
                height={20}
                className="mr-2"
              />
              Сухаревская
            </div>
            <div className="text-2xl">
              107045, г. Москва, Сретенский тупик, дом 2, офис 5
            </div>
          </div>
          <div className="mb-4 font-medium text-xl">
            <div className="text-gray-400 mb-1">Почта для корреспонденции:</div>
            <div className="text-2xl">partners@kalina-soft.com</div>
          </div>
          <div className="mb-4 font-medium text-xl">
            <div className="text-gray-400 mb-1">Контактный номер:</div>
            <div className="text-2xl">8 800 100 40 38</div>
          </div>
        </div>
      </div>
    </div>
  );
}
