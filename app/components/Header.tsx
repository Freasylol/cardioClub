import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/logo-img.png";
import profileIcon from "../../public/images/profile-icon.png";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <Link href="/" className={styles.nav__logo__link} prefetch={true}>
                        <Image src={logoImg} className={styles.nav__logo__img} alt=""></Image>
                    </Link>
                    <nav className={styles.nav}>
                        <div className={styles.nav__inner}>
                            <div className={styles.nav__link}>Новости</div>
                            <div className={styles.nav__link}>Видеолекции</div>
                            <div className={styles.nav__link}>ЭКГ</div>
                            <div className={styles.nav__link}>Курсы</div>
                            <div className={styles.nav__link}>Литература</div>
                            <div className={styles.nav__link}>Помощник кардиолога</div>
                            <div className={styles.nav__link}>О нас</div>   
                        </div>
                    </nav>
                    <input type="text" placeholder="Поиск" className={styles.nav__input}>
                    </input>
                    <Link href="/profile/subscription" className={styles.nav__profile__link} prefetch={true}>
                        <Image src={profileIcon} className={styles.nav__profile__img} alt=""></Image>
                    </Link>
                </div>
            
            </div>
    </header>
  );
}
