export default class UserInfo {
  constructor(data) {
    this.name = document.querySelector(data.name);
    this.description = document.querySelector(data.description);
    this.popupProfile = document.querySelector('.popup_edit_profile');
    this.formElement = this.popupProfile.querySelector('.popup__form_edit_profile');
    this._nameInput = this.formElement.querySelector('.popup__text_value_name');
    this._descriptionInput = this.formElement.querySelector('.popup__text_value_descr');
  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      description: this.description.textContent,
    };
  }

  setUserInfo() {
    this.name.textContent = this._nameInput.value;
    this.description.textContent = this._descriptionInput.value;
  }
}
