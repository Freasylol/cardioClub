import React from "react";
import styles from "../styles/Profile.module.css";
import HeaderText from "./HeaderText";

import checkMark from "../../public/images/check.png";
import exclamationMark from "../../public/images/exclamation.png";
import settingsIcon from "../../public/images/settings__icon.png";
import discountIcon from "../../public/images/discount__icon.png";
import avatarIcon from "../../public/images/avatar__icon.png";
import chatIcon from "../../public/images/chat__icon.png";

import DescriptionText from "./DescriptionText";

import Image from "next/image";
import Button from "./Button";
import SubHeaderText from "./SubHeaderText";

import profileIcon from "../../public/images/profile-icon.png";

type SubscriptionStatus = "active" | "inactive";

interface ProfileProps {
  status: SubscriptionStatus;
}

const statusLabels: Record<SubscriptionStatus, string> = {
  active: "Активна",
  inactive: "Неактивна",
};

export default function Profile({ status }: ProfileProps) {
  return (
    <div className={styles.profile}>
      <div className="container">
        <div className={styles.profile__inner}>
          <div className={styles.rates}>
            <div className={styles.profile__header__wrapper}>
              <HeaderText color="#000" className="profile__header">
                Ваша подписка
              </HeaderText>
              <div
                className={`${styles.profile__header__marker} ${styles[status]}`}
              >
                {statusLabels[status]}
              </div>
            </div>
            <div className={styles.profile__notification__wrapper}>
              <Image
                className={styles.profile__notification__marker}
                src={exclamationMark}
                alt=""
              ></Image>
              <div className={styles.profile__notification__text}>
                У вас нет активной подписки. Чтобы оформить подписку, выбирайте
                тарифный план ниже и получайте доступ к полным статьям,
                конспектам лекций и скидкам члена CardioClub.
              </div>
            </div>
            <div className={styles.rates__inner}>
              <div className={styles.rates__subscription__block}>
                <div className={styles.rates__items}>
                  <DescriptionText className={styles.rates__header}>
                    Выберите тарифный план
                  </DescriptionText>
                  <Button
                    color="#4480EA"
                    backgroundColor="#F4F7FF"
                    fontSize=".9375rem"
                    className={styles.rate__item}
                  >
                    1 месяц<span className={styles.price}>980 ₽/мес</span>
                  </Button>
                  <Button
                    color="#4480EA"
                    backgroundColor="#F4F7FF"
                    fontSize=".9375rem"
                    className={styles.rate__item}
                  >
                    3 месяца<span className={styles.price}>980 ₽/мес</span>
                  </Button>
                  <Button
                    color="#4480EA"
                    backgroundColor="#F4F7FF"
                    fontSize=".9375rem"
                    className={styles.rate__item}
                  >
                    6 месяцев<span className={styles.price}>980 ₽/мес</span>
                  </Button>
                </div>
                <div className={styles.rates__pay}>
                  <Button
                    backgroundColor="#4CAF50"
                    padding=".75rem 1rem"
                    fontSize="1rem"
                    className={styles.rates__buy__btn}
                  >
                    Оплатить<span className={styles.price}>980 ₽</span>
                  </Button>
                  <input
                    placeholder="Промокод?"
                    className={styles.rates__pay__input}
                  ></input>
                  <Button className={styles.rates__pay__btn}>Применить</Button>
                  <DescriptionText className={styles.rates__pay__text}>
                    После оформления подписки вам откроются все статьи в полном
                    объёме, конспекты к каждой лекции и скидки для членов
                    CardioClub.
                  </DescriptionText>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.profile__settings}>
            <div className={styles.profile__settings__inner}>
              <SubHeaderText className={styles.profile__settings__header}>
                Ваш профиль
              </SubHeaderText>
              <Image className={styles.profile__settings__avatar} src={profileIcon} alt=""></Image>
              <div className={styles.profile__settings__btns}>
                <Button backgroundColor="#F4F7FF" color="#4480EA" fontSize=".925rem" padding=".925rem 1rem" className={styles.profile__settings__btn}>
                  <Image className={styles.profile__settings__icon} src={settingsIcon} alt=""></Image>Настройки
                </Button>
                <Button backgroundColor="#F4F7FF" color="#4480EA" fontSize=".925rem" padding=".925rem 1rem" className={styles.profile__settings__btn}>
                  <Image className={styles.profile__settings__icon} src={discountIcon} alt=""></Image>Мои скидки
                </Button>
                <Button fontSize=".925rem" padding=".8rem 1rem" className={styles.profile__settings__btn}>
                  <Image className={styles.profile__settings__icon} src={avatarIcon} alt=""></Image>Моя подписка
                </Button>
                <Button backgroundColor="#F4F7FF" color="#4480EA" fontSize=".925rem" padding=".925rem 1rem" className={styles.profile__settings__btn}>
                  <Image className={styles.profile__settings__icon} src={chatIcon} alt=""></Image>Поддержка
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
