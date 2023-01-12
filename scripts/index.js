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
const formElement = document.querySelector('.popup__container');
const userName = document.querySelector('.profile__title');
const userText = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__item_type_name');
const textInput = document.querySelector('.popup__item_type_about');
const popupAddPlace = document.querySelector('.popup_type_new-card');
const elementsPhotoContainer = document.querySelector('.elements'); // берем всю галлерею ( там массив)
const placeFormAdd = popupAddPlace.querySelector('.popup__form'); // Добавляем елемент формы
const placeNameInput = placeFormAdd.querySelector('.popup__item_type_name'); // Добавляем input названия места
const placeLinkInput = placeFormAdd.querySelector('.popup__item_type_about'); // Добавляем input фотографии места
const template = document.querySelector('#card-template').content;
const imagePopup = document.querySelector('.popup_type_image-place'); // Popup картинки
const imageFull = imagePopup.querySelector('.popup__image-full');
const imageTittle = imagePopup.querySelector('.popup__image-tittle');

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

const createPhotos = (photoCard) => { // Функция которая генерирует HTML элемент. Затем будем добавлять его в массив галлереи в начало массива.
  const elementItem = template.querySelector('.elements__card').cloneNode(true);
  const buttonLike = elementItem.querySelector('.elements__like-btn');
  const elementImage = elementItem.querySelector('.elements__image');
  elementImage.src = photoCard.link;
  elementImage.alt = photoCard.name;
  elementItem.querySelector('.elements__title').textContent = photoCard.name;
  elementItem.querySelector('.elements__delete-btn').addEventListener('click', () => { // Удаление публикации
    elementItem.remove();
  });

  buttonLike.addEventListener('click', () => { // Реализация лайка
    event.target.classList.toggle('elements__like-btn_active');
  });

  elementImage.addEventListener('click', () => { // ПРОСМОТР КАРТИНКИ. Вешаю слушатель на картинку и присваиваю функцию открытия popup
    imageFull.src = photoCard.link;
    imageFull.alt = photoCard.name;
    imageTittle.textContent = photoCard.name;
    openPopup(imagePopup);
  });

  return elementItem;
}

const renderPlace = (photoCard) => { //Вставляем новые карточки перед старыми
  elementsPhotoContainer.prepend(createPhotos(photoCard));
}

const addPlace = (event) => { //Функция добавления публикации
  event.preventDefault(); //Запрещаем выполнение события по умолчанию, чтобы при отправе страница не перезагружалась
  const photoCard = {}; // Создаем объект
  photoCard.name = placeNameInput.value; // Присваиваем для name объекта значение из инпута name;
  photoCard.link = placeLinkInput.value; // Присваиваем для link объеата значение из инпута link.
  renderPlace(photoCard);
  disableButton(buttonElement, validationConfig); // после добавления карточки, дизейблим кнопку.
  closePopup(popupAddPlace); // Закрываем Popup
  placeNameInput.value = ''; // Сбрасываем введенные значения
  placeLinkInput.value = ''; // Сбрасываем введенные значения
}

const placeCard = cardsInitial.map(photoCard => { // Проходимся по массиву карточек и выводим результат в новый отдельный массив.
  return createPhotos(photoCard);
});

elementsPhotoContainer.append(...placeCard);
placeFormAdd.addEventListener('submit', addPlace); //Вешаем обработчик события на форму добавления новой карточки. При нажатии на Создать, выполнятся функция addPlace
