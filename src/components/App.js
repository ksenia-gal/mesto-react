import React from "react";
import api from "../utils/Api.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import ConfirmationPopup from "./ConfirmationPopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddCardPopup from "./AddCardPopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    element: {},
  });
  const [selectedCardDeleteConfirmation, setSelectedCardDeleteConfirmation] =
    React.useState({ isOpen: false, card: {} });
  const [isSaving, setIsSaving] = React.useState(false);

  // создание стейта currentUser
  const [currentUser, setCurrentUser] = React.useState({});

  // эффект получения данных пользователя при загрузке страницы
  React.useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // эффект получения карточек при загрузке страницы
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // обработчик открытия попапа EditAvatarPopup
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // обработчик открытия попапа EditProfilePopup
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  // обработчик открытия попапа AddCardPopup
  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  // обработчик увеличения изображения
  function handleCardClick(card) {
    setSelectedCard({ ...selectedCard, isOpen: true, element: card });
  }

  //  обработчик удаления карточки
  function handleDeleteCardClick(card) {
    setSelectedCardDeleteConfirmation({
      ...selectedCardDeleteConfirmation,
      isOpen: true,
      card: card,
    });
  }

  // обработчик закрытия всех попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setSelectedCard({ ...selectedCard, isOpen: false });
    setSelectedCardDeleteConfirmation({
      ...selectedCardDeleteConfirmation,
      isOpen: false,
    });
  }

  // обработчик закрытия попапа по оверлею
  function handleOverlayClickClose(evt) {
    if (evt.target.classList.contains("popup__overlay")) closeAllPopups();
  }

  // обработчик изменения данных пользователя
  function handleUpdateUserData(newUserData) {
    setIsSaving(true);
    api
      .editProfile(newUserData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  // обработчик изменения аватара
  function handleUpdateAvatar(newAvatarLink) {
    setIsSaving(true);
    api
      .changeAvatar(newAvatarLink)
      .then((data) => {
        setCurrentUser({ ...currentUser, avatar: data.avatar });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  // обработчик добавления карточки
  function handleAddCardSubmit(cardData) {
    setIsSaving(true);
    api
      .addNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  // обработчик лайков карточки
  function handleCardLike(card) {
    // проверка, есть ли лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (isLiked) {
      api
        .deleteLike(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((error) => console.log(`Ошибка: ${error}`));
    } else {
      api
        .putLike(card._id)
        .then((newCard) =>
          setCards((state) =>
            state.map((item) => (item._id === card._id ? newCard : item))
          )
        )
        .catch((error) => console.log(`Ошибка: ${error}`));
    }
  }

  // функция удаления карточки
  function handleCardDelete(card) {
    setIsSaving(true);
    api
      .deleteCard(card._id)
      .then(() => {
        // создание копии массива c помощью метода filter с исключением из него удаленной карточки
        const newCards = cards.filter((item) =>
          item._id === card._id ? false : true
        );
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSaving(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddCardClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onDeletePlace={handleDeleteCardClick}
          />
          <Footer />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            onOverlayClose={handleOverlayClickClose}
          />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onOverlayClose={handleOverlayClickClose}
            onUpdateUser={handleUpdateUserData}
            isRender={isSaving}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onOverlayClose={handleOverlayClickClose}
            onUpdateAvatar={handleUpdateAvatar}
            isRender={isSaving}
          />
          <AddCardPopup
            isOpen={isAddCardPopupOpen}
            onClose={closeAllPopups}
            onOverlayClose={handleOverlayClickClose}
            onAddPlace={handleAddCardSubmit}
            isRender={isSaving}
          />
          <ConfirmationPopup
            deleteCard={selectedCardDeleteConfirmation}
            onClose={closeAllPopups}
            onOverlayClose={handleOverlayClickClose}
            onDeleteCard={handleCardDelete}
            isRender={isSaving}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
