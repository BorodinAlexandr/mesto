import initialCards from './js/cards.js';
import validatorSettings from './js/utilities/constants.js';
import PopupWithImage from './js/PopupWithImage.js';
import PopupWithForm from './js/PopupWithForm.js';
import Card from './js/Card.js';
import FormValidator from './js/FormValidator.js';
import Section from './js/Section.js';
import UserInfo from './js/UserInfo.js';
import './pages/index.css';
import {
  popupImage,
  popupProfile,
  nameInput,
  descriptionInput,
  formElement,
  clearErrors,
} from './js/utilities/utilities.js';

const buttonOpenProfile = document.querySelector('.profile__edit'),
  cardOpenButton = document.querySelector('.profile__button'),
  popupCards = document.querySelector('.popup_edit_cards'),
  formAddCards = popupCards.querySelector('.popup__form_add_cards'),
  personName = document.querySelector('.profile__name'),
  description = document.querySelector('.profile__descr'),
  cardsParent = document.querySelector('.places');

const section = new Section(
  {
    items: initialCards,
    renderer(item) {
      this._parentSelector.prepend(
        new Card(item, '.places__place', (e) => {
          new PopupWithImage(popupImage).open(e);
        }).getCard()
      );
    },
  },
  cardsParent
);
section.renderItems();

const userInfo = new UserInfo({
  name: personName,
  description: description,
});

const popupCardsOpener = new PopupWithForm(popupCards, () => {
  formAddCards.addEventListener('submit', (e) => {
    e.preventDefault();
    section.addItem();
    popupCardsOpener.close();
  });
});

const popupProfileOpener = new PopupWithForm(popupProfile, () => {
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    userInfo.getUserInfo();
    userInfo.setUserInfo();

    popupProfileOpener.close();
  });
});

buttonOpenProfile.addEventListener('click', (e) => {
  popupProfileOpener.open(e);
  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  descriptionInput.value = data.description;

  const profileValidator = new FormValidator(
    validatorSettings,
    '.popup__form_edit_profile'
  );

  profileValidator.enableValidation();

  clearErrors({
    popup: popupProfile,
    inputSelector: '.popup__text',
    className: profileValidator,
  });
});

cardOpenButton.addEventListener('click', (e) => {
  popupCardsOpener.open(e);

  const cardValidator = new FormValidator(
    validatorSettings,
    '.popup__form_add_cards'
  );

  cardValidator.enableValidation();

  clearErrors({
    popup: popupCards,
    inputSelector: '.popup__text',
    className: cardValidator,
  });
});
