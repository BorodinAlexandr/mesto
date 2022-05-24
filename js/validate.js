const showInputError = (formElement, inputElement, errorMessage, options) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
};

const hideInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      options
    );
  } else {
    hideInputError(formElement, inputElement, options);
  }
};

const setEventListeners = (formElement, options) => {
  const inputList = Array.from(
    formElement.querySelectorAll(options.inputSelector)
  );
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, options.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputList, buttonElement, options.inactiveButtonClass);
    });
  });
};

const enableValidation = (options) => {
  const formList = document.querySelectorAll(options.formSelector);
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (e) {
      e.preventDefault();
    });
    setEventListeners(formElement, options);
  });
};

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__text',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_inactive',
//   inputErrorClass: 'popup__text_type-error',
//   errorClass: 'popup__text-error_active',
// });

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function disableButton(buttonElement, inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
}

function enableButton(buttonElement, inactiveButtonClass) {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, inactiveButtonClass);
  } else {
    enableButton(buttonElement, inactiveButtonClass);
  }
}

export { hideInputError, disableButton, enableButton };
