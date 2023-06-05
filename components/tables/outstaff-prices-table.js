"use client";

import { useState } from "react";
import "../../styles/tables.css";

const getDiscountedPrice = (value, discountPercent) => {
  const discount = (value / 100) * discountPercent;
  return (value - discount).toLocaleString() + " ₽";
};

export default function OutstaffPricesTable({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`outstaff-prices-container ${isOpen ? "is-open" : ""}`}>
      <div className="outstaff-prices-table">
        <div className="outstaff-prices-table-row table-header">
          <div className="table-title" onClick={() => setIsOpen(!isOpen)}>
            <h4 className="font-bold">{data.title}</h4>
          </div>
          {isOpen && (
            <>
              <div className="column-title">До 3 месяцев</div>
              <div className="column-title">До 6 месяцев (-3%)</div>
              <div className="column-title">После 6 месяцев (-6%)</div>
            </>
          )}
        </div>
        {isOpen && (
          <>
            <div className="outstaff-prices-table-row description">
              <div className="description-title">УРОВЕНЬ</div>
              <div className="flex">
                <div className="grow description-title">ЧАС</div>
                <div className="grow description-title">МЕСЯЦ</div>
              </div>
              <div className="flex">
                <div className="grow description-title">ЧАС</div>
                <div className="grow description-title">МЕСЯЦ</div>
              </div>
              <div className="flex">
                <div className="grow description-title">ЧАС</div>
                <div className="grow description-title">МЕСЯЦ</div>
              </div>
            </div>
            <div className="outstaff-prices-table-row">
              <div className="prices-table-cell">Middle+</div>
              <div className="flex">
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.middle.hourRate, 0)}
                </div>
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.middle.monthRate, 0)}
                </div>
              </div>
              <div className="flex">
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.middle.hourRate, 3)}
                </div>
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.middle.monthRate, 3)}
                </div>
              </div>
              <div className="flex">
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.middle.hourRate, 6)}
                </div>
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.middle.monthRate, 6)}
                </div>
              </div>
            </div>
            <div className="outstaff-prices-table-row">
              <div className="prices-table-cell">Senior</div>
              <div className="flex">
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.senior.hourRate, 0)}
                </div>
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.senior.monthRate, 0)}
                </div>
              </div>
              <div className="flex">
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.senior.hourRate, 3)}
                </div>
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.senior.monthRate, 3)}
                </div>
              </div>
              <div className="flex">
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.senior.hourRate, 6)}
                </div>
                <div className="grow prices-table-cell">
                  {getDiscountedPrice(data.prices.senior.monthRate, 6)}
                </div>
              </div>
            </div>
            {data.prices.architect.hourRate && (
              <div className="outstaff-prices-table-row">
                <div className="prices-table-cell">Teamlead / Architect</div>
                <div className="flex">
                  <div className="grow prices-table-cell">
                    {getDiscountedPrice(data.prices.architect.hourRate, 0)}
                  </div>
                  <div className="grow prices-table-cell">
                    {getDiscountedPrice(data.prices.architect.monthRate, 0)}
                  </div>
                </div>
                <div className="flex">
                  <div className="grow prices-table-cell">
                    {getDiscountedPrice(data.prices.architect.hourRate, 3)}
                  </div>
                  <div className="grow prices-table-cell">
                    {getDiscountedPrice(data.prices.architect.monthRate, 3)}
                  </div>
                </div>
                <div className="flex">
                  <div className="grow prices-table-cell">
                    {getDiscountedPrice(data.prices.architect.hourRate, 6)}
                  </div>
                  <div className="grow prices-table-cell">
                    {getDiscountedPrice(data.prices.architect.monthRate, 6)}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
