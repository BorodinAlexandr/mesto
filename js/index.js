import initialCards from './cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const buttonOpenProfile = document.querySelector('.profile__edit'),
  cardOpenButton = document.querySelector('.profile__button'),
  popups = document.querySelectorAll('.popup'),
  popupProfile = document.querySelector('.popup_edit_profile'),
  popupCards = document.querySelector('.popup_edit_cards'),
  popupImage = document.querySelector('.popup_img'),
  formElement = document.querySelector('.popup__form_edit_profile'),
  formAddCards = document.querySelector('.popup__form_add_cards'),
  nameInput = document.querySelector('.popup__text_value_name'),
  descriptionInput = document.querySelector('.popup__text_value_descr'),
  titleInput = document.querySelector('.popup__text_value_title'),
  linkInput = document.querySelector('.popup__text_value_link'),
  personName = document.querySelector('.profile__name'),
  description = document.querySelector('.profile__descr'),
  cardsParent = document.querySelector('.places'),
  buttonElement = popupCards.querySelector('.popup__button');

// const validator = new FormValidator({
//   inputSelector: '.popup__text',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_inactive',
//   inputErrorClass: 'popup__text_type-error',
//   errorClass: 'popup__text-error_active',
// }, '.popup__form');

function renderCard(parentSelector, card) {
  parentSelector.prepend(card);
}

initialCards.forEach((item) => {
  renderCard(cardsParent, new Card(item, '.places__place').getCard());
});

function clearAddCardForm() {
  titleInput.value = '';
  linkInput.value = '';
}

function fillProfileEditForm() {
  nameInput.value = personName.textContent;
  descriptionInput.value = description.textContent;
}

function openPopup(popup) {
  popup.classList.add('popup_opened');

  //   const formElement = popup.querySelector('.popup__form');
  //   const inputs = popup.querySelectorAll('.popup__text');

  //     inputs.forEach((inputElement) => {
  //   validator.hideInputError(formElement, inputElement, {
  //     inputErrorClass: 'popup__text_type-error',
  //     errorClass: 'popup__text-error_active',
  //   });
  //     });

  document.addEventListener('keyup', closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEscape);
}

function closePopupByEscape(e) {
  if (e.code === 'Escape') {
    popups.forEach((popup) => {
      if (popup.classList.contains('popup_opened')) {
        closePopup(popup);
      }
    });
  }
}

function profileFormSubmitHandler(e) {
  e.preventDefault();

  const newName = nameInput.value,
    newDescr = descriptionInput.value;

  personName.textContent = newName;
  description.textContent = newDescr;

  closePopup(popupProfile);
}

function addCards(e) {
  e.preventDefault();

  const link = linkInput.value,
    name = titleInput.value;

  const card = {
    name: name,
    link: link,
  };

  renderCard(cardsParent, new Card(card, '.places__place').getCard());
  closePopup(popupCards);
}

function clearErrors({popup, inputSelector, className}) {
    const inputs = popup.querySelectorAll(inputSelector);

    inputs.forEach((inputElement) => {
        className.hideInputError(inputElement);
    });
}

buttonOpenProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  fillProfileEditForm();

  const profileValidator = new FormValidator(
    {
      inputSelector: '.popup__text',
      submitButtonSelector: '.popup__button',
      inactiveButtonClass: 'popup__button_inactive',
      inputErrorClass: 'popup__text_type-error',
      errorClass: 'popup__text-error_active',
    },
    '.popup__form_edit_profile'
  );

  profileValidator.enableValidation();

  clearErrors({
    popup: popupProfile,
    inputSelector: '.popup__text',
    className: profileValidator,
  });
});


cardOpenButton.addEventListener('click', () => {
  openPopup(popupCards);
  clearAddCardForm();

  const cardValidator = new FormValidator(
    {
      inputSelector: '.popup__text',
      submitButtonSelector: '.popup__button',
      inactiveButtonClass: 'popup__button_inactive',
      inputErrorClass: 'popup__text_type-error',
      errorClass: 'popup__text-error_active',
    },
    '.popup__form_add_cards'
  );

  cardValidator.enableValidation();

  clearErrors({
    popup: popupCards,
    inputSelector: '.popup__text',
    className: cardValidator,
  });
});

popups.forEach((popup) => {
  const buttonClose = popup.querySelector('.popup__close');

  buttonClose.addEventListener('click', () => {
    closePopup(popup);
  });

  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup')) {
      closePopup(popup);
    }
  });
});

formElement.addEventListener('submit', profileFormSubmitHandler);

formAddCards.addEventListener('submit', addCards);

export {openPopup, popupImage};
