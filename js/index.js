const openProfileBtn = document.querySelector('.profile__edit'),
  cardOpenBtn = document.querySelector('.profile__button'),
  popups = document.querySelectorAll('.popup'),
  closeBtns = document.querySelectorAll('.popup__close'),
  popupProfile = document.querySelector('.popup_edit_profile'),
  popupCards = document.querySelector('.popup_edit_cards'),
  popupImg = document.querySelector('.popup_img'),
  popupImgImage = document.querySelector('.popup__image'),
  popupImgDescr = document.querySelector('.popup__img-descr'),
  formElement = document.querySelector('.popup__form_edit_profile'),
  formAddCards = document.querySelector('.popup__form_add_cards'),
  nameInput = document.querySelector('.popup__text_value_name'),
  descrInput = document.querySelector('.popup__text_value_descr'),
  titleInput = document.querySelector('.popup__text_value_title'),
  linkInput = document.querySelector('.popup__text_value_link'),
  personName = document.querySelector('.profile__name'),
  descr = document.querySelector('.profile__descr'),
  cardsParent = document.querySelector('.places'),
  cardsLikeBtn = document.querySelectorAll('.places__like');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

cardsParent.innerHTML = '';

function render(place) {
  cardsParent.innerHTML += `
    <div class="places__place">
    <button type="button" class="places__delete"></button>
    <img class="places__img" src="${place.link}" alt="${place.name}" />
    <div class="places__text">
      <h3 class="places__name">${place.name}</h3>
      <button type="button" class="places__like"></button>
    </div>
`;
}

initialCards.forEach((item) => {
  render(item);
});

function openProfilePopup() {
  popupProfile.classList.add('popup_opened');
  nameInput.value = personName.textContent;
  descrInput.value = descr.textContent;
}

function openCardsPopup() {
  popupCards.classList.add('popup_opened');
  titleInput.value = '';
  linkInput.value = '';
}

function openImgPopup() {
  popupImg.classList.add('popup_opened');
}

function closePopup() {
  popups.forEach((item) => {
    item.classList.remove('popup_opened');
  });
}

function formSubmitHandler(e) {
  e.preventDefault();

  let newName = nameInput.value,
    newDescr = descrInput.value;

  personName.textContent = newName;
  descr.textContent = newDescr;

  closePopup();
}

function addCards(e) {
  e.preventDefault();
  let newTitle = titleInput.value,
    newLink = linkInput.value;

  cardsParent.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="places__place">
    <button type="button" class="places__delete"></button>
    <img class="places__img" src="${newLink}" alt="${newTitle}" />
    <div class="places__text">
      <h3 class="places__name">${newTitle}</h3>
      <button type="button" class="places__like"></button>
    </div>
    `
  );
  closePopup();
}

openProfileBtn.addEventListener('click', openProfilePopup);

cardOpenBtn.addEventListener('click', openCardsPopup);

closeBtns.forEach((item) => {
  item.addEventListener('click', closePopup);
});

formElement.addEventListener('submit', formSubmitHandler);

formAddCards.addEventListener('submit', addCards);

cardsParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('places__like')) {
    e.target.classList.toggle('places__like_active');
  }
});

cardsParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('places__delete')) {
    e.target.parentElement.remove();
  }
});

cardsParent.addEventListener('click', (e) => {
  if (e.target.classList.contains('places__img')) {
    const link = e.target.getAttribute('src'),
      descr = e.target.getAttribute('alt');

    popupImgImage.setAttribute('src', link);
    popupImgDescr.textContent = descr;

    openImgPopup();
  }
});
