export default function Search() {
  return (
      <div className="search">
            <div className="container">
                <div className="search__inner">
                    <h2 className="header__style search__header">
                        Поиск по сайту
                    </h2>
                    <div className="search__text">
                        Введите тему, которая вас интересует и найдите полезные статьи на сайте
                    </div>
                    <input type="text" placeholder="Введите ваш запрос" className="search__input">
                    </input>
                    <div className="search__input__text">
                        Например: «Инфаркт миокарда на ЭКГ», «Как высчитать ЧСС?», ЭОС...
                    </div>
                </div>
            </div>
        </div>
  );
}
