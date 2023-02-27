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

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: '.popup__save-btn_disabled',
    inputErrorClass: '.popup__item_type_error',
    errorClass: '.popup__error_visible'
};

const aboutButtonEdit = document.querySelector('.profile__edit-btn');
const aboutPopupEdit = document.querySelector('.popup_type_edit');
const aboutButtonAdd = document.querySelector('.profile__add-btn');
const aboutPopupAdd = document.querySelector('.popup_type_new-card');
const popupEditProfile = document.querySelector('.popup__container');
const userName = document.querySelector('.profile__title');
const userText = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__item_type_name');
const textInput = document.querySelector('.popup__item_type_about');
const popupAddPlace = document.querySelector('.popup_type_new-card');
const elementsPhotoContainer = document.querySelector('.elements');
const popupEditPlace = document.querySelector('.popup_type_edit');
const placeFormEdit = popupEditPlace.querySelector('.popup__form')
const placeFormAdd = popupAddPlace.querySelector('.popup__form');
const placeNameInput = placeFormAdd.querySelector('.popup__item_type_name');
const placeLinkInput = placeFormAdd.querySelector('.popup__item_type_about');
const template = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_image-place');
const imageFull = imagePopup.querySelector('.popup__image-full');
const imageTittle = imagePopup.querySelector('.popup__image-tittle');
const popupList = Array.from(document.querySelectorAll('.popup'));
const buttonClosePopupEdit = aboutPopupEdit.querySelector('.popup__close');
const buttonClosePopupAdd = aboutPopupAdd.querySelector('.popup__close');
const buttonCloseImagePopup = imagePopup.querySelector('.popup__close');
const buttonElement = document.querySelector('.popup__save-btn');
const buttonElementAdd = aboutPopupAdd.querySelector('.popup__save-btn');

export {
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
    buttonClosePopupEdit,
    buttonClosePopupAdd,
    buttonCloseImagePopup,
    buttonElement,
    buttonElementAdd,
    validationConfig,
};