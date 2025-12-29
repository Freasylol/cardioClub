import SignUpForm from "./SignUpForm";
import styles from '../styles/Community.module.css';
import starImg from '../../public/images/star__img.png';

import subscriptionImg1 from '../../public/images/subscription__img__1.png';
import subscriptionImg2 from '../../public/images/subscription__img__2.png';
import subscriptionImg3 from '../../public/images/subscription__img__3.png';



import Image from "next/image";

export default function Community() {
  return (
    <div className={styles.community}>
        <div className="container">
            <h2 className={styles.header}>
                Станьте частью сообщества профессионалов
            </h2>
             <div className={styles.community__inner}>
                <div className={styles.register__form__wrapper}>
                    <SignUpForm></SignUpForm>
                </div>
                <div className={styles.subscription}>
                    <div className={styles.subscription__description}>
                        После регистрации вы будете в курсе всех новых полезных материалов, статей и обновлений сайта, у вас появится личный кабинет, в котором вы сможете оформить подписку на эксклюзивные материалы и дополнительные функции. 
                    </div>
                    <h3 className={styles.subscription__header}>
                        Что такое подписка и зачем её оформлять?
                    </h3>
                    <div className={styles.subscription__subheader}>
                        Подписка открывает вам доступ к:
                    </div>
                    <div className={styles.subscription__items}>
                        <div className={styles.subscription__item}>
                            <Image className={styles.subscription__item__img} alt='' src={subscriptionImg1}></Image>
                            <div className={styles.subscription__item__text}>
                                <div className={styles.subscription__item__header}>
                                                                    <Image className={styles.star__img} src={starImg} alt=''></Image>

                                    Полной версии каждой статьи
                                </div>
                                <div className={styles.subscriptoin__item__description}>
                                    Примеры плёнок, реальные кейсы и клинические случаи с их разборами к каждой статье. Помогут вам лучше понять теоретический материал и использовать это в практике.
                                </div>
                            </div>
                        </div>
                         <div className={styles.subscription__item}>
                            <Image className={styles.subscription__item__img} alt='' src={subscriptionImg2}></Image>
                            <div className={styles.subscription__item__text}>
                                <div className={styles.subscription__item__header}>
                                                                    <Image className={styles.star__img} src={starImg} alt=''></Image>

                                    Полной версии каждой статьи
                                </div>
                                <div className={styles.subscriptoin__item__description}>
                                    Примеры плёнок, реальные кейсы и клинические случаи с их разборами к каждой статье. Помогут вам лучше понять теоретический материал и использовать это в практике.
                                </div>
                            </div>
                        </div>
                         <div className={styles.subscription__item}>
                            <Image className={styles.subscription__item__img} alt='' src={subscriptionImg3}></Image>
                            <div className={styles.subscription__item__text}>
                                <div className={styles.subscription__item__header}>
                                                                    <Image className={styles.star__img} src={starImg} alt=''></Image>

                                    Полной версии каждой статьи
                                </div>
                                <div className={styles.subscriptoin__item__description}>
                                    Примеры плёнок, реальные кейсы и клинические случаи с их разборами к каждой статье. Помогут вам лучше понять теоретический материал и использовать это в практике.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
       
        
    </div>
  );
}