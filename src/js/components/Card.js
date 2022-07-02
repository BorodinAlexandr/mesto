class Card {
  constructor(
    userId,
    data,
    templateSelector,
    handleCardClick,
    handleOpenPopup,
    handleLikeCard,
    handleDeleteLikeCard
  ) {
    this._src = data.link;
    this._alt = data.name;
    this.id = data._id;
    this.likes = data.likes;
    this.likesNumber = this.likes.length;
    this.cardOwnerId = data.owner._id;
    this.userId = userId;
    this._templateSelector = templateSelector;

    this.handleCardClick = handleCardClick;
    this.handleOpenPopup = handleOpenPopup;
    this.handleLikeCard = handleLikeCard;
    this.handleDeleteLikeCard = handleDeleteLikeCard;
  }

  deleteLike() {
    this.buttonLike.classList.remove('places__like_active');
  }

  addLike() {
    this.buttonLike.classList.add('places__like_active');
  }

  setLike() {
    if (this.buttonLike.classList.contains('places__like_active')) {
      this.handleDeleteLikeCard();
    } else {
      this.handleLikeCard();
    }
  }

  setLikeCounter(res) {
    this.likeCounter.textContent = res.likes.length;
  }

  addInitialLike() {
    this.likes.forEach((item) => {
      if (item._id === this.userId) {
        this.addLike();
      }
    });
  }

  showDeleteButton() {
    if (this.cardOwnerId === this.userId) {
      this.buttonDelete.classList.remove('places__delete_hidden');
    }
  }

  _setEventListeners() {
    this.buttonLike.addEventListener('click', () => {
      this.setLike();
    });

    this.buttonDelete.addEventListener('click', () => {
      this.handleOpenPopup();
    });

    this.cardImage.addEventListener('click', () => {
      this.handleCardClick();
    });
  }

  _createCard() {
    this.cardTemplate = document.querySelector(this._templateSelector).content;

    this.cardElement = this.cardTemplate
      .querySelector('.places__place')
      .cloneNode(true);

    this.cardElement.setAttribute(['data-id'], this.id);
    this.buttonLike = this.cardElement.querySelector('.places__like');
    this.likeCounter = this.cardElement.querySelector('.places__like-counter');
    this.buttonDelete = this.cardElement.querySelector('.places__delete');
    this.cardImage = this.cardElement.querySelector('.places__img');
    this.cardLike = this.cardElement.querySelector('.places__like-counter');
    this.buttonLike.setAttribute(['data-id'], this.id);
    this.likeCounter.textContent = this.likesNumber;

    this.cardImage.alt = this._alt;
    this.cardImage.src = this._src;
    this.cardElement.querySelector('.places__name').textContent = this._alt;
    this.showDeleteButton();
    this.addInitialLike();
  }

  getCard() {
    this._createCard();

    this._setEventListeners();
    return this.cardElement;
  }
}

export default Card;
