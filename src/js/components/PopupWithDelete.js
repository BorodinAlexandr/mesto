import Popup from './Popup';

export default class PopupDelete extends Popup {
  constructor(popupSelector, handleDeleteCard) {
    super(popupSelector);
    this.handleDeleteCard = handleDeleteCard;
    this.form = this._popup.querySelector('form');
    this.submitButton = this.form.querySelector('button');
  }

  open(e) {
    super.open();

    const id = e.target.getAttribute('data-id');

    this.submitButton.setAttribute('data-id', id);
  }

  setEventListeners() {
    super.setEventListeners();
    this.deleteCard();
  }

  deleteCard() {
    this.form.addEventListener('submit', (e) => {
      this.handleDeleteCard(e);
    });
  }
}
