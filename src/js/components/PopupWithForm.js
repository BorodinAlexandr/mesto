import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitListener) {
    super();
    this._popup = document.querySelector(popupSelector);
    this.submitListener = submitListener;
    this.inputs = this._popup.querySelectorAll('input');
    this.form = this._popup.querySelector('form');
    this.inputsValue = {};
  }

  _getInputValues() {
    this.inputs.forEach((item) => {
      this.inputsValue[item.name] = item.value;
    });

    return this.inputsValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this.submitListener();
  }

  close() {
    super.close();
    this._clearAddCardForm();
  }

  _clearAddCardForm() {
    this.form.reset();
}
}
