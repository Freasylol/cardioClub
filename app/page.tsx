import Image from "next/image";
import logoImg from "../public/images/logo-img.png";
import profileIcon from "../public/images/profile-icon.png";
import introImg from "../public/images/intro-img.png";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link href="" className="nav__logo__link">
                        <Image src={logoImg} className="nav__logo__img" alt=""></Image>
                    </Link>
                    <nav className="nav">
                        <div className="nav__inner">
                                <div className="nav__link">Новости</div>
                                <div className="nav__link">Видеолекции</div>
                                <div className="nav__link">ЭКГ</div>
                                <div className="nav__link">Курсы</div>
                                <div className="nav__link">Литература</div>
                                <div className="nav__link">Помощник кардиолога</div>
                                <div className="nav__link">О нас</div>   
                        </div>
                    </nav>
                    <input type="text" placeholder="Поиск" className="nav__input">
                    </input>
                    <Link href="" className="nav__profile__link">
                        <Image src={profileIcon} className="nav__profile__img" alt=""></Image>
                    </Link>
                </div>
            
            </div>
        </header>
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <Image src={introImg} alt=""></Image>
                    <div className="intro__inner__block">
                        <div className="intro__inner__title">
                            Cardio <span>Club</span>
                        </div>
                        <div className="intro__inner__text">
                            Cайт для врачей, которые хотят быть в курсе всех новинок кардиологии, терапии и качать свои знания в ЭКГ. Присоединяйся к сообществу, где ведущие специалисты повышают квалификацию и идут в ногу с новейшими исследованиями!
                        </div>
                        <div className="intro__inner__button__wrapper">
                            <button className="intro__inner__button">
                                Поехали!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
