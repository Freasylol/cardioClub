"use client";

import { useState } from "react";
import Image from "next/image";
import materialImg1 from "../../public/images/materials__img__1.png";
import materialImg2 from "../../public/images/materials__img__2.png";
import materialImg3 from "../../public/images/materials__img__3.png";

const materials = [
  {
    img: materialImg1,
    header: "Видео",
    subheader: "Типы инфаркта миокарда. Интерпретация тропонинов",
    description:
      'В этой лекции вы найдете ответы на два вопроса: "Какие существуют причины ИМ?" и "Как понимать результаты тропонинов?"',
  },
  {
    img: materialImg2,
    header: "Статья",
    subheader: "QRS и его обличия",
    description:
      `Мы разобрали с вами блокады п.Гиса, ЭОС и гипертрофию левого желудочка. А что их связывает? А связывает их комплекс QRS и его десятки различных форм.
Понимание формирования QRS в грудных отведений — это уровень «джедая»
Давайте просто начнем с того, каким может быть комплекс QRS..."`,
  },
  {
    img: materialImg3,
    header: "Видео",
    subheader:
      "Реноваскулярная артериальная гипертензия. Этиология, патогенез, клиника, диагностика, лечение.",
    description:
      'В этой лекции ответим на два вопроса: "Какие существуют причины ИМ?" и "Как понимать результаты тропонинов?"',
  },
  {
    img: materialImg1,
    header: "Тест",
    subheader: "Типы инфаркта миокарда. Интерпретация тропонинов",
    description:
      'В этой лекции вы найдете ответы на два вопроса: "Какие существуют причины ИМ?" и "Как понимать результаты тропонинов?"',
  },
  {
    img: materialImg2,
    header: "Тест",
    subheader: "QRS и его обличия",
    description:
      "Мы разобрали блокады п.Гиса, ЭОС и гипертрофию левого желудочка. А связывает их комплекс QRS...",
  },
  {
    img: materialImg3,
    header: "Видео",
    subheader:
      "Реноваскулярная артериальная гипертензия. Этиология, патогенез, клиника, диагностика, лечение.",
    description:
      'В этой лекции ответим на два вопроса: "Какие существуют причины ИМ?" и "Как понимать результаты тропонинов?"',
  },
];

export default function Slider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0 ? materials.length - visibleCount : prev - visibleCount
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= materials.length ? 0 : prev + visibleCount
    );
  };

  const visibleItems = materials.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="materials">
      <button
        className="slider__arrow slider__arrow__left"
        onClick={handlePrev}
      >
        ‹
      </button>
      <div className="container">
        <div className="materials__inner">
          <h2 className="header__style materials_header">Последние материалы</h2>
          <div className="materials__slider">
            {visibleItems.map((item, index) => (
              <div className="materials__item" key={index}>
                <Image
                  src={item.img}
                  className="materials__item__img"
                  alt={item.subheader}
                />
                <div className="materials__item__text">
                  <div className="materials__item__header">{item.header}</div>
                  <div className="materials__item__subheader">
                    {item.subheader}
                  </div>
                  <div className="materials__item__description">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        className="slider__arrow slider__arrow__right"
        onClick={handleNext}
      >
        ›
      </button>
    </div>
  );
}