// index.js

import '../pages/index.css'; // добавьте импорт главного файла стилей

import { FormValidator } from "../components/FormValidator.js";

import {
  cardsInitial,
  aboutButtonEdit,
  aboutButtonAdd,
  nameInput,
  textInput,
  validationConfig
} from "../utils/constans.js";

import PopupWithImage from '../components/PopupWithImage.js'

const popupFigure = new PopupWithImage('.popup_type_image-place')

popupFigure.setEventListeners()

import { Card } from "../components/Card.js";

import Section from '../components/Section.js'

function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: _ => {
      popupFigure.open(item)
    }
  }, '#card-template')
  const cardElement = card.renderCard()
  return cardElement
}

const cardList = new Section({
  items: cardsInitial,
  render: (item) => {
    cardList.addItem(createCard(item))
  }
}, '.elements')

cardList.render()

import UserInfo from '../components/UserInfo.js'

const userInfo = new UserInfo({ name: '.profile__title', info: '.profile__subtitle' })

userInfo.getUserInfo()

import PopupWithForm from '../components/PopupWithForm.js'

const popupFormCardAdd = new PopupWithForm('.popup_type_new-card', newValues => {
  cardList.addItem(createCard(newValues))
})

popupFormCardAdd.setEventListeners()

aboutButtonAdd.addEventListener('click', _ => {
  popupFormCardAdd.open()
  FormValidator['fpopup'].resetValidation()
})

const popupFormProfilEdit = new PopupWithForm('.popup_type_edit', _ => {
  userInfo.setUserInfo(nameInput, textInput)
})

popupFormProfilEdit.setEventListeners()

aboutButtonEdit.addEventListener('click', _ => {
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name
  textInput.value = userData.info
  popupFormProfilEdit.open()
})


// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

    // вот тут в объект записываем под именем формы
    FormValidator[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);
