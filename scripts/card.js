import { imageFull, imageTittle, imagePopup } from "./constans.js"

import { } from "./index.js"

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
  }

  _getCardTemplate() {
    this._view = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__card')
      .cloneNode(true)
  }

  renderCard(container) {
    this._getCardTemplate()
    this._setEventListeners()
    this._cardImage = this._view.querySelector('.elements__image')
    this._cardImage.src = this._link
    this._cardImage.alt = this._name
    this._view.querySelector('.elements__title').textContent = this._name
    container.prepend(this._view)
  }

  _setEventListeners() {

    this._view
      .querySelector('.elements__like-btn')
      .addEventListener('click', () => {
        this._handleLikeCard()
      })

    this._view
      .querySelector('.elements__delete-btn')
      .addEventListener('click', () => {
        this._handleRemoveCard()
      })

      this._view
      .querySelector('.elements__image')
      .addEventListener('click', () => {
        this._handleOpenPopupImage()
      })

  }

  _handleLikeCard() {
    this._view
      .querySelector('.elements__like-btn').
      classList.
      toggle('elements__like-btn_active')
  }

  _handleRemoveCard() {
    this._view
      .closest('.elements__card')
      .remove()
  }

  _handleOpenPopupImage() {
    imageFull.src = this._link
    imageTittle.textContent = this._name
    imagePopup.classList.add('popup_opened')
  }

}