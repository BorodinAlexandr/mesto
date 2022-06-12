import Popup from './Popup.js';
import {
  popupImageElement,
  popupImageDescription,
} from './utilities/utilities.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageElement = popupImageElement;
    this._popupImageDescription = popupImageDescription;
  }

  open(e) {
    this._popupImageElement.src = e.target.src;
    this._popupImageElement.alt = e.target.alt;

    this._popupImageDescription.textContent = this._popupImageElement.alt;

    this._popupSelector.classList.add('popup_opened');

    this.setEventListeners(e);
    document.addEventListener('keyup', this._handleСloseByEscape);
  }
}
