import Popup from './Popup';
import { titleInput, linkInput } from './utilities/utilities';

export default class PopupWithForm extends Popup {
  constructor(_popupSelector, submitListener) {
    super(_popupSelector);
    this.submitListener = submitListener;
    this.inputs = this._popupSelector.querySelectorAll('input');
    this.inputsValue = {};
    this.titleInput = titleInput;
    this.linkInput = linkInput;
  }

  _getInputValues() {
    this.inputs.forEach((item) => {
      this.inputsValue[item.name] = item.value;
    });

    return this.inputsValue;
  }

  setEventListeners(e) {
    this._handleСloseByEscape(e);
    this._handleCloseByOverlay();
    this._handleCloseByButton();
    this.submitListener();
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    this._getInputValues();
    this._clearAddCardForm();
    document.removeEventListener('keyup', this._handleСloseByEscape);
  }

  _clearAddCardForm() {
    this.titleInput.value = '';
    this.linkInput.value = '';
  }
}
