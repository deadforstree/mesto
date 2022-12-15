const aboutButton = document.querySelector('.profile__edit-btn');
const aboutPopup = document.querySelector('.popup');
const aboutButtonClose = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const userName = document.querySelector('.profile__title');
const userText = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__item_type_name');
const textInput = document.querySelector('.popup__item_type_about');

function PopupClose() {
    aboutPopup.classList.remove('popup__opened');
};

aboutButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    aboutPopup.classList.add('popup__opened');
    nameInput.value = userName.textContent;
    textInput.value = userText.textContent;
});

aboutButtonClose.addEventListener('click', () => {
    PopupClose();
});

function handleFormSubmit(evtm) {
    evtm.preventDefault();
    userName.textContent = nameInput.value;
    userText.textContent = textInput.value;
    PopupClose();
};

formElement.addEventListener('submit', handleFormSubmit);
aboutButtonClose.addEventListener('click', () => {
    aboutPopup.classList.remove('popup__opened')
});
