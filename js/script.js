const openBtn = document.querySelector('.profile__edit'),
  closeBtn = document.querySelector('.popup__close'),
  popup = document.querySelector('.popup'),
  formElement = document.querySelector('.popup__form'),
  nameInput = formElement.querySelector('.popup__text_value_name'),
  descrInput = formElement.querySelector('.popup__text_value_descr'),
  personName = document.querySelector('.profile__name'),
  descr = document.querySelector('.profile__descr');

function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = personName.textContent;
  descrInput.value = descr.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();

  let newName = nameInput.value,
    newDescr = descrInput.value;

  personName.textContent = newName;
  descr.textContent = newDescr;

  closePopup();
}

openBtn.addEventListener('click', openPopup);

closeBtn.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);
