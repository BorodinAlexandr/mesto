import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super();
    this._popup = document.querySelector(popupSelector);
    this._popupImageElement = document.querySelector('.popup__image');
    this._popupImageDescription = document.querySelector('.popup__img-descr');
  }

  open(e) {
    super.open();
    this._popupImageElement.src = e.target.src;
    this._popupImageElement.alt = e.target.alt;

    this._popupImageDescription.textContent = this._popupImageElement.alt;
  }
}
