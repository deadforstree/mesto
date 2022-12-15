const aboutButton = document.querySelector('.profile__edit-btn');
const aboutPopup = document.querySelector('.popup');
const aboutButtonClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let UserName = document.querySelector('.profile__title');
let UserText = document.querySelector('.profile__subtitle');
let NameInput = document.querySelector('.popup__item_type_name');
let textInput = document.querySelector('.popup__item_type_about');
const popupSubmit = document.querySelector('popup__save-btn');

aboutButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    aboutPopup.classList.add('popup_opened');
    NameInput.value = UserName.textContent;
    textInput.value = UserText.textContent;
});

aboutButtonClose.addEventListener('click', () => {
    aboutPopup.classList.remove('popup_opened')
});

function handleFormSubmit(evt) {
    evt.preventDefault();
    UserName.textContent = NameInput.value;
    UserText.textContent = textInput.value;
    aboutPopup.classList.remove('popup_opened')
};

formElement.addEventListener('submit', handleFormSubmit);
