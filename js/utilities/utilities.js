const popups = document.querySelectorAll('.popup'),
  popupImage = document.querySelector('.popup_img'),
  popupImageElement = document.querySelector('.popup__image'),
  popupImageDescription = document.querySelector('.popup__img-descr');

function closePopupByEscape(e) {
  if (e.code === 'Escape') {
    popups.forEach((popup) => {
      if (popup.classList.contains('popup_opened')) {
        closePopup(popup);
      }
    });
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keyup', closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', closePopupByEscape);
}

export {
  openPopup,
  closePopup,
  closePopupByEscape,
  popups,
  popupImage,
  popupImageElement,
  popupImageDescription,
};
