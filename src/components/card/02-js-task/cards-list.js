import Card from "./card.js";

export default class CardsList {
  constructor (data = []) {
    this.data = data;
    this.render();
  }

  getTemplate () {
    return `
      <div>
        <div class="block" data-element="body">

        </div>
      </div>

    `;

  }

  render () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;

  }

  renderCards () {
    const cards = this.data.map(item => {
      const card = new Card(item);
      return card.element;
    });
    console.log('cards: ', cards);
  }
}
