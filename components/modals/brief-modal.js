"use client";

import { useEffect, useRef, useState } from "react";
import "../../styles/brief-modal.css";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "@/lib/url";
import { taskTypes } from "@/lib/task-types";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function BriefModal({ onClose }) {
  const inputFileRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [taskTypesSelected, setTaskTypesSelected] = useState([]);
  const [customType, setCustomType] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [sliderRange, setSliderRange] = useState({
    min: 0,
    max: 1000000,
  });
  const [sliderValue, setSliderValue] = useState(1);
  const [attached, setAttached] = useState(null);

  const [sendButtonDisabled, setButtonDisabled] = useState(true);

  const getSliderRangeValue = (limit) => {
    let int = 0;
    if (limit === "min") {
      int = +sliderRange.min;
    } else {
      int = (sliderValue / 10) * +sliderRange.max;
    }
    return int.toLocaleString("ru-RU");
  };

  const checkboxHandler = (taskType) => {
    const arr = [...taskTypesSelected];
    const index = arr.map((e) => e.code).indexOf(taskType.code);

    if (index < 0) {
      arr.push(taskType);
    } else {
      arr.splice(index, 1);
    }

    setTaskTypesSelected(arr);

    let min = 0;
    let max = 0;

    arr.map((type) => {
      min += type.priceRange.min;
      max += type.priceRange.max;
    });

    if (max === 0) {
      max = 1000000;
    }

    setSliderRange({ min, max });
  };

  const onFileChange = (e) => {
    setAttached(e.target.files[0]);
  };

  const sendEmail = async () => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("Name", contactInfo.name);
    formData.append("Email", contactInfo.email);
    formData.append("Phone", contactInfo.phoneNumber);
    formData.append("Type", [
      ...taskTypesSelected.map((type) => type.displayName),
      customType,
    ]);
    formData.append(
      "Budget",
      `from ${getSliderRangeValue("min")} to ${getSliderRangeValue("max")}`
    );
    formData.append("Description", taskDescription);

    if (attached) {
      formData.append("File", attached);
    }
    try {
      const { data } = await axios.post(API_URL, formData, {
        headers: {},
      });
      if (data?.message === "Data received") {
        console.log("ok");
        setSuccessMessage(true);
      }
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    let essentialInfoEmpty,
      taskTypeEmpty,
      descriptionEmpty = false;
    Object.keys(contactInfo).forEach((contact) => {
      if (!contactInfo[contact].trim()) {
        essentialInfoEmpty = true;
      }
    });

    if (!taskTypesSelected.length && !customType.trim()) {
      taskTypeEmpty = true;
    }

    if (!taskDescription.trim()) {
      descriptionEmpty = true;
    }

    setButtonDisabled(essentialInfoEmpty || taskTypeEmpty || descriptionEmpty);
  }, [contactInfo, taskTypesSelected, customType, taskDescription]);

  useEffect(() => {
    let timeOut;
    if (successMessage) {
      timeOut = setTimeout(() => {
        setSuccessMessage(false);
        onClose();
      }, 1500);
    }

    return () => clearTimeout(timeOut);
  }, [successMessage]);

  return (
    <div className="page-mask">
      <div className="modal brief-modal">
        <div className="close-button" onClick={onClose}>
          <Image src="/images/times_icon.svg" alt="" width={15} height={15} />
        </div>
        <div className="modal-content">
          {successMessage ? (
            <span className="mb-8">Заявка отправлена</span>
          ) : (
            <>
              <div className="modal-section inputs-section">
                <div className="input-block name-block">
                  <label htmlFor="name-input">
                    Ваши ФИО/название организации
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    placeholder="Иванов И.И."
                    value={contactInfo.name}
                    onChange={(e) =>
                      setContactInfo((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="input-block email-block">
                  <label htmlFor="email-input">Ваш e-mail</label>
                  <input
                    id="email-input"
                    type="text"
                    placeholder="your.email@mail.ru"
                    value={contactInfo.email}
                    onChange={(e) =>
                      setContactInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="input-block phone-block">
                  <label htmlFor="email-input">Ваш телефон</label>
                  <input
                    id="email-input"
                    type="text"
                    placeholder="+7 999 999 9999"
                    value={contactInfo.phoneNumber}
                    onChange={(e) =>
                      setContactInfo((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="modal-section">
                <div className="modal-section-title">Тип задачи</div>
                <div className="task-types-list">
                  {taskTypes.map((type) => {
                    const isChecked = !!taskTypesSelected.filter(
                      (typeSelected) => typeSelected.code === type.code
                    ).length;
                    return (
                      <div key={type.code} className="checkbox-block">
                        <input
                          type="checkbox"
                          id={type.code}
                          name={type.code}
                          checked={isChecked}
                          onChange={() => checkboxHandler(type)}
                        />
                        <label htmlFor={type.code}>{type.displayName}</label>
                      </div>
                    );
                  })}
                </div>
                <div className="input-block custom-type-input">
                  <input
                    id="custom-type-input"
                    type="text"
                    placeholder="Свой вариант"
                    value={customType}
                    onChange={(e) => setCustomType(e.target.value)}
                  />
                </div>
                <div className="input-block slider-block">
                  <label htmlFor="slider">Планируемый бюджет</label>
                  <div className="slider-container" id="slider">
                    <Slider
                      min={1}
                      max={10}
                      className={"custom-slider"}
                      value={sliderValue}
                      onChange={(val) => setSliderValue(val)}
                    />
                    <div className="slider-range">
                      <div className="slider-value">
                        от {getSliderRangeValue("min")} ₽
                      </div>
                      <div className="slider-value">
                        до {getSliderRangeValue("max")} ₽
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-section">
                <div className="input-block">
                  <label htmlFor="task-description-input">
                    Описание задачи
                  </label>
                  <textarea
                    id="task-description-input"
                    name="text"
                    rows="4"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-section buttons-block">
                <input
                  type="file"
                  className="file-input"
                  ref={inputFileRef}
                  onChange={onFileChange}
                />
                <button
                  className="attach-button"
                  onClick={() => inputFileRef.current.click()}
                >
                  <Image
                    src="/images/attach_icon.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                  {attached?.name || "Прикрепить файл"}
                </button>
                <button
                  className="send-button"
                  disabled={sendButtonDisabled || isLoading}
                  onClick={sendEmail}
                >
                  {isLoading && (
                    <Image
                      src="/images/throbber_icon.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="throbber"
                    />
                  )}
                  Отправить
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
