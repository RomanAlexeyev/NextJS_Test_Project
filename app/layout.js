import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Kalina Soft",
  description: "Разработка и сопровождение ПО для бизнеса",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Script
          id="yandex-metrika"
          dangerouslySetInnerHTML={{
            __html: `(function (m, e, t, r, i, k, a) {
              m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments) };
              m[i].l = 1 * new Date();
              for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
              k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
            })
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
            ym(93537725, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true
            })`,
          }}
        />
        <Navbar />
        <main className="body-wrapper px-10 md:px-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
