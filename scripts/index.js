import { Card } from "./Card.js";

import { FormValidator } from "./FormValidator.js";

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
  formValidators['fpopup'].resetValidation()
}

placeFormAdd.addEventListener('submit', addCard)

const handleAddCard = (item) => {
  const newCard = createCard(item)
  elementsPhotoContainer.prepend(newCard.renderCard())
}

function createCard(item) {
  const newCard = new Card(item, '#card-template', handleCardClick)
return newCard
}

function handleCardClick(name, link) {
  imageFull.src = link;
  imageFull.alt = name;
  imageTittle.textContent = name;
  openPopup(imagePopup);
}

cardsInitial.reverse().forEach(handleAddCard)

const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(validationConfig);
