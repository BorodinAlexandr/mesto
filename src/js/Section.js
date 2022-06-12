import {
  titleInput,
  linkInput,
} from './utilities/utilities';

export default class Section {
  constructor({ items, renderer }, parentSelector) {
    this._items = items;
    this._renderer = renderer;
    this._parentSelector = parentSelector;
    this._titleInput = titleInput;
    this._linkInput = linkInput;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem() {
    const card = {
      name: this._titleInput.value,
      link: this._linkInput.value,
    };

    this._renderer(card);
  }
}
