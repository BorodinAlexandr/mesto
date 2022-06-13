export default class Section {
  constructor({ items, renderer }, parentSelector) {
    this._items = items;
    this._renderer = renderer;
    this._parentSelector = document.querySelector(parentSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  prependItem(card) {
    this._parentSelector.prepend(card);
  }

  addItem(card) {
    this._renderer(card);
  }
}
