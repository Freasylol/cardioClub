
import founderImg from "../../public/images/founder__img.png";
import specialistImg from "../../public/images/specialist__img.png";

import styles from "../styles/Cooperation.module.css";
import DescriptionText from "./DescriptionText";
import Image from "next/image";
import SubHeaderText from "./SubHeaderText";
import HeaderText from "./HeaderText";

export default function Cooperation() {
  return (
    <div className={styles.cooperation}>
      <div className="container">
        <div className={styles.cooperation__inner}>
          <div className={styles.founder__card}>
            <div className={styles.founder__card__inner}>
              <Image
                src={founderImg}
                alt=""
                className={styles.founder__img}
              ></Image>
              <div className={styles.founder__text}>
                <SubHeaderText className={styles.founder__name}>Рудь</SubHeaderText>
                <SubHeaderText className={styles.founder__lastname}>Руслан</SubHeaderText>
                <SubHeaderText className={styles.founder__patronymic}>Сергеевич</SubHeaderText>
                <SubHeaderText color="#4480EA" className={styles.founder__role}>основатель</SubHeaderText>
                <DescriptionText fontWeight="500" className={styles.founder__description}>
                  Врач-кардиолог, ассистент кафедры факультетской терапии №1
                  Сеченовского университета, член РКО, автор книги «Препараты в
                  кардиологии» и курса «ЭКГ не враг». Автор лекций по
                  кардиологии и терапии.
                </DescriptionText>
              </div>
            </div>
          </div>
          <div className={styles.specialists}>
            <HeaderText color="#000" className={styles.specialists__title}>Специалисты</HeaderText>
            <div className={styles.specialists__cards}>
              <div className={styles.specialist__card}>
                <Image src={specialistImg} alt="" className={styles.specialist__img}></Image>
                <div className={styles.specialist__text}>
                  <SubHeaderText className={styles.specialist__lastname}>Юнг</SubHeaderText>
                  <SubHeaderText className={styles.specialist__name}>Александр</SubHeaderText>
                  <SubHeaderText className={styles.specialist__patronymic}>Григорьевич</SubHeaderText>
                  <SubHeaderText color="#4480EA" className={styles.specialist__role}>специалист</SubHeaderText>
                  <DescriptionText fontWeight="500" className={styles.specialist__description}>
                    Врач экстренной и неотложной помощи, PGY2 aka резидент второго года в программе Family Medicine в NYс, Emergency Department. Автор популярного блога по кардиологии в VK.
                  </DescriptionText>
                </div>
              </div>
             <div className={styles.specialist__card}>
                <Image src={specialistImg} alt="" className={styles.specialist__img}></Image>
                <div className={styles.specialist__text}>
                  <SubHeaderText className={styles.specialist__lastname}>Юнг</SubHeaderText>
                  <SubHeaderText className={styles.specialist__name}>Александр</SubHeaderText>
                  <SubHeaderText className={styles.specialist__patronymic}>Григорьевич</SubHeaderText>
                  <SubHeaderText color="#4480EA" className={styles.specialist__role}>специалист</SubHeaderText>
                  <DescriptionText fontWeight="500" className={styles.specialist__description}>
                    Врач экстренной и неотложной помощи, PGY2 aka резидент второго года в программе Family Medicine в NYс, Emergency Department. Автор популярного блога по кардиологии в VK.
                  </DescriptionText>
                </div>
              </div>
              <div className={styles.specialist__card}>
                <Image src={specialistImg} alt="" className={styles.specialist__img}></Image>
                <div className={styles.specialist__text}>
                  <SubHeaderText className={styles.specialist__lastname}>Юнг</SubHeaderText>
                  <SubHeaderText className={styles.specialist__name}>Александр</SubHeaderText>
                  <SubHeaderText className={styles.specialist__patronymic}>Григорьевич</SubHeaderText>
                  <SubHeaderText color="#4480EA" className={styles.specialist__role}>специалист</SubHeaderText>
                  <DescriptionText fontWeight="500" className={styles.specialist__description}>
                    Врач экстренной и неотложной помощи, PGY2 aka резидент второго года в программе Family Medicine в NYс, Emergency Department. Автор популярного блога по кардиологии в VK.
                  </DescriptionText>
                </div>
              </div>
               <div className={styles.specialist__card}>
                <Image src={specialistImg} alt="" className={styles.specialist__img}></Image>
                <div className={styles.specialist__text}>
                  <SubHeaderText className={styles.specialist__lastname}>Юнг</SubHeaderText>
                  <SubHeaderText className={styles.specialist__name}>Александр</SubHeaderText>
                  <SubHeaderText className={styles.specialist__patronymic}>Григорьевич</SubHeaderText>
                  <SubHeaderText color="#4480EA" className={styles.specialist__role}>специалист</SubHeaderText>
                  <DescriptionText fontWeight="500" className={styles.specialist__description}>
                    Врач экстренной и неотложной помощи, PGY2 aka резидент второго года в программе Family Medicine в NYс, Emergency Department. Автор популярного блога по кардиологии в VK.
                  </DescriptionText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
