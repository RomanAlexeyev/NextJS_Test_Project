"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BrowserView, MobileView } from "react-device-detect";

export default function Contacts({ isMobile }) {
  const [popupActive, setPopupActive] = useState(false);
  const [copyAlert, setCopyAlert] = useState(null);

  const copyToClipboard = (e, value, type) => {
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setCopyAlert(type + " скопирован");
  };

  useEffect(() => {
    let timeout;
    if (!!copyAlert) {
      timeout = setTimeout(() => {
        setCopyAlert(null);
        setPopupActive(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [copyAlert]);

  return (
    <div
      className={`relative ${isMobile ? "py-3" : "mx-12"}`}
      onClick={() => setPopupActive(!popupActive)}
    >
      <span className="transition duration-200 font-medium cursor-pointer hover:text-secondary-color">
        Контакты
      </span>
      {popupActive && (
        <div
          className={`absolute top-10 bg-inherit py-2 px-3 rounded-lg overflow-hidden shadow-lg ${
            isMobile ? "left-2/4 -translate-x-2/4" : "right-0"
          }`}
        >
          <BrowserView>
            <div
              className={`m-2 whitespace-nowrap transition duration-200 cursor-pointer hover:text-secondary-color ${
                isMobile ? "text-center" : "text-right"
              }`}
              onClick={(e) => copyToClipboard(e, "88001004038", "Номер")}
            >
              8 800 100 40 38
            </div>
          </BrowserView>
          <MobileView>
            <Link
              className={`m-2 whitespace-nowrap transition duration-200 cursor-pointer hover:text-secondary-color ${
                isMobile ? "text-center" : "text-right"
              }`}
              href={"tel: +78001004038"}
            >
              8 800 100 40 38
            </Link>
          </MobileView>

          <div
            className={`m-2 whitespace-nowrap transition duration-200 cursor-pointer hover:text-secondary-color ${
              isMobile ? "text-center" : "text-right"
            }`}
            onClick={(e) =>
              copyToClipboard(e, "partners@kalina-soft.com", "E-mail")
            }
          >
            partners@kalina-soft.com
          </div>
          {copyAlert && (
            <div className="absolute p-3 top-0 left-0 opacity-0 translate-y-20 w-full h-full bg-slate-950/75 text-white flex items-center justify-center animate-slide-fast">
              {copyAlert}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
