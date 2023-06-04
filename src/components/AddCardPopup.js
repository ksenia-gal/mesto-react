import React from "react";
import PopupWithForm from "./PopupWithForm.js";

// создание компонента AddCardPopup
function AddCardPopup({
  isOpen,
  onClose,
  onOverlayClose,
  onAddPlace,
  isRender,
}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleAddCardName(evt) {
    setName(evt.target.value);
  }

  function handleAddCardLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  // эффект очистки инпутов
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="placeForm"
      isOpen={isOpen}
      buttonText={isRender ? "Сохранение..." : "Создать"}
      onClose={onClose}
      onOverlayClose={onOverlayClose}
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={handleAddCardName}
        id="card-name-input"
        type="text"
        className="popup__input popup__input_place-name"
        placeholder="Введите название"
        name="name"
        minLength="2"
        maxLength="30"
        required
      />
      <span id="card-name-input-error" className="popup__input-error"></span>
      <input
        value={link}
        onChange={handleAddCardLink}
        id="link-input"
        type="url"
        className="popup__input popup__input_image"
        placeholder="Введите ссылку на изображение"
        name="link"
        required
      />
      <span id="link-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddCardPopup;
