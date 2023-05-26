import React from "react";
import PopupWithForm from "./PopupWithForm.js";

// создание компонента ConfirmationPopup
function ConfirmationPopup({
  deleteCard: { isOpen, card },
  onClose,
  onOverlayClose,
  onDeleteCard,
  isRender,
}) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onDeleteCard(card);
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="confirmationForm"
      buttonText={isRender ? "Удаление..." : "Да"}
      isOpen={isOpen}
      onClose={onClose}
      onOverlayClose={onOverlayClose}
      onSubmit={handleSubmit}
    ></PopupWithForm>
  );
}

export default ConfirmationPopup;
