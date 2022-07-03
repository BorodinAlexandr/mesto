import Popup from './Popup';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDeleteCard) {
    super(popupSelector);
    this.submitButton = this._popup.querySelector('.popup__button');
    this.buttonText = this.submitButton.textContent;
    this.form = this._popup.querySelector('form');
    this.submitButton = this.form.querySelector('button');
    this.handleDeleteCard = handleDeleteCard;
  }

  open(data) {
    super.open();
    this.setDefaultText();

    this.id = data._id;
    this.submitButton.setAttribute('data-id', this.id);
  }

  setEventListeners() {
    super.setEventListeners();
  }

  formListener(callback) {
    this.form.addEventListener('submit', (e) => {
      callback();
      this.submitButton.textContent = 'Удаление...';
      this.handleDeleteCard(e, this.id);
    });
  }

  setErrorText() {
    this.submitButton.textContent = 'Что-то пошло не так...';
  }

  setDefaultText() {
    this.submitButton.textContent = this.buttonText;
  }
}
