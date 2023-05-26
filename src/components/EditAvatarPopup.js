import React from "react";
import PopupWithForm from "./PopupWithForm.js";

// создание компонента EDitAvatarPopup
function EDitAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  isRender,
  onOverlayClose,
}) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  // эффект для очистки формы
  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatarForm"
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
        placeholder="Ссылка на изображение"
        className="popup__input popup__input_new-avatar"
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
