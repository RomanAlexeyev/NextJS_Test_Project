import Image from "next/image";
import DownloadPresentation from "@/components/buttons/download-presentation";
import OpenBrief from "@/components/buttons/open-brief";
import NumbersInfo from "@/components/sections/numbers-info";
import Specs from "@/components/sections/specs";
import Portfolio from "@/components/sections/portfolio";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center relative h-screen">
        <Image
          src="/images/company_logo_min_large.svg"
          width={500}
          height={50}
          alt=""
          className="absolute z-0 top-2/4 right-0 -mt-40 -translate-y-2/4 animate-shadow-slow"
        />
        <div className="hero-title">
          <div className="hero-title-content">
            <div className="title-container">
              <h1>
                <b>Простые</b> решения
                <br />
                для <b>сложных</b> процессов
              </h1>
            </div>
            <div className="herotitle-divider"></div>
            <div className="subtitle-container">
              <p className="hero-subtitle">
                Разработка и сопровождение ПО для бизнеса
              </p>
            </div>
          </div>
          <div className="hero-buttons">
            <DownloadPresentation />
            <OpenBrief />
          </div>
        </div>
      </section>
      <NumbersInfo />
      <Specs />
      <Portfolio />
    </>
  );
}
