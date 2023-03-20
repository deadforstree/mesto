export default class Card {
  constructor({ data, handleCardClick, handleLikeClick, handleConfirmDelete }, cardSelector, userId) {
    this._name = data.name
    this._link = data.link
    this._likes = data.likes

    this._handleCardClick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleConfirmDelete = handleConfirmDelete

    this._cardSelector = cardSelector

    this._id = data._id
    this._ownerId = data.owner._id
    this._userId = userId
  }

  _getCardTemplate() {
    this._view = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true)
  }

  renderCard() {
    this._getCardTemplate()
    this._cardImage = this._view.querySelector('.elements__image')
    this._cardImage.src = this._link
    this._cardImage.alt = this._name

    this._setEventListeners()

    this._elementTittle.textContent = this._name
    this._elementLikes.textContent = this._likes.length

    if (!(this._ownerId === this._userId)) {
      this._deleteButton.style.display = 'none'
    }

    if (this._likes.find((obj) => this._userId === obj._id)) {
      this._likeButton.classList.add('elements__like-btn_active')
    }

    return this._view
  }

  _setEventListeners() {

    this._likeButton = this._view.querySelector('.elements__like-btn');
    this._deleteButton = this._view.querySelector('.elements__delete-btn');
    this._elementTittle = this._view.querySelector('.elements__title');
    this._elementLikes = this._view.querySelector('.elements__like-count');

    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick()
    })

    this._deleteButton.addEventListener('click', () => {
      this._handleConfirmDelete()
    })

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({
        name: this._name,
        src: this._link
      })
    })
  }

  isLiked() {
    const isLikeUser = this._likes.find(user => user._id === this._userId)
    return isLikeUser
  }

  setLikes(countLikes) {
    this._likes = countLikes
    this._elementLikes.textContent = this._likes.length

    this._cardLikedActive = 'elements__like-btn_active'
    if (this.isLiked()) {
      this._likeButton.classList.add(this._cardLikedActive)
    } else {
      this._likeButton.classList.remove(this._cardLikedActive)
    }
  }

  handleRemoveCard() {
    this._view
      .closest('.elements__card')
      .remove()
  }
}