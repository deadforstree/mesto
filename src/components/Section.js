export default class Section {
    constructor({ items, render }, containerSelector) {
        this._items = items
        this._renderer = render
        this._container = document.querySelector(containerSelector)
    }

    render() {
        this._items.reverse().forEach(item => {
            this._renderer(item)
        })
    }

    addItem(element) {
        this._container.prepend(element)
    }
}
