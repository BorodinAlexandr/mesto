(()=>{"use strict";const e={inputSelector:".popup__text",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__text_type-error",errorClass:"popup__text-error_active"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleСloseByEscape=this._handleСloseByEscape.bind(this)}var n,r;return n=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleСloseByEscape)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleСloseByEscape)}},{key:"setEventListeners",value:function(){this._handleCloseByOverlay(),this._handleCloseByButton()}},{key:"_handleСloseByEscape",value:function(e){"Escape"===e.code&&this.close()}},{key:"_handleCloseByOverlay",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}},{key:"_handleCloseByButton",value:function(){var e=this;this.buttonClose=this._popup.querySelector(".popup__close"),this.buttonClose.addEventListener("click",(function(){e.close()}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=u(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},i.apply(this,arguments)}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function s(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}var l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(p,e);var t,n,r,u,l=(r=p,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=c(r);if(u){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function p(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=l.call(this,e)).submitButton=n._popup.querySelector(".popup__button"),n.buttonText=n.submitButton.textContent,n.form=n._popup.querySelector("form"),n.submitButton=n.form.querySelector("button"),n.handleDeleteCard=t,n}return t=p,(n=[{key:"open",value:function(e){i(c(p.prototype),"open",this).call(this),this.setDefaultText(),this.id=e._id,this.submitButton.setAttribute("data-id",this.id)}},{key:"setEventListeners",value:function(){i(c(p.prototype),"setEventListeners",this).call(this)}},{key:"formListener",value:function(e){var t=this;this.form.addEventListener("submit",(function(n){e(),t.submitButton.textContent="Удаление...",t.handleDeleteCard(n,t.id)}))}},{key:"setErrorText",value:function(){this.submitButton.textContent="Что-то пошло не так..."}},{key:"setDefaultText",value:function(){this.submitButton.textContent=this.buttonText}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),p}(n);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImageElement=t._popup.querySelector(".popup__image"),t._popupImageDescription=t._popup.querySelector(".popup__img-descr"),t}return t=u,(n=[{key:"open",value:function(e){h(b(u.prototype),"open",this).call(this),this._popupImageElement.src=e.link,this._popupImageElement.alt=e.name,this._popupImageDescription.textContent=e.name}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(n);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function C(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e)).submitButton=n._popup.querySelector(".popup__button"),n.buttonText=n.submitButton.textContent,n.submitListener=t,n.inputs=n._popup.querySelectorAll("input"),n.form=n._popup.querySelector("form"),n.inputsValue={},n}return t=u,(n=[{key:"getInputValues",value:function(){var e=this;return this.inputs.forEach((function(t){e.inputsValue[t.name]=t.value})),this.inputsValue}},{key:"setEventListeners",value:function(){g(S(u.prototype),"setEventListeners",this).call(this),this._formSubmitListener()}},{key:"_formSubmitListener",value:function(){var e=this;this.form.addEventListener("submit",(function(t){e.submitListener(t),e.submitButton.textContent="Сохранение..."}))}},{key:"close",value:function(){g(S(u.prototype),"close",this).call(this),this._resetForm()}},{key:"open",value:function(){g(S(u.prototype),"open",this).call(this),this.setDefaultText()}},{key:"_resetForm",value:function(){this.form.reset()}},{key:"setErrorText",value:function(){this.submitButton.textContent="Что-то пошло не так..."}},{key:"setDefaultText",value:function(){this.submitButton.textContent=this.buttonText}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(n);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n,r,o,i,u,a,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._src=n.link,this._alt=n.name,this.id=n._id,this.likes=n.likes,this.likesNumber=this.likes.length,this.cardOwnerId=n.owner._id,this.userId=t,this._templateSelector=r,this.handleCardClick=o,this.handleOpenPopup=i,this.handleLikeCard=u,this.handleDeleteLikeCard=a,this.handleDeleteCard=s,this.deleteCard=this.deleteCard.bind(this)}var t,n;return t=e,(n=[{key:"_updateLikesView",value:function(){this.likeCounter.textContent=this.likes.length,this._isLiked()?this._addLike():this._deleteLike()}},{key:"setLikes",value:function(e){this.likes=e,this._updateLikesView()}},{key:"_deleteLike",value:function(){this.buttonLike.classList.remove("places__like_active")}},{key:"_addLike",value:function(){this.buttonLike.classList.add("places__like_active")}},{key:"_setLike",value:function(){this.buttonLike.classList.contains("places__like_active")?this.handleDeleteLikeCard():this.handleLikeCard()}},{key:"_isLiked",value:function(){var e=this;return this.likes.some((function(t){return t._id===e.userId}))}},{key:"_addInitialLike",value:function(){this._isLiked()&&this._addLike()}},{key:"_showDeleteButton",value:function(){this.cardOwnerId===this.userId&&this.buttonDelete.classList.remove("places__delete_hidden")}},{key:"_setEventListeners",value:function(){var e=this;this.buttonLike.addEventListener("click",(function(){e._setLike()})),this.buttonDelete.addEventListener("click",(function(){e.handleOpenPopup(),e.handleDeleteCard()})),this.cardImage.addEventListener("click",(function(){e.handleCardClick()}))}},{key:"_createCard",value:function(){this.cardTemplate=document.querySelector(this._templateSelector).content,this.cardElement=this.cardTemplate.querySelector(".places__place").cloneNode(!0),this.cardElement.setAttribute(["data-id"],this.id),this.buttonLike=this.cardElement.querySelector(".places__like"),this.likeCounter=this.cardElement.querySelector(".places__like-counter"),this.buttonDelete=this.cardElement.querySelector(".places__delete"),this.cardImage=this.cardElement.querySelector(".places__img"),this.cardLike=this.cardElement.querySelector(".places__like-counter"),this.buttonLike.setAttribute(["data-id"],this.id),this.likeCounter.textContent=this.likesNumber,this.cardImage.alt=this._alt,this.cardImage.src=this._src,this.cardElement.querySelector(".places__name").textContent=this._alt,this._showDeleteButton(),this._addInitialLike()}},{key:"deleteCard",value:function(){this.cardElement.remove()}},{key:"getCard",value:function(){return this._createCard(),this._setEventListeners(),this.cardElement}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const j=P;function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const B=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this.inputSelector=this.options.inputSelector,this.submitButtonSelector=this.options.submitButtonSelector,this.inactiveButtonClass=this.options.inactiveButtonClass,this.inputErrorClass=this.options.inputErrorClass,this.errorClass=this.options.errorClass,this.form=n,this.buttonElement=this.form.querySelector(this.submitButtonSelector),this.inputList=Array.from(this.form.querySelectorAll(this.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this.form.querySelector(".".concat(e.id,"-error"));e.classList.add(this.inputErrorClass),n.textContent=t,n.classList.add(this.errorClass)}},{key:"hideInputError",value:function(e){var t=this.form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this.inputErrorClass),t.classList.remove(this.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this.hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this.inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this.inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this.buttonElement.classList.add(this.inactiveButtonClass),this.buttonElement.disabled=!0}},{key:"enableButton",value:function(){this.buttonElement.classList.remove(this.inactiveButtonClass),this.buttonElement.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this.enableButton()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this.inputList.forEach((function(t){e.hideInputError(t)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._parent=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._parent.prepend(e)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=document.querySelector(t.name),this.description=document.querySelector(t.description),this.avatar=document.querySelector(t.avatar)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,description:this.description.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.descr,r=e.avatar;t&&(this.name.textContent=t),n&&(this.description.textContent=n),r&&(this.avatar.src=r)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),R=(document.querySelectorAll(".popup"),document.querySelector(".popup_img"),document.querySelector(".popup_edit_cards").querySelector(".popup__form_add_cards")),V=(R.querySelector(".popup__text_value_title"),R.querySelector(".popup__text_value_link"),document.querySelector(".popup_edit_profile").querySelector(".popup__form_edit_profile")),A=V.querySelector(".popup__text_value_name"),U=V.querySelector(".popup__text_value_descr");function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"sendProfileInfo",value:function(e,t){var n=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"sendProfilePhoto",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"postNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=new l(".popup_delete",(function(e,t){e.preventDefault(),z.deleteCard(t).then((function(e){console.log(e),H.close()})).catch((function(e){console.log(e),H.setErrorText()}))}));H.setEventListeners();var M,z=new J({url:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"1ebb2706-9fb2-49dc-9d13-b653050d8d2b","Content-Type":"application/json"}}),$=document.querySelector(".profile__edit"),G=document.querySelector(".profile__img-hover"),K=document.querySelector(".profile__button"),Q=document.querySelector(".popup__form_add_cards"),W=document.querySelector(".popup__form_edit_profile"),X=document.querySelector(".popup__form_change-photo"),Y=new _(".popup_img");function Z(e){var t=new j(M,e,".card-template",(function(){Y.open(e)}),(function(){H.open(e)}),(function(){z.likeCard(e._id).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}),(function(){z.deleteLikeCard(e._id).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}),(function(){H.formListener(t.deleteCard)}));return t.getCard()}Y.setEventListeners(),Promise.all([z.getUserInfo(),z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M=o._id,te.setUserInfo({name:o.name,descr:o.about,avatar:o.avatar}),ee.renderItems(i)})).catch((function(e){console.log(e)}));var ee=new q({renderer:function(e){ee.addItem(Z(e))}},".places"),te=new D({name:".profile__name",description:".profile__descr",avatar:".profile__img"}),ne=new B(e,Q);ne.enableValidation();var re=new L(".popup_edit_cards",(function(e){e.preventDefault(),z.postNewCard(re.getInputValues()).then((function(e){ee.addItem(Z(e)),re.close()})).catch((function(e){console.log(e),re.setErrorText()}))}));re.setEventListeners();var oe=new L(".popup_edit_profile",(function(e){e.preventDefault();var t=oe.getInputValues();z.sendProfileInfo(t.name,t.descr).then((function(e){te.setUserInfo({name:e.name,descr:e.about}),oe.close()})).catch((function(e){console.log(e),oe.setErrorText()}))}));oe.setEventListeners();var ie=new L(".popup_edit_photo",(function(e){e.preventDefault();var t=ie.getInputValues();z.sendProfilePhoto(t.link).then((function(e){te.setUserInfo({avatar:e.avatar}),ie.close()})).catch((function(e){console.log(e),ie.setErrorText()}))}));ie.setEventListeners();var ue=new B(e,W);ue.enableValidation(),$.addEventListener("click",(function(){oe.open();var e=te.getUserInfo();A.value=e.name,U.value=e.description,ue.resetValidation()})),K.addEventListener("click",(function(){ne.resetValidation(),re.open()}));var ae=new B(e,X);ae.enableValidation(),G.addEventListener("click",(function(){ae.resetValidation(),ie.open()}))})();