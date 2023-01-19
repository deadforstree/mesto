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
console.log(buttonClosePopupEdit, buttonClosePopupAdd, buttonCloseImagePopup);

popupList.forEach((popup) => {
  popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup__close')) {
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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closeEditProfilePopup() {
  closePopup(aboutPopupEdit);
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

const createPhotos = (photoCard) => {
  const elementItem = template.querySelector('.elements__card').cloneNode(true);
  const buttonLike = elementItem.querySelector('.elements__like-btn');
  const elementImage = elementItem.querySelector('.elements__image');
  elementImage.src = photoCard.link;
  elementImage.alt = photoCard.name;
  elementItem.querySelector('.elements__title').textContent = photoCard.name;
  elementItem.querySelector('.elements__delete-btn').addEventListener('click', () => {
    elementItem.remove();
  });

  buttonLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-btn_active');
  });

  elementImage.addEventListener('click', () => {
    imageFull.src = photoCard.link;
    imageFull.alt = photoCard.name;
    imageTittle.textContent = photoCard.name;
    openPopup(imagePopup);
  });

  return elementItem;
}

const renderPlace = (photoCard) => {
  elementsPhotoContainer.prepend(createPhotos(photoCard));
}

const addPlace = (event) => {
  event.preventDefault();
  const photoCard = {};
  photoCard.name = placeNameInput.value;
  photoCard.link = placeLinkInput.value;
  renderPlace(photoCard);
  closePopup(popupAddPlace);
  placeFormAdd.reset();
};

const initialCards = cardsInitial.map(photoCard => {
  return createPhotos(photoCard);
});

elementsPhotoContainer.append(...initialCards);
placeFormAdd.addEventListener('submit', addPlace);
