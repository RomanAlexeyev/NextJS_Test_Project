"use client";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
  return (
    <YMaps>
      <div className="yandex-map">
        <Map
          defaultState={{ center: [55.77114, 37.63305], zoom: 16 }}
          width="100%"
          height={"20rem"}
        >
          <Placemark
            geometry={[55.77114, 37.63305]}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/images/location_icon.svg",
              iconImageSize: [40, 40],
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
}
