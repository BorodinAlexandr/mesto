export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }
  open(e) {
    this._popupSelector.classList.add('popup_opened');

    this.setEventListeners(e);
    document.addEventListener('keyup', this._handleСloseByEscape);
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleСloseByEscape);
  }

  setEventListeners(e) {
    this._handleСloseByEscape(e);
    this._handleCloseByOverlay();
    this._handleCloseByButton();
  }

  _handleСloseByEscape() {
    document.addEventListener('keyup', (e) => {
        if (e.code === 'Escape') {
            this.close();
          }
    });

  }

  _handleCloseByOverlay() {
    this._popupSelector.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup')) {
        this.close(this._popupSelector);
      }
    });
  }

  _handleCloseByButton() {
    this.buttonClose = this._popupSelector.querySelector('.popup__close');

    this.buttonClose.addEventListener('click', () => {
      this.close(this._popupSelector);
    });
  }
}
