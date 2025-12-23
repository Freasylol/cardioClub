import phoneImg from "../../public/images/phone__img.png";
import logoImg from "../../public/images/logo-img.png";
import youtubeLogo from "../../public/images/youtube__logo.png";
import vkLogo from "../../public/images/vk__logo.png";
import telegramLogo from "../../public/images/telegram__logo.png";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__inner__item__block">
                    <div className="footer__inner__item footer__inner__item__1">
                        <div className="footer__inner__item__card">
                            <Image src={logoImg} className="footer__inner__item__img" alt=""></Image>
                            <div className="footer__inner__item__description">
                                Cardio Club - сайт для врачей, которые хотят быть в курсе всех новинок кардиологии, терапии и качать свои знания в ЭКГ. 
                            </div>
                            </div>
                        
                        <div className="footer__inner__item__link__block">
                            <Link href="https://www.youtube.com/" className="footer__inner__item__link">
                                <div className="footer__inner__item__link__text">
                                    Политика в отношении обработки персональных данных
                                </div>
                             </Link>
                              <Link href="https://www.youtube.com/" className="footer__inner__item__link">
                                <div className="footer__inner__item__link__text">
                                    Условия использования                                
                                </div>
                             </Link>
                        </div>
                    </div>
                    <div className="footer__inner__item__card footer__inner__item__2">
                        <Image src={phoneImg} className="footer__inner__item__img " alt=""></Image>
                        <div className="footer__inner__item__description">
                            <div className="footer__inner__item__description__header">
                                Обратная связь
                            </div>
                            Вы можете оставить идеи и пожелания по улучшению работы ресурса тут. 
                        </div>
                    </div>
                </div>
               
                <div className="footer__socials">
                    <div className="footer__socials__header">
                        Наши социальные сети
                    </div>
                    <div className="footer__socials__container">
                        <Link href="https://www.vk.com/" className="footer__socials__link">
                            <Image src={vkLogo} alt=""></Image>
                        </Link>
                        <Link href="https://www.youtube.com/" className="footer__socials__link">
                            <Image src={youtubeLogo} alt=""></Image>
                        </Link>
                        <Link href="https://web.telegram.org" className="footer__socials__link">
                            <Image src={telegramLogo} alt=""></Image>
                        </Link>
                    </div>
                    <div className="footer__socials__copyright">
                        © 2025 Cardio Club. All rights are reserved
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
  );
}