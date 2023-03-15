// index.js

import '../pages/index.css'; // добавьте импорт главного файла стилей

import { FormValidator, FormValidators } from "../components/FormValidator.js";

import {
  cardsInitial,
  aboutButtonEdit,
  profileAvatar,
  profileNameInput,
  profileAboutInput,
  aboutButtonAdd,
  nameInput,
  textInput,
  validationConfig
} from "../utils/constans.js";

import PopupWithImage from '../components/PopupWithImage.js'

const popupFigure = new PopupWithImage('.popup_type_image-place')

popupFigure.setEventListeners()

import { Card } from "../components/Card.js";

import Section from '../components/Section.js';

import Api from '../components/Api';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: 'e35b94b1-baff-4190-b21b-fc912cacb94b',
    'Content-Type': 'application/json'
  }
})

//Функция создания карточки
const createCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: _ => {
      popupFigure.open(item)
    }
  }, '#card-template')
  return card
}

const cardList = new Section({
  // items: initialCards,
  renderer: item => {
    const card = createCard(item)
    const cardElement = card.renderCard()
    cardList.addItem(cardElement)
  }
}, '.elements')

// cardList.render()

import UserInfo from '../components/UserInfo.js'

const userInfo = new UserInfo({ name: '.profile__title', info: '.profile__subtitle' })

userInfo.getUserInfo()

import PopupWithForm from '../components/PopupWithForm.js'

const popupFormCardAdd = new PopupWithForm('.popup_type_new-card', newValues => {
  api.addUserCard(newValues)
    .then((item) => {
      const card = createCard(item)
      const cardElement = card.renderCard()
      cardList.addItem(cardElement)
    })
    .catch((err) => {
      console.log(err)
    })
})

popupFormCardAdd.setEventListeners()

aboutButtonAdd.addEventListener('click', _ => {
  popupFormCardAdd.open()
  FormValidators['fpopup'].resetValidation()
})

//const popupFormProfilEdit = new PopupWithForm('.popup_type_edit', _ => {
//  const userData = userInfo.getUserInfo()
//})

const popupFormProfilEdit = new PopupWithForm('.popup_type_edit', newValues => {
  console.log(newValues)
  api.setUserInfoApi(newValues)
    .then((data) => {
      console.log(data)
      userInfo.setUserInfo(data)
    })
})

popupFormProfilEdit.setEventListeners()

aboutButtonEdit.addEventListener('click', _ => {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name
  textInput.value = userData.info
  popupFormProfilEdit.open()
})

const cards = api.getInitialCards()
cards
  .then((data) => {
    cardList.render(data)
  })
  .catch(err => {
    console.log(err)
  })

const apiInfo = api.getUserInfo()
apiInfo
  .then((data) => {
    userInfo.setUserInfo(data)
  })
  .catch((err) => {
    console.log(err)
  })

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidators(config, formElement)
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

    // вот тут в объект записываем под именем формы
    FormValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);
