import styles from "../styles/Search.module.css";

export default function Search() {
  return (
      <div className={styles.search}>
            <div className="container">
                <div className={styles.search__inner}>
                    <h2 className={`header__style ${styles.search__header}`}>
                        Поиск по сайту
                    </h2>
                    <div className={styles.search__text}>
                        Введите тему, которая вас интересует и найдите полезные статьи на сайте
                    </div>
                    <input type="text" placeholder="Введите ваш запрос" className={styles.search__input}>
                    </input>
                    <div className={styles.search__input__text}>
                        Например: «Инфаркт миокарда на ЭКГ», «Как высчитать ЧСС?», ЭОС...
                    </div>
                </div>
            </div>
        </div>
  );
}
