import React from "react";
import PopupWithForm from "./PopupWithForm.js";

// создание компонента EditAvatarPopup
function EDitAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isRender,
  onOverlayClose,
}) {
  //получаем прямой доступ к DOM-элементу инпута и его значению
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  // эффект очистки формы
  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatarForm"
      title="Обновить аватар"
      isOpen={isOpen}
      buttonText={isRender ? "Сохранение..." : "Сохранить"}
      onClose={onClose}
      onOverlayClose={onOverlayClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        id="new-avatar-input"
        type="url"
        className="popup__input popup__input_new-avatar"
        placeholder="Ссылка на изображение"
        name="avatar"
        required
      />
      <span
        id="new-avatar-input-error"
        className="new-avatar-input-error popup__input-error"
      ></span>
    </PopupWithForm>
  );
}

export default EDitAvatarPopup;
