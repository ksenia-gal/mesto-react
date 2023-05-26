const config = {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
  }
  
  const popupEdit = ".popup_type_edit"
  const popupAddCard = ".popup_type_add"
  const popupZoomImage = ".popup_type_zoom"
  const popupAvatar = ".popup_type_new-avatar"
  const popupWithConfirmation = ".popup_type_confirmation"
  const nameProfile = document.querySelector(".profile__title")
  const aboutProfile = document.querySelector(".profile__subtitle")
  const avatarProfile = document.querySelector(".profile__avatar")
  const buttonEditAvatar = document.querySelector(".profile__avatar-button")
  const buttonAddProfile = document.querySelector(".profile__add-button")
  const buttonEditProfile = document.querySelector(".profile__edit-button")
  const buttonClose = document.querySelector(".popup__close-button")
  const formEditProfile = document.forms.profileForm
  const formAddProfile = document.forms.placeForm
  const formUpdateAvatar = document.forms.avatarForm
  
  export {
    buttonAddProfile,
    buttonEditProfile,
    formEditProfile,
    formAddProfile,
    formUpdateAvatar,
    buttonEditAvatar,
    nameProfile,
    aboutProfile,
    avatarProfile,
    popupAddCard,
    popupZoomImage,
    popupAvatar,
    popupEdit,
    popupWithConfirmation,
    buttonClose
  }
  
  export {config}