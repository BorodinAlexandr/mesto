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
  descriptionInput = document.querySelector('.popup__text_value_descr'),
  titleInput = document.querySelector('.popup__text_value_title'),
  linkInput = document.querySelector('.popup__text_value_link'),
  personName = document.querySelector('.profile__name'),
  description = document.querySelector('.profile__descr'),
  cardsParent = document.querySelector('.places'),
  cardTemplate = document.querySelector('.card-template').content;

function createCard(place) {
  const cardElement = cardTemplate
    .querySelector('.places__place')
    .cloneNode(true);
  const cardImage = cardElement.querySelector('.places__img'),
    buttonLike = cardElement.querySelector('.places__like'),
    buttonDelete = cardElement.querySelector('.places__delete');
  cardImage.alt = place.name;
  cardImage.src = place.link;
  cardElement.querySelector('.places__name').textContent = place.name;

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('places__like_active');
  });

  buttonDelete.addEventListener('click', () => {
    buttonDelete.closest('.places__place').remove();
  });

  cardImage.addEventListener('click', () => {
    const link = cardImage.getAttribute('src'),
      description = cardImage.getAttribute('alt');

    popupImageElement.src = link;
    popupImageElement.alt = description;
    popupImageDescription.textContent = description;

    openPopup(popupImage);
  });

  return cardElement;
}

function renderCard(parentSelector, card) {
  parentSelector.prepend(card);
}

initialCards.forEach((item) => {
  renderCard(cardsParent, createCard(item));
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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
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

  renderCard(cardsParent, createCard(card));
  closePopup(popupCards);
}

buttonOpenProfile.addEventListener('click', () => {
  openPopup(popupProfile);
  fillProfileEditForm();
});

cardOpenButton.addEventListener('click', () => {
  openPopup(popupCards);
  clearAddCardForm();
});

popups.forEach((item) => {
  const buttonClose = item.querySelector('.popup__close');

  buttonClose.addEventListener('click', () => {
    closePopup(item);
  });
});

formElement.addEventListener('submit', profileFormSubmitHandler);

formAddCards.addEventListener('submit', addCards);
