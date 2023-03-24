(()=>{"use strict";var e=document.querySelector(".profile__edit-btn"),t=document.querySelector(".popup__item_type_name"),n=document.querySelector(".popup__item_type_about"),r=document.querySelector(".popup__form"),o=document.querySelector(".profile__add-btn"),i=document.querySelector(".popup_type_new-card").querySelector(".popup__form"),u=document.querySelector(".popup_type_avatar-edit").querySelector(".popup__form"),a=document.querySelector(".profile__avatar-edit-button"),l={inputSelector:".popup__item",submitButtonSelector:".popup__save-btn",inactiveButtonClass:".popup__save-btn_disabled",inputErrorClass:".popup__item_type_error",errorClass:".popup__input-error_visible"};function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this.disableSubmitButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"_setIventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"removeErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"enableValidation",value:function(){this._setIventListeners()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,u=t.handleLikeClick,a=t.handleConfirmDelete;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=o.name,this._link=o.link,this._likes=o.likes,this._handleCardClick=i,this._handleLikeClick=u,this._handleConfirmDelete=a,this._cardSelector=n,this._id=o._id,this._ownerId=o.owner._id,this._userId=r}var t,n;return t=e,(n=[{key:"_getCardTemplate",value:function(){this._view=document.querySelector(this._cardSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"renderCard",value:function(){var e=this;return this._getCardTemplate(),this._cardImage=this._view.querySelector(".elements__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._setEventListeners(),this._elementTittle.textContent=this._name,this._elementLikes.textContent=this._likes.length,this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._likes.find((function(t){return e._userId===t._id}))&&this._likeButton.classList.add("elements__like-btn_active"),this._view}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton=this._view.querySelector(".elements__like-btn"),this._deleteButton=this._view.querySelector(".elements__delete-btn"),this._elementTittle=this._view.querySelector(".elements__title"),this._elementLikes=this._view.querySelector(".elements__like-count"),this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._deleteButton.addEventListener("click",(function(){e._handleConfirmDelete()})),this._cardImage.addEventListener("click",(function(){e._handleCardClick({name:e._name,src:e._link})}))}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._elementLikes.textContent=this._likes.length,this._cardLikedActive="elements__like-btn_active",this.isLiked()?this._likeButton.classList.add(this._cardLikedActive):this._likeButton.classList.remove(this._cardLikedActive)}},{key:"handleRemoveCard",value:function(){this._view.closest(".elements__card").remove()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_hanldeOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(t){return e.close()})),this._popup.addEventListener("click",this._hanldeOverlayClose.bind(this))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image-full"),t._popupCaption=t._popup.querySelector(".popup__image-tittle"),t}return t=u,(n=[{key:"open",value:function(e){S(g(u.prototype),"open",this).call(this),this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupCaption.textContent=e.name}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}var O=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(t.name),this._profileInfo=document.querySelector(t.info),this._profileAvatar=document.querySelector(t.avatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userData={name:this._profileName.textContent,info:this._profileInfo.textContent},this._userData}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileInfo.textContent=e.about,this.setUserAvatar(e)}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e.avatar}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitCallback=t,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__item"),n._popupButton=n._popupForm.querySelector(".popup__save-btn"),n._popupButtonTextContent=n._popupButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._newValues={},this._inputList.forEach((function(t){e._newValues[t.name]=t.value})),this._newValues}},{key:"setEventListeners",value:function(){var e=this;T(q(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._getInputValues())}))}},{key:"close",value:function(){T(q(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._popupButtonTextContent}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfoApi",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.userName,about:e.userAbout})}).then(this._checkResponse)}},{key:"addUserCard",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"like",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislike",value:function(e){return fetch(this._url+"/cards/likes/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"delete",value:function(e){return fetch(this._url+"/cards/".concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"handleUserAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.userAvatar})}).then(this._checkResponse)}},{key:"getAllNeededData",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},F.apply(this,arguments)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(r);if(o){var n=W(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t._popupButton=t._popupForm.querySelector(".popup__save-btn"),t._popupButtonTextContent=t._popupButton.textContent,t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;F(W(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitCallback()}))}},{key:"setSubmitAction",value:function(e){this._handleSubmitCallback=e}},{key:"renderLoadingWhileDeleting",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._popupButtonTextContent}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(_);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new U({url:"https://mesto.nomoreparties.co/v1/cohort-61",headers:{authorization:"e35b94b1-baff-4190-b21b-fc912cacb94b","Content-Type":"application/json"}}),z=new f(l,r);z.enableValidation();var $=new f(l,i);$.enableValidation();var K=new P({name:".profile__title",info:".profile__subtitle",avatar:".profile__avatar"}),Q=new w(".popup_type_image-place");Q.setEventListeners();var X=new G(".popup_type_delete");X.setEventListeners();var Y=function(e){var t=new h({data:e,handleCardClick:function(t){return Q.open(e)},handleLikeClick:function(n){t.isLiked()?M.dislike(e._id).then((function(e){t.setLikes(e.likes)})).catch((function(e){return console.log(e)})):M.like(e._id).then((function(e){t.setLikes(e.likes)})).catch((function(e){return console.log(e)}))},handleConfirmDelete:function(n){X.setSubmitAction((function(n){X.renderLoadingWhileDeleting(!0),M.delete(e._id).then((function(e){t.handleRemoveCard(),X.close()})).catch((function(e){return console.log(e)})).finally((function(e){return X.renderLoadingWhileDeleting(!1)}))})),X.open()}},"#card-template",re);return t},Z=new O({renderer:function(e){var t=Y(e).renderCard();Z.addItem(t)}},".elements"),ee=new f(l,u);ee.enableValidation();var te=new A(".popup_type_avatar-edit",(function(e){te.renderLoading(!0),M.handleUserAvatar(e).then((function(e){K.setUserAvatar(e),ee.disableSubmitButton(),te.close()})).catch((function(e){return console.log(e)})).finally((function(e){return te.renderLoading(!1)}))}));te.setEventListeners(),a.addEventListener("click",(function(e){ee.removeErrors(),te.open()}));var ne=new A(".popup_type_new-card",(function(e){ne.renderLoading(!0),M.addUserCard(e).then((function(e){var t=Y(e).renderCard();Z.addItem(t),$.disableSubmitButton(),ne.close()})).catch((function(e){return console.log(e)})).finally((function(e){return ne.renderLoading(!1)}))}));ne.setEventListeners();var re,oe=new A(".popup_type_edit",(function(e){oe.renderLoading(!0),M.setUserInfoApi(e).then((function(e){K.setUserInfo(e),oe.close()})).catch((function(e){return console.log(e)})).finally((function(e){return oe.renderLoading(!1)}))}));oe.setEventListeners(),o.addEventListener("click",(function(e){$.removeErrors(),ne.open()})),e.addEventListener("click",(function(e){var r=K.getUserInfo();z.removeErrors(),t.value=r.name,n.value=r.info,z.enableSubmitButton(),oe.open()})),M.getAllNeededData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,a=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K.setUserInfo(i),re=i._id,Z.render(o)})).catch((function(e){return console.log(e)}))})();