import logo from './logo.svg';

function App() {
  return (
    <div className="page">
      <header className="header">
          <img src="<%=require('./images/header__logo.svg')%>" alt="Логотип заголовка" className="header__logo" />
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-group">
              <img src="<%=require('./images/Avatar.png')%>" alt="Фотография Кусто" className="profile__avatar" />
              <button aria-label="Обновить аватар" className="profile__avatar-button" type="button">
              </button>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <h2 className="profile__subtitle">Исследователь океана</h2>
              <button aria-label="Редактировать" className="profile__edit-button">
                <img src="<%=require('./images/Vector-2.png')%>" alt="Кнопка редактирования" className="profile__pen-icon" />
              </button>
            </div>
            <button aria-label="Добавить" className="profile__add-button">
              <img src="<%=require('../../../images/Vectoradd.png')%>" alt="Значок плюса" className="profile__plus-icon" />
            </button>
          </section>
          <section aria-label="Галерея" className="elements">
            <template id="cardTemplate" className="card" />
          </section>
        </main>
        <footer className="footer">
          <p>© 2020 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_edit">
          <div className="popup__overlay">
            <form name="profileForm" className="form popup__container" noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <input type="text" name="name" id="name-input" placeholder="Введите имя" className="popup__input popup__input_name" minLength={2} maxLength={40} required />
              <span className="name-input-error popup__input-error" />
              <input type="text" name="about" id="information-input" placeholder="Введите дополнительную информацию" className="popup__input popup__input_information" minLength={2} maxLength={200} required />
              <span className="information-input-error popup__input-error" />
              <button className="popup__submit popup__submit_save" type="submit">
                Сохранить
              </button>
              <button aria-label="Закрыть" type="button" className="popup__close-button">
                <img src="<%=require('./images/CloseIcon.svg')%>" alt="Значок крестика" className="popup__close-icon" />
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__overlay">
            <form name="placeForm" className="form popup__container">
              <h2 className="popup__title">Новое место</h2>
              <input name="name" id="place-name-input" type="text" placeholder="Введите название места" className="popup__input popup__input_place-name" minLength={2} maxLength={30} required />
              <span className="place-name-input-error popup__input-error" />
              <input name="link" id="link-input" type="url" placeholder="Введите ссылку на изображение" className="popup__input popup__input_image" required />
              <span className="link-input-error popup__input-error" />
              <button className="popup__submit popup__submit_create popup__submit_disabled" type="submit">
                Создать
              </button>
              <button aria-label="Закрыть" type="button" className="popup__close-button">
                <img src="<%=require('./images/CloseIcon.svg')%>" alt="Значок крестика" className="popup__close-icon" />
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_zoom">
          <div className="popup__overlay popup__overlay_zoom">
            <div className="popup__container popup__container_zoom">
              <img className="popup__image" alt="#" src="#" />
              <p className="popup__caption" />
              <button aria-label="Закрыть" type="button" className="popup__close-button">
                <img src="<%=require('./images/CloseIcon.svg')%>" alt="Значок крестика" className="popup__close-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="popup popup_type_confirmation">
          <div className="popup__overlay">
            <form name="confirmation-form" className="form popup__container popup__container_confirmation">
              <h2 className="popup__title">Вы уверены?</h2>
              <button className="popup__submit popup__submit_confirm" type="submit">
                Да
              </button>
              <button aria-label="Закрыть" type="button" className="popup__close-button">
                <img src="<%=require('./images/CloseIcon.svg')%>" alt="Значок крестика" className="popup__close-icon" />
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_new-avatar">
          <div className="popup__overlay">
            <form name="avatarForm" className="form popup__container">
              <h2 className="popup__title popup__title_avatar">Обновить аватар</h2>
              <input name="avatar" id="new-avatar-input" type="url" placeholder="Ссылка на изображение" className="popup__input popup__input_new-avatar" required />
              <span className="new-avatar-input-error popup__input-error" />
              <button className="popup__submit popup__submit_save" type="submit">
                Сохранить
              </button>
              <button aria-label="Закрыть" type="button" className="popup__close-button">
                <img src="<%=require('./images/CloseIcon.svg')%>" alt="Значок крестика" className="popup__close-icon" />
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default App;
