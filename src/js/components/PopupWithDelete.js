import Popup from './Popup';

export default class PopupDelete extends Popup {
  constructor(popupSelector, handleDeleteCard) {
    super(popupSelector);
    this.handleDeleteCard = handleDeleteCard;
    this.submitButton = this._popup.querySelector('.popup__button');
    this.buttonText = this.submitButton.textContent;
    this.form = this._popup.querySelector('form');
    this.submitButton = this.form.querySelector('button');
  }

  deleteCardFromPage() {
    this.element = document.querySelector(
      `.places__place[data-id="${this.id}"]`
    );
    this.element.remove();
  }

  open(data) {
    super.open();

    this.id = data._id;
    this.submitButton.setAttribute('data-id', this.id);
  }

  setEventListeners() {
    super.setEventListeners();
    this.deleteCard();
  }

  deleteCard() {
    this.form.addEventListener('submit', (e) => {
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
