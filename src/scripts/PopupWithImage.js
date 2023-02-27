import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(values) {
    super.open()
    this._popupImage = this._popup.querySelector('.popup__image-full')
    this._popupCaption = this._popup.querySelector('.popup__image-tittle')
    this._popupImage.src = values.link
    this._popupImage.alt = values.name
    this._popupCaption.textContent = values.name
  }
}