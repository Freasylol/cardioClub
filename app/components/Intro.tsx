import Image from "next/image";
import introImg from "../../public/images/intro-img.png";
import Button from "./Button";

export default function Intro() {
  return (
    <div className="intro">
        <div className="container">
            <div className="intro__inner">
                <Image src={introImg} alt=""></Image>
                <div className="intro__inner__block">
                    <h1 className="intro__inner__title">
                        Cardio <span>Club</span>
                    </h1>
                    <div className="intro__inner__text">
                        Cайт для врачей, которые хотят быть в курсе всех новинок кардиологии, терапии и качать свои знания в ЭКГ. Присоединяйся к сообществу, где ведущие специалисты повышают квалификацию и идут в ногу с новейшими исследованиями!
                    </div>
                    <div className="intro__inner__button__wrapper">
                        <Button>Поехали!</Button>;
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
