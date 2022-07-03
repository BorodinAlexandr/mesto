import validatorSettings from '../js/utilities/constants.js';
import PopupWithConfirmation from '../js/components/PopupWithConfirmation';
import PopupWithImage from '../js/components/PopupWithImage.js';
import PopupWithForm from '../js/components/PopupWithForm.js';
import Card from '../js/components/Card.js';
import FormValidator from '../js/components/FormValidator.js';
import Section from '../js/components/Section.js';
import UserInfo from '../js/components/UserInfo.js';
import './index.css';
import { nameInput, descriptionInput } from '../js/utilities/utilities.js';
import Api from '../js/components/Api';

const popupDelete = new PopupWithConfirmation('.popup_delete', (e, id) => {
  e.preventDefault();

  api
    .deleteCard(id)
    .then((res) => {
      console.log(res);
      popupDelete.close();
    })
    .catch((err) => {
      console.log(err);
      popupDelete.setErrorText();
    });
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

const formAddCards = document.querySelector('.popup__form_add_cards'),
  formEditProfile = document.querySelector('.popup__form_edit_profile'),
  formChangePhoto = document.querySelector('.popup__form_change-photo');

const popupWithImage = new PopupWithImage('.popup_img');
popupWithImage.setEventListeners();

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([info, initialCards]) => {
    userId = info._id;
    userInfo.setUserInfo({
      name: info.name,
      descr: info.about,
      avatar: info.avatar,
    });

    section.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

function createNewCard(item) {
  const card = new Card(
    userId,
    item,
    '.card-template',
    () => {
      popupWithImage.open(item);
    },
    () => {
      popupDelete.open(item);
    },
    () => {
      api
        .likeCard(item._id)
        .then((res) => {
            card.setLikes(res.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    () => {
      api
        .deleteLikeCard(item._id)
        .then((res) => {
            card.setLikes(res.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    () => {
      popupDelete.formListener(card.deleteCard);
    }
  );

  return card.getCard();
}

const section = new Section(
  {
    renderer: (item) => {
      section.addItem(createNewCard(item));
    },
  },
  '.places'
);

const userInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__descr',
  avatar: '.profile__img',
});

const cardValidator = new FormValidator(validatorSettings, formAddCards);

cardValidator.enableValidation();

const popupCards = new PopupWithForm('.popup_edit_cards', (e) => {
  e.preventDefault();

  api
    .postNewCard(popupCards.getInputValues())
    .then((res) => {
      section.addItem(createNewCard(res));
      popupCards.close();
    })
    .catch((err) => {
      console.log(err);
      popupCards.setErrorText();
    });
});

popupCards.setEventListeners();

const popupProfile = new PopupWithForm('.popup_edit_profile', (e) => {
  e.preventDefault();

  const data = popupProfile.getInputValues();

  api
    .sendProfileInfo(data.name, data.descr)
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, descr: res.about });
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
      popupProfile.setErrorText();
    });
});

popupProfile.setEventListeners();

const popupPhoto = new PopupWithForm('.popup_edit_photo', (e) => {
  e.preventDefault();

  const data = popupPhoto.getInputValues();

  api
    .sendProfilePhoto(data.link)
    .then((res) => {
      userInfo.setUserInfo({ avatar: res.avatar });
      popupPhoto.close();
    })
    .catch((err) => {
      console.log(err);
      popupPhoto.setErrorText();
    });
});

popupPhoto.setEventListeners();

const profileValidator = new FormValidator(validatorSettings, formEditProfile);

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

const photoValidator = new FormValidator(validatorSettings, formChangePhoto);

photoValidator.enableValidation();

buttonEditPhoto.addEventListener('click', () => {
  photoValidator.resetValidation();

  popupPhoto.open();
});
