import initialCards from '../js/utilities/cards';
import validatorSettings from '../js/utilities/constants.js';
import PopupDelete from '../js/components/PopupWithDelete';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import './index.css';
import { nameInput, descriptionInput } from '../js/utilities/utilities.js';
import Api from '../js/components/Api';

const popupDelete = new PopupDelete('.popup_delete', (e) => {
  e.preventDefault();
  const id = document
    .querySelector('.popup_delete .popup__button')
    .getAttribute('data-id');

  api.deleteCard(id);

  const buttonDelete = document.querySelector(`button[data-id="${id}"]`);
  buttonDelete.closest('.places__place').remove();

  popupDelete.close();
});
popupDelete.setEventListeners();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-44',
  headers: {
    authorization: '1ebb2706-9fb2-49dc-9d13-b653050d8d2b',
    'Content-Type': 'application/json',
  },
});

const buttonOpenProfile = document.querySelector('.profile__edit'),
  buttonEditPhoto = document.querySelector('.profile__img-hover'),
  cardOpenButton = document.querySelector('.profile__button');

const popupWithImage = new PopupWithImage('.popup_img');
popupWithImage.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer(item) {
      section.prependItem(
        new Card(
          item,
          '.card-template',
          (e) => {
            popupWithImage.open(e);
          },
          (e) => {
            popupDelete.open(e);
          },
          (e) => {
            const target = e.target;

            const id = target.getAttribute('data-id');

            if (target.classList.contains('places__like_active')) {
              api.likeCard(id).then((res) => {
                target.nextElementSibling.textContent = res.likes.length;
              });
            } else {
              api.deleteLikeCard(id).then((res) => {
                target.nextElementSibling.textContent = res.likes.length;
              });
            }
          }
        ).getCard()
      );
    },
  },
  '.places'
);

const userInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__descr',
  avatar: '.profile__img',
});

const cardValidator = new FormValidator(
  validatorSettings,
  '.popup__form_add_cards'
);

cardValidator.enableValidation();

const popupCards = new PopupWithForm('.popup_edit_cards', (e) => {
  e.preventDefault();

  const data = popupCards.getInputValues();

  section.addItem(data);

  api.postNewCard(popupCards.getInputValues()).then((res) => {
    document.querySelector('.places__like').setAttribute('data-id', res._id);
    document.querySelector('.places__delete').setAttribute('data-id', res._id);
  });

  popupCards.close();
});

popupCards.setEventListeners();

const popupProfile = new PopupWithForm('.popup_edit_profile', (e) => {
  e.preventDefault();

  const data = popupProfile.getInputValues();

  api.sendProfileInfo(data.name, data.descr);

  userInfo.setUserInfo({ name: data.name, descr: data.descr });

  popupProfile.close();
});

popupProfile.setEventListeners();

const popupPhoto = new PopupWithForm('.popup_edit_photo', (e) => {
  e.preventDefault();

  const data = popupPhoto.getInputValues();

  api.sendProfilePhoto(data.link);
  userInfo.setUserInfo({ avatar: data.link });

  popupPhoto.close();
});

popupPhoto.setEventListeners();

const profileValidator = new FormValidator(
  validatorSettings,
  '.popup__form_edit_profile'
);

profileValidator.enableValidation();

buttonOpenProfile.addEventListener('click', () => {
  popupProfile.open();
  const data = userInfo.getUserInfo();

  nameInput.value = data.name;
  descriptionInput.value = data.description;

  profileValidator.resetValidation();
});

cardOpenButton.addEventListener('click', () => {
  cardValidator.resetValidation();

  popupCards.open();
});

const photoValidator = new FormValidator(
  validatorSettings,
  '.popup__form_change-photo'
);

photoValidator.enableValidation();

buttonEditPhoto.addEventListener('click', () => {
  photoValidator.resetValidation();

  popupPhoto.open();
});

api.getUserInfo().then((res) => {
  userInfo.setUserInfo({
    name: res.name,
    descr: res.about,
    avatar: res.avatar,
  });
});

api.getInitialCards().then((res) => {
  res.forEach((place) => {
    section.addItem(place);

    if (place.owner._id != 'd968ca5e3c22cb5f2b0c5cec') {
      const buttonDelete = document.querySelector('.places__delete');
      buttonDelete.classList.add('places__delete_hidden');
    }

    place.likes.forEach((item) => {
      if (item._id == 'd968ca5e3c22cb5f2b0c5cec') {
        const like = document.querySelector('.places__like');
        like.classList.add('places__like_active');
      }
    });

    const like = document.querySelector('.places__like-counter');
    like.textContent = place.likes.length;
  });
});
