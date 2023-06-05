"use client";

import { useState, useEffect } from "react";

export default function Counter({ limit, inView }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || value === limit) return;
    let start = 0;

    let timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start === limit) {
        clearInterval(timer);
      }
    }, 30);
  }, [inView]);

  return <>{value >= 10 ? value : "0" + value}</>;
}
