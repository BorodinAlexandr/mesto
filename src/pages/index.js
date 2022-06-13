import initialCards from '../js/utilities/cards';
import validatorSettings from '../js/utilities/constants.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import './index.css';
import {
  nameInput,
  descriptionInput,
  formElement,
} from '../js/utilities/utilities.js';

const buttonOpenProfile = document.querySelector('.profile__edit'),
  cardOpenButton = document.querySelector('.profile__button'),
  popupCards = document.querySelector('.popup_edit_cards'),
  formAddCards = popupCards.querySelector('.popup__form_add_cards'),
  cardsParent = document.querySelector('.places');

const popupWithImage = new PopupWithImage('.popup_img');
popupWithImage.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer(item) {
      this._parentSelector.prepend(
        new Card(item, '.card-template', (e) => {
          popupWithImage.open(e);
        }).getCard()
      );
    },
  },
  cardsParent
);
section.renderItems();

const userInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__descr',
});

const cardValidator = new FormValidator(
  validatorSettings,
  '.popup__form_add_cards'
);

cardValidator.enableValidation();

const popupCardsOpener = new PopupWithForm('.popup_edit_cards', () => {
  formAddCards.addEventListener('submit', (e) => {
    e.preventDefault();
    section.addItem(popupCardsOpener._getInputValues());
    popupCardsOpener.close();
  });
});

popupCardsOpener.setEventListeners();

const popupProfileOpener = new PopupWithForm('.popup_edit_profile', () => {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    userInfo.getUserInfo();
    userInfo.setUserInfo();

    popupProfileOpener.close();
  });
});

popupProfileOpener.setEventListeners();

const profileValidator = new FormValidator(
  validatorSettings,
  '.popup__form_edit_profile'
);

profileValidator.enableValidation();

buttonOpenProfile.addEventListener('click', (e) => {
    const popup = document.querySelector('.popup_edit_profile');
    const inputs = popup.querySelectorAll('input');

  popupProfileOpener.open(e);
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  descriptionInput.value = data.description;
  profileValidator.enableButton();

    
  inputs.forEach((inputElement) => {
    profileValidator.hideInputError(inputElement);
  });
});

cardOpenButton.addEventListener('click', (e) => {
  const popup = document.querySelector('.popup_edit_cards');
  const inputs = popup.querySelectorAll('input');

  inputs.forEach((inputElement) => {
    cardValidator.hideInputError(inputElement);
  });

  cardValidator._disableButton();

  popupCardsOpener.open(e);
});
