"use client";

import { useState } from "react";
import BriefModal from "../modals/brief-modal";

export default function OpenBrief() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <BriefModal onClose={() => setModal(false)} />}
      <button className="hero-button open-brief" onClick={() => setModal(true)}>
        <div className="button-text">Заполнить бриф</div>
      </button>
    </>
  );
}
