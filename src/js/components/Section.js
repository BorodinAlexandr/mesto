export default class Section {
  constructor({ items, renderer }, parentSelector) {
    this._items = items;
    this._renderer = renderer;
    this._parentSelector = parentSelector;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(card) {

    this._renderer(card);
  }
}
