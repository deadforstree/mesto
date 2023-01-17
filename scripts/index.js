const aboutButton = document.querySelector('.profile__edit-btn');
const aboutPopup = document.querySelector('.popup');
const aboutButtonClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const userName = document.querySelector('.profile__title');
const userText = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__item_type_name');
const textInput = document.querySelector('.popup__item_type_about');

function popupClose() {
    aboutPopup.classList.remove('popup_opened');
};

aboutButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    aboutPopup.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    textInput.value = userText.textContent;
});

aboutButtonClose.addEventListener('click', () => {
    popupClose();
});

function handleFormSubmit(evtm) {
    evtm.preventDefault();
    userName.textContent = nameInput.value;
    userText.textContent = textInput.value;
    popupClose();
};

formElement.addEventListener('submit', handleFormSubmit);