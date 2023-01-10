const cardsInitial = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const aboutButtonEdit = document.querySelector('.profile__edit-btn');
const aboutPopupEdit = document.querySelector('.popup_type_edit');
const aboutButtonAdd = document.querySelector('.profile__add-btn');
const aboutPopupAdd = document.querySelector('.popup_type_new-card')
const aboutButtonClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const userName = document.querySelector('.profile__title');
const userText = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__item_type_name');
const textInput = document.querySelector('.popup__item_type_about');

const popupList = Array.from(document.querySelectorAll('.popup'));
console.log(popupList);

popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (event.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
});

aboutButtonEdit.addEventListener('click', () => { //Вещаю слушатель на кнопку редактирования профиля и присваиваю функцию открытия popup редактирования профиля.
  //enableButton(buttonElement, validationConfig);
  nameInput.value = userName.textContent;
  textInput.value = userText.textContent;
  openPopup(aboutPopupEdit);
});

function openPopup(popup) { // Общая функция открытия popup с аргументом на входе popup
  popup.classList.add('popup_opened');
}

function closePopup(popup) { //Общая функция закрытия popup с аргументом на входе popup
  popup.classList.remove('popup_opened');
}
function popupClose() {
  aboutPopupEdit.classList.remove('popup_opened');
};

function handleFormSubmit(evtm) {
  evtm.preventDefault();
  userName.textContent = nameInput.value;
  userText.textContent = textInput.value;
  popupClose();
};

formElement.addEventListener('submit', handleFormSubmit);

aboutButtonAdd.addEventListener('click', () => { // Вешаю слушатель на кнопку добавления публтикации  и присваиваю функцию открытия popup.
  //disableButton(buttonElement, validationConfig);
  openPopup(aboutPopupAdd);
});
