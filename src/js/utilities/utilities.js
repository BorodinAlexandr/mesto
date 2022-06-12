const popups = document.querySelectorAll('.popup'),
  popupImage = document.querySelector('.popup_img'),
  popupImageElement = document.querySelector('.popup__image'),
  popupCards = document.querySelector('.popup_edit_cards'),
  formAddCards = popupCards.querySelector('.popup__form_add_cards'),
  titleInput = formAddCards.querySelector('.popup__text_value_title'),
  linkInput = formAddCards.querySelector('.popup__text_value_link'),
  popupImageDescription = document.querySelector('.popup__img-descr'),
  popupProfile = document.querySelector('.popup_edit_profile'),
  formElement = popupProfile.querySelector('.popup__form_edit_profile'),
  nameInput = formElement.querySelector('.popup__text_value_name'),
  descriptionInput = formElement.querySelector('.popup__text_value_descr');

  function clearErrors({ popup, inputSelector, className }) {
      const inputs = popup.querySelectorAll(inputSelector);
    
      inputs.forEach((inputElement) => {
        className.hideInputError(inputElement);
      });
  }

export {
  popups,
  popupImage,
  popupImageElement,
  popupImageDescription,
  popupCards,
  formAddCards,
  titleInput,
  linkInput,
  formElement,
  popupProfile,
  nameInput, 
  descriptionInput,
  clearErrors
};
