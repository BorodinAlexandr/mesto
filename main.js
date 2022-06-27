(()=>{"use strict";const e={inputSelector:".popup__text",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__text_type-error",errorClass:"popup__text-error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleСloseByEscape=this._handleСloseByEscape.bind(this)}var n,r;return n=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleСloseByEscape)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleСloseByEscape)}},{key:"setEventListeners",value:function(){this._handleCloseByOverlay(),this._handleCloseByButton()}},{key:"_handleСloseByEscape",value:function(e){"Escape"===e.code&&this.close()}},{key:"_handleCloseByOverlay",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}},{key:"_handleCloseByButton",value:function(){var e=this;this.buttonClose=this._popup.querySelector(".popup__close"),this.buttonClose.addEventListener("click",(function(){e.close()}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},i.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(p,e);var t,n,r,c,l=(r=p,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(r);if(c){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function p(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=l.call(this,e)).handleDeleteCard=t,n.form=n._popup.querySelector("form"),n.submitButton=n.form.querySelector("button"),n}return t=p,(n=[{key:"open",value:function(e){i(u(p.prototype),"open",this).call(this);var t=e.target.getAttribute("data-id");this.submitButton.setAttribute("data-id",t)}},{key:"setEventListeners",value:function(){i(u(p.prototype),"setEventListeners",this).call(this),this.deleteCard()}},{key:"deleteCard",value:function(){var e=this;this.form.addEventListener("submit",(function(t){e.handleDeleteCard(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupImageElement=t._popup.querySelector(".popup__image"),t._popupImageDescription=t._popup.querySelector(".popup__img-descr"),t}return t=c,(n=[{key:"open",value:function(e){d(m(c.prototype),"open",this).call(this),this._popupImageElement.src=e.target.src,this._popupImageElement.alt=e.target.alt,this._popupImageDescription.textContent=this._popupImageElement.alt}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(n);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e)).submitButton=n._popup.querySelector(".popup__button"),n.buttonText=n.submitButton.textContent,n.submitListener=t,n.inputs=n._popup.querySelectorAll("input"),n.form=n._popup.querySelector("form"),n.inputsValue={},n}return t=c,(n=[{key:"getInputValues",value:function(){var e=this;return this.inputs.forEach((function(t){e.inputsValue[t.name]=t.value})),this.inputsValue}},{key:"setEventListeners",value:function(){k(O(c.prototype),"setEventListeners",this).call(this),this._formSubmitListener()}},{key:"_formSubmitListener",value:function(){var e=this;this.form.addEventListener("submit",(function(t){e.submitListener(t),e.submitButton.textContent="Сохранение..."}))}},{key:"close",value:function(){k(O(c.prototype),"close",this).call(this),this._resetForm()}},{key:"open",value:function(){k(O(c.prototype),"open",this).call(this),this.submitButton.textContent=this.buttonText}},{key:"_resetForm",value:function(){this.form.reset()}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(n);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const P=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._src=t.link,this._alt=t.name,this.id=t._id,this._templateSelector=n,this.handleCardClick=r,this.handleOpenPopup=o,this.handleLikeCard=i}var t,n;return t=e,(n=[{key:"_likeCard",value:function(){this.buttonLike.classList.toggle("places__like_active")}},{key:"_deleteCard",value:function(){this.buttonDelete.closest(".places__place").remove()}},{key:"_setEventListeners",value:function(){var e=this;this.buttonLike.addEventListener("click",(function(t){e._likeCard(t),e.handleLikeCard(t)})),this.buttonDelete.addEventListener("click",(function(t){e.handleOpenPopup(t)})),this.cardImage.addEventListener("click",(function(t){e.handleCardClick(t)}))}},{key:"_createCard",value:function(){this.cardTemplate=document.querySelector(this._templateSelector).content,this.cardElement=this.cardTemplate.querySelector(".places__place").cloneNode(!0),this.buttonLike=this.cardElement.querySelector(".places__like"),this.buttonDelete=this.cardElement.querySelector(".places__delete"),this.cardImage=this.cardElement.querySelector(".places__img"),this.cardLike=this.cardElement.querySelector(".places__like-counter"),this.buttonDelete.setAttribute(["data-id"],this.id),this.buttonLike.setAttribute(["data-id"],this.id),this.cardImage.alt=this._alt,this.cardImage.src=this._src,this.cardElement.querySelector(".places__name").textContent=this._alt}},{key:"getCard",value:function(){return this._createCard(),this._setEventListeners(),this.cardElement}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this.inputSelector=this.options.inputSelector,this.submitButtonSelector=this.options.submitButtonSelector,this.inactiveButtonClass=this.options.inactiveButtonClass,this.inputErrorClass=this.options.inputErrorClass,this.errorClass=this.options.errorClass,this.formSelector=n,this.formElement=document.querySelector(this.formSelector),this.buttonElement=this.formElement.querySelector(this.submitButtonSelector),this.inputList=Array.from(this.formElement.querySelectorAll(this.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this.formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this.inputErrorClass),n.textContent=t,n.classList.add(this.errorClass)}},{key:"hideInputError",value:function(e){var t=this.formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this.inputErrorClass),t.classList.remove(this.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this.hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this.inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this.formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this.inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this.buttonElement.classList.add(this.inactiveButtonClass),this.buttonElement.disabled=!0}},{key:"enableButton",value:function(){this.buttonElement.classList.remove(this.inactiveButtonClass),this.buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this.enableButton()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this.inputList.forEach((function(t){e.hideInputError(t)}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._parent=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"prependItem",value:function(e){this._parent.prepend(e)}},{key:"addItem",value:function(e){this._renderer(e)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=document.querySelector(t.name),this.description=document.querySelector(t.description),this.avatar=document.querySelector(t.avatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,description:this.description.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.descr,r=e.avatar;t&&(this.name.textContent=t),n&&(this.description.textContent=n),r&&(this.avatar.src=r)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=(document.querySelectorAll(".popup"),document.querySelector(".popup_img"),document.querySelector(".popup_edit_cards").querySelector(".popup__form_add_cards")),D=(T.querySelector(".popup__text_value_title"),T.querySelector(".popup__text_value_link"),document.querySelector(".popup_edit_profile").querySelector(".popup__form_edit_profile")),V=D.querySelector(".popup__text_value_name"),A=D.querySelector(".popup__text_value_descr");function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"sendProfileInfo",value:function(e,t){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"sendProfilePhoto",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"postNewCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?(console.log(e),e.json()):Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"likeCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),J=new l(".popup__delete",(function(e){e.preventDefault();var t=document.querySelector(".popup__delete .popup__button").getAttribute("data-id");z.deleteCard(t),document.querySelector('button[data-id="'.concat(t,'"]')).closest(".places__place").remove(),J.close()}));J.setEventListeners();var z=new N({url:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"1ebb2706-9fb2-49dc-9d13-b653050d8d2b","Content-Type":"application/json"}}),F=document.querySelector(".profile__edit"),H=document.querySelector(".profile__img_hover"),M=document.querySelector(".profile__button"),G=new b(".popup_img");G.setEventListeners();var K=new B({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){K.prependItem(new P(e,".card-template",(function(e){G.open(e)}),(function(e){J.open(e)}),(function(e){var t=e.target,n=t.getAttribute("data-id");t.classList.contains("places__like_active")?z.likeCard(n).then((function(e){t.nextElementSibling.textContent=e.likes.length})):z.deleteLikeCard(n).then((function(e){t.nextElementSibling.textContent=e.likes.length}))})).getCard())}},".places"),Q=new R({name:".profile__name",description:".profile__descr",avatar:".profile__img"}),W=new q(e,".popup__form_add_cards");W.enableValidation();var X=new j(".popup_edit_cards",(function(e){e.preventDefault();var t=X.getInputValues();K.addItem(t),z.postNewCard(X.getInputValues()).then((function(e){document.querySelector(".places__like").setAttribute("data-id",e._id),document.querySelector(".places__delete").setAttribute("data-id",e._id)})),X.close()}));X.setEventListeners();var Y=new j(".popup_edit_profile",(function(e){e.preventDefault();var t=Y.getInputValues();z.sendProfileInfo(t.name,t.descr),Q.setUserInfo({name:t.name,descr:t.descr}),Y.close()}));Y.setEventListeners();var Z=new j(".popup_edit_photo",(function(e){e.preventDefault();var t=Z.getInputValues();console.log(t),z.sendProfilePhoto(t.link),Q.setUserInfo({avatar:t.link}),Z.close()}));Z.setEventListeners();var $=new q(e,".popup__form_edit_profile");$.enableValidation(),F.addEventListener("click",(function(){Y.open();var e=Q.getUserInfo();V.value=e.name,A.value=e.description,$.resetValidation()})),M.addEventListener("click",(function(){W.resetValidation(),X.open()}));var ee=new q(e,".popup__form_change-photo");ee.enableValidation(),H.addEventListener("click",(function(){ee.resetValidation(),Z.open()})),z.getUserInfo().then((function(e){console.log(e),Q.setUserInfo({name:e.name,descr:e.about,avatar:e.avatar})})),z.getInitialCards().then((function(e){e.forEach((function(e){K.addItem(e),"d968ca5e3c22cb5f2b0c5cec"!=e.owner._id&&document.querySelector(".places__delete").classList.add("places__delete_hidden"),e.likes.forEach((function(e){"d968ca5e3c22cb5f2b0c5cec"==e._id&&document.querySelector(".places__like").classList.add("places__like_active")})),document.querySelector(".places__like-counter").textContent=e.likes.length}))}))})();