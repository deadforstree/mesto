export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick;
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
    this._view.querySelector('.elements__title').textContent = this._name
    return this._view
  }

  _setEventListeners() {

    this._likeButton = this._view.querySelector('.elements__like-btn')

    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard()
    })

    this._deleteButton = this._view.querySelector('.elements__delete-btn')

    this._deleteButton.addEventListener('click', () => {
      this._handleRemoveCard()
    })
  
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link))
    
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle('elements__like-btn_active')
  }

  _handleRemoveCard() {
    this._deleteButton.closest('.elements__card').remove()
  }
}