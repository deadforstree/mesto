export default class Card {
  constructor({ data, handleCardClick, handleLikeClick, handleConfirmDelete }, cardSelector, api, userId) {
    this._name = data.name
    this._link = data.link
    this._likes = data.likes

    this._handleCardClick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleConfirmDelete = handleConfirmDelete

    this._cardSelector = cardSelector

    this._api = api
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

  handleLikeCard() {
    const likeButton = this._view.querySelector('.elements__like-btn')
    const likeCount = this._view.querySelector('.elements__like-count')

    if (!(likeButton.classList.contains('elements__like-btn_active'))) {
      this._api.like(this._id)
        .then((data) => {
          likeButton.classList.add('elements__like-btn_active')
          likeCount.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this._api.dislike(this._id)
        .then((data) => {
          likeButton.classList.remove('elements__like-btn_active')
          likeCount.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  handleRemoveCard() {
    this._view
      .closest('.elements__card')
      .remove()
  }
}