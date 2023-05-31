import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

// создание компонента EditProfilePopup
function EditProfilePopup({
  isOpen,
  onClose,
  onOverlayClose,
  onUpdateUser,
  isRender,
}) {
  // стейт-переменные для пользователя
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  // подписка на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // эффект заполнения корректными данными при открытии формы редактирования профиля
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profileForm"
      isOpen={isOpen}
      buttonText={isRender ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      onOverlayClose={onOverlayClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name || ""}
        onChange={handleChangeName}
        id="name-input"
        type="text"
        className="popup__input popup__input_name"
        placeholder="Введите имя"
        name="name"
        minLength="2"
        maxLength="40"
        required
      />
      <span id="name-input-error" className="popup__input-error"></span>
      <input
        value={description || ""}
        onChange={handleChangeDescription}
        id="information-input"
        type="text"
        className="popup__input popup__input_information"
        placeholder="Введите дополнительную информацию о себе"
        name="about"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="information-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
