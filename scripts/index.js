import { Card } from "./card.js";

import { FormValidator } from "./validate.js";

import {
  popupEditPlace,
  placeFormEdit,
  cardsInitial,
  aboutButtonEdit,
  aboutPopupEdit,
  aboutButtonAdd,
  aboutPopupAdd,
  popupEditProfile,
  userName,
  userText,
  nameInput,
  textInput,
  popupAddPlace,
  elementsPhotoContainer,
  placeFormAdd,
  placeNameInput,
  placeLinkInput,
  template,
  imagePopup,
  imageFull,
  imageTittle,
  popupList,
  buttonElement,
  buttonElementAdd,
  validationConfig
} from "./constans.js";

popupList.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
  });
});

aboutButtonEdit.addEventListener('click', () => {
  nameInput.value = userName.textContent;
  textInput.value = userText.textContent;
  openPopup(aboutPopupEdit);
});

function disableButton() {
  buttonElementAdd.setAttribute('disabled', true);
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function closeEditProfilePopup() {
  closePopup(aboutPopupEdit);
};

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

aboutButtonAdd.addEventListener('click', () => {
  openPopup(aboutPopupAdd);
  disableButton();
});

function submitEditProfileForm(evtm) {
  evtm.preventDefault();
  userName.textContent = nameInput.value;
  userText.textContent = textInput.value;
  closeEditProfilePopup();
};

popupEditProfile.addEventListener('submit', submitEditProfileForm);

function addCard(evt) {
  evt.preventDefault()

  const newValues = {
    name: placeNameInput.value,
    link: placeLinkInput.value
  }

  handleAddCard(newValues)

  placeFormAdd.reset()
  closePopup(aboutPopupAdd)
}

placeFormAdd.addEventListener('submit', addCard)

const handleAddCard = (item) => {
  const newCard = new Card(item, '#card-template')
  newCard.renderCard(elementsPhotoContainer)
}

cardsInitial.reverse().forEach((item) => {
  handleAddCard(item)
})

const profileEditFormValidator = new FormValidator(validationConfig, placeFormEdit)
profileEditFormValidator.enableValidation()

const cardAddFormValidator = new FormValidator(validationConfig, placeFormAdd)
cardAddFormValidator.enableValidation()