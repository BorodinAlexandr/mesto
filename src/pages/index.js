import initialCards from '../js/utilities/cards';
import validatorSettings from '../js/utilities/constants.js';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import './index.css';
import { nameInput, descriptionInput } from '../js/utilities/utilities.js';

const buttonOpenProfile = document.querySelector('.profile__edit'),
  cardOpenButton = document.querySelector('.profile__button');

const popupWithImage = new PopupWithImage('.popup_img');
popupWithImage.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer(item) {
      section.prependItem(
        new Card(item, '.card-template', (e) => {
          popupWithImage.open(e);
        }).getCard()
      );
    },
  },
  '.places'
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

const popupCards = new PopupWithForm('.popup_edit_cards', (e) => {
  e.preventDefault();
  section.addItem(popupCards.submitHandler());
  popupCards.close();
});

popupCards.setEventListeners();

const popupProfile = new PopupWithForm('.popup_edit_profile', (e) => {
  e.preventDefault();

  const data = popupProfile.submitHandler();

  userInfo.setUserInfo(data.name, data.descr);

  popupProfile.close();
});

popupProfile.setEventListeners();

const profileValidator = new FormValidator(
  validatorSettings,
  '.popup__form_edit_profile'
);

profileValidator.enableValidation();

buttonOpenProfile.addEventListener('click', (e) => {
  popupProfile.open(e);
  
  const data = userInfo.getUserInfo();

  nameInput.value = data.name;
  descriptionInput.value = data.description;

  profileValidator.resetValidation();
});

cardOpenButton.addEventListener('click', (e) => {
  cardValidator.resetValidation();

  popupCards.open(e);
});
