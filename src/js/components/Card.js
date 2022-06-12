class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._src = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;

    this.handleCardClick = handleCardClick;
  }

  _likeCard() {
    this.buttonLike.classList.toggle('places__like_active');
  }

  _deleteCard() {
    this.buttonDelete.closest(this._templateSelector).remove();
  }

  _setEventListeners() {
    this.buttonLike = this.cardElement.querySelector('.places__like');
    this.buttonDelete = this.cardElement.querySelector('.places__delete');

    this.buttonLike.addEventListener('click', () => {
      this._likeCard();
    });

    this.buttonDelete.addEventListener('click', () => {
      this._deleteCard();
    });

    
    this.cardImage.addEventListener('click', (e) => {

    this.handleCardClick(e);
    });
  }

  _createCard() {
    this.cardTemplate = document.querySelector('.card-template').content;

    this.cardElement = this.cardTemplate
      .querySelector(this._templateSelector)
      .cloneNode(true);

    this.cardImage = this.cardElement.querySelector('.places__img');

    this.cardImage.alt = this._alt;
    this.cardImage.src = this._src;
    this.cardElement.querySelector('.places__name').textContent = this._alt;
  }

  getCard() {
    this._createCard();

    this._setEventListeners();
    return this.cardElement;
  }
}

export default Card;
