const modalProfileEditButtonOpen = document.querySelector('.profile__edit-btn');
const profileNameInput = document.querySelector('.popup__item_type_name');
const profileAboutInput = document.querySelector('.popup__item_type_about');
const modalWindowForm = document.querySelector('.popup__form');
const modalAddFormButtonOpen = document.querySelector('.profile__add-btn');
const modalAddForm = document.querySelector('.popup_type_new-card');
const cardAddForm = modalAddForm.querySelector('.popup__form');
const modalAvatarEdit = document.querySelector('.popup_type_avatar-edit');
const avatarEditForm = modalAvatarEdit.querySelector('.popup__form');
const avatarEditButton = document.querySelector('.profile__avatar-edit-button');

const cardSelector = '#card-template';
const popupFigureSelector = '.popup_type_image-place';
const elementsContainerSelector = '.elements';
const profileNameSelector = '.profile__title';
const profileAboutSelector = '.profile__subtitle';
const popupCardAddSelector = '.popup_type_new-card';
const popupProfileEditSelector = '.popup_type_edit';
const popupDeleteConfirmSelector = '.popup_type_delete';
const popupAvatarEditSelector = '.popup_type_avatar-edit';
const profileAvatarSelector = '.profile__avatar';

const selectors = {
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__save-btn',
    inactiveButtonClass: '.popup__save-btn_disabled',
    inputErrorClass: '.popup__item_type_error',
    errorClass: '.popup__input-error_visible'
};

export {
    modalProfileEditButtonOpen,
    profileNameInput,
    profileAboutInput,
    modalWindowForm,
    modalAddFormButtonOpen,
    cardAddForm,
    selectors,
    cardSelector,
    popupFigureSelector,
    elementsContainerSelector,
    profileNameSelector,
    profileAboutSelector,
    popupCardAddSelector,
    popupProfileEditSelector,
    popupDeleteConfirmSelector,
    popupAvatarEditSelector,
    avatarEditForm,
    profileAvatarSelector,
    avatarEditButton
};
