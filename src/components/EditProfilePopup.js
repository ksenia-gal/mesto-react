import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import useForm from "../hooks/useForm.js";

// создание компонента EditProfilePopup
function EditProfilePopup({ isOpen, onClose, onUpdateUser, isRender }) {
  // подписка на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // использование кастомного хука useForm для контроля инпутов
  const { values, handleChange, setValues } = useForm({
    name: currentUser.name,
    description: currentUser.about,
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name: values.name,
      about: values.description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profileForm"
      isOpen={isOpen}
      buttonText={isRender ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={values.name || ""}
        onChange={handleChange}
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
        value={values.description || ""}
        onChange={handleChange}
        id="information-input"
        type="text"
        className="popup__input popup__input_information"
        placeholder="Введите дополнительную информацию о себе"
        name="description"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="information-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
