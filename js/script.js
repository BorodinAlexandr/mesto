const openBtn = document.querySelector(".profile__edit"),
  closeBtn = document.querySelector(".popup__close"),
  popup = document.querySelector(".popup"),
  formElement = document.querySelector(".popup__form"),
  nameInput = formElement.querySelector(".popup__name"),
  descrInput = formElement.querySelector(".popup__descr"),
  personName = document.querySelector(".profile__name"),
  descr = document.querySelector(".profile__descr");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = personName.innerText;
  descrInput.value = descr.innerText;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

openBtn.addEventListener("click", openPopup);

closeBtn.addEventListener("click", closePopup);

function formSubmitHandler(event) {
  event.preventDefault();

  let newName = nameInput.value,
    newDescr = descrInput.value;

  personName.textContent = newName;
  descr.textContent = newDescr;

  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
