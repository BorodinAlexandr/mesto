const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__text_type-error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__text-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__text_type-error');
  errorElement.classList.remove('popup__text-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const buttonElement = formElement.querySelector('.popup__button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formName) => {
  const formList = document.querySelectorAll(formName);
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (e) {
      e.preventDefault();
      
    });
    setEventListeners(formElement);
  });
};

enableValidation('.popup__form');

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__button_inactive');
    buttonElement.disabled = false;
  }
}
