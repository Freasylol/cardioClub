"use client";

import type React from "react";
import { usePathname } from "next/navigation"; 
import styles from "../styles/ProfileAside.module.css";

import SubHeaderText from "./SubHeaderText";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

import settingsIcon from "../../public/images/settings__icon.png";
import discountIcon from "../../public/images/discount__icon.png";
import avatarIcon from "../../public/images/avatar__icon.png";
import chatIcon from "../../public/images/chat__icon.png";
import profileIcon from "../../public/images/profile-icon.png";

export default function ProfileAside({}) {
  const pathname = usePathname();
  
  return (
    <div className={styles.profile__aside}>
      <div className={styles.profile__aside__inner}>
        <SubHeaderText className={styles.profile__aside__header}>
          Ваш профиль
        </SubHeaderText>
        <Image
          className={styles.profile__aside__avatar}
          src={profileIcon}
          alt=""
        ></Image>
        <div className={styles.profile__aside__btns}>
          <Link className={styles.profile__aside__link} href="/profile/settings">
            <Button
              backgroundColor="#F4F7FF"
              color="#4480EA"
              fontSize=".925rem"
              padding=".925rem 1rem"
              className={styles.profile__aside__btn}
            >
              <Image
                className={styles.profile__aside__icon}
                src={settingsIcon}
                alt=""
              ></Image>
              Настройки
            </Button>
          </Link>
          <Link className={styles.profile__aside__link} href="/profile/discount">
            <Button
              backgroundColor="#F4F7FF"
              color="#4480EA"
              fontSize=".925rem"
              padding=".925rem 1rem"
              className={styles.profile__aside__btn}
            >
              <Image
                className={styles.profile__aside__icon}
                src={discountIcon}
                alt=""
              ></Image>
              Мои скидки
            </Button>
          </Link>
          <Link  className={styles.profile__aside__link} href="/profile/subscription">
            <Button
              fontSize=".925rem"
              padding=".8rem 1rem"
              className={styles.profile__aside__btn}
            >
              <Image
                className={styles.profile__aside__icon}
                src={avatarIcon}
                alt=""
              ></Image>
              Моя подписка
            </Button>
          </Link>
          <Link className={styles.profile__aside__link} href="/profile/subscription">
            <Button
              backgroundColor="#F4F7FF"
              color="#4480EA"
              fontSize=".925rem"
              padding=".925rem 1rem"
              className={styles.profile__aside__btn}
            >
              <Image
                className={styles.profile__aside__icon}
                src={chatIcon}
                alt=""
              ></Image>
              Поддержка
            </Button>
          </Link>
        </div>
      </div>
      {pathname === "/profile/settings" && (
        <Button
          backgroundColor="#8A1A1A"
          className={styles.profile__aside__exit}
        >
          Выход
        </Button>
      )}
    </div>
  );
}
