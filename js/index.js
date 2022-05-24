import initialCards from './cards.js';
import Card from './classCard.js';
import FormValidator from './FormValidator.js';

const buttonOpenProfile = document.querySelector('.profile__edit'),
  cardOpenButton = document.querySelector('.profile__button'),
  popups = document.querySelectorAll('.popup'),
  popupProfile = document.querySelector('.popup_edit_profile'),
  popupCards = document.querySelector('.popup_edit_cards'),
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

const validator = new FormValidator({
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_type-error',
  errorClass: 'popup__text-error_active',
}, '.popup__form');

function renderCard(parentSelector, card) {
  parentSelector.prepend(card);
}

initialCards.forEach((item) => {
  renderCard(cardsParent, new Card(item, '.places__place').renderCard());
});

function clearAddCardForm() {
  titleInput.value = '';
  linkInput.value = '';
}

function fillProfileEditForm() {
  nameInput.value = personName.textContent;
  descriptionInput.value = description.textContent;

  validator.enableButton(buttonElement, 'popup__button_inactive');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');

  const formElement = popup.querySelector('.popup__form');
  const inputs = popup.querySelectorAll('.popup__text');

  inputs.forEach((inputElement) => {
    validator.hideInputError(formElement, inputElement, {
      inputErrorClass: 'popup__text_type-error',
      errorClass: 'popup__text-error_active',
    });
  });

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

  renderCard(cardsParent, new Card(card, '.places__place').renderCard());
  closePopup(popupCards);
}

buttonOpenProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  fillProfileEditForm();
  validator.enableValidation();
});

cardOpenButton.addEventListener('click', () => {
  openPopup(popupCards);
  clearAddCardForm();
  validator.enableValidation();

  validator.disableButton(buttonElement, 'popup__button_inactive');
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

export default openPopup;
