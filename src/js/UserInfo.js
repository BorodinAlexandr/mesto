import { nameInput, descriptionInput } from './utilities/utilities';

export default class UserInfo {
  constructor(data) {
    this.nameSelector = data.name;
    this.descriptionSelector = data.description;
    this._nameInput = nameInput;
    this._descriptionInput = descriptionInput;
  }

  getUserInfo() {
    return {
      name: this.nameSelector.textContent,
      description: this.descriptionSelector.textContent,
    };
  }

  setUserInfo() {
    this.nameSelector.textContent = this._nameInput.value;
    this.descriptionSelector.textContent = this._descriptionInput.value;
  }
}
