import React from "react";
import styles from "../styles/Discount.module.css";
import HeaderText from "./HeaderText";

import discountIcon from "../../public/images/discount__icon.png";
import discountImg1 from "../../public/images/discount__img__1.png";
import discountImg2 from "../../public/images/discount__img__2.png";

import DescriptionText from "./DescriptionText";

import Image from "next/image";
import Button from "./Button";

type SubscriptionStatus = "active" | "inactive";

interface ProfileProps {
  status: SubscriptionStatus;
}

const statusLabels: Record<SubscriptionStatus, string> = {
  active: "Активна",
  inactive: "Неактивна",
};
export default function Discount() {
  return (
    <div className={styles.discount}>
       <HeaderText color="#000" className={styles.discount__header}>
          Ваши скидки
      </HeaderText>
      <div className={styles.discount__item}>
       
        <div className={styles.discount__item__content}>
          <Image
            src={discountIcon}
            alt=""
            className={styles.discount__item__icon}
          ></Image>
          <DescriptionText
            color="#4480EA"
            className={styles.discount__item__header}
          >
            Скидка - 20% на курс «ЭКГ не враг»
          </DescriptionText>
          <DescriptionText className={styles.discount__item__description}>
            Читай ЭКГ без ошибок и зубрежки.
          </DescriptionText>
          <Button fontSize=".9375rem" padding="1rem 4rem">Использовать</Button>
        </div>
         <Image
        src={discountImg1}
        alt=""
        className={styles.discount__item__img}
      ></Image>
      </div>
      <div className={styles.discount__item}>
       
        <div className={styles.discount__item__content}>
          <Image
            src={discountIcon}
            alt=""
            className={styles.discount__item__icon}
          ></Image>
          <DescriptionText
            color="#4480EA"
            className={styles.discount__item__header}
          >
            Скидка - 20% на курс «Препараты в кардиологии»
          </DescriptionText>
          <DescriptionText className={styles.discount__item__description}>
            Читай ЭКГ без ошибок и зубрежки.
          </DescriptionText>
          <Button fontSize=".9375rem" padding="1rem 4rem">Использовать</Button>
        </div>
         <Image
        src={discountImg2}
        alt=""
        className={styles.discount__item__img}
      ></Image>
      </div>
     
    </div>
  );
}
