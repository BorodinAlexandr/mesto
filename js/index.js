const buttonOpenProfile = document.querySelector('.profile__edit'),
  cardOpenButton = document.querySelector('.profile__button'),
  popups = document.querySelectorAll('.popup'),
  buttonsClose = document.querySelectorAll('.popup__close'),
  popupProfile = document.querySelector('.popup_edit_profile'),
  popupCards = document.querySelector('.popup_edit_cards'),
  popupImage = document.querySelector('.popup_img'),
  popupImageElement = document.querySelector('.popup__image'),
  popupImageDescription = document.querySelector('.popup__img-descr'),
  formElement = document.querySelector('.popup__form_edit_profile'),
  formAddCards = document.querySelector('.popup__form_add_cards'),
  nameInput = document.querySelector('.popup__text_value_name'),
  descrInput = document.querySelector('.popup__text_value_descr'),
  titleInput = document.querySelector('.popup__text_value_title'),
  linkInput = document.querySelector('.popup__text_value_link'),
  personName = document.querySelector('.profile__name'),
  description = document.querySelector('.profile__descr'),
  cardsParent = document.querySelector('.places'),
  cardsLikeButton = cardsParent.querySelectorAll('.places__like'),
  cardTemplate = document.querySelector('.card-template').content;

function setImgAttribute(selector, classSelector, attribute, value) {
  selector.querySelector(classSelector).setAttribute(attribute, value);
}

function setPopupImageAttribute(selector, attribute, value) {
  selector.setAttribute(attribute, value);
}

function render(place) {
  const cardElement = cardTemplate
    .querySelector('.places__place')
    .cloneNode(true);
  setImgAttribute(cardElement, '.places__img', 'src', place.link);
  setImgAttribute(cardElement, '.places__img', 'alt', place.name);
  cardElement.querySelector('.places__name').textContent = place.name;

  cardsParent.prepend(cardElement);

  cardElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('places__like')) {
      e.target.classList.toggle('places__like_active');
    }
  });

  cardElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('places__delete')) {
      e.target.parentElement.remove();
    }
  });

  cardElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('places__img')) {
      const link = e.target.getAttribute('src'),
        descr = e.target.getAttribute('alt');

      setPopupImageAttribute(popupImageElement, 'src', link);
      setPopupImageAttribute(popupImageElement, 'alt', descr);
      popupImageDescription.textContent = descr;

      openPopup(popupImage);
    }
  });
}

initialCards.forEach((item) => {
  render(item);
});

function clearForm() {
  titleInput.value = '';
  linkInput.value = '';
}

function fillForm() {
  nameInput.value = personName.textContent;
  descrInput.value = description.textContent;
}
function openPopup(popupClass) {
  popupClass.classList.add('popup_opened');
}

function openCardsPopup() {
  popupCards.classList.add('popup_opened');
  clearForm();
}

function closePopup(popupSelector) {
  popupSelector.classList.remove('popup_opened');
}

function profileFormSubmitHandler(e) {
  e.preventDefault();

  const newName = nameInput.value,
    newDescr = descrInput.value;

  personName.textContent = newName;
  description.textContent = newDescr;

  closePopup(popupProfile);
}

function addCards(e) {
  e.preventDefault();

  const cardLink = linkInput.value;
  const cardName = titleInput.value;
  const newCard = [
    {
      name: cardName,
      link: cardLink,
    },
  ];

  render(newCard[0]);

  closePopup(popupCards);
}

buttonOpenProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  fillForm();
});

cardOpenButton.addEventListener('click', () => {
  openPopup(popupCards);
  fillForm();
});

// buttonsClose.forEach((item) => {
//   item.addEventListener('click', () => closePopup(item));
// });

popups.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup__close')) {
      closePopup(item);
    }
  });
});

formElement.addEventListener('submit', profileFormSubmitHandler);

formAddCards.addEventListener('submit', addCards);
