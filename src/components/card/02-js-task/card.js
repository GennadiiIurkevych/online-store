export default class Card {
  constructor (someProduct = {}) {
    this.state = someProduct;
    this.myRender();
  }

  getTemplate () {
    const result =  `
      <div class="block" data-element="body">
        <div>
          <img class="image" src="${this.state.images[0]}" alt="Note">
        </div>
        <div class="price">
          <p class="raiting">
            ${this.state.rating} <img class="star" src="Star.png">
          </p>
          <p class="cost">
            ${this.state.price}
          </p>
        </div>
          <p class="text">
            ${this.state.title}
          </p>
          <p> ${this.state.category}</p>
        <div>
          <button class="buttons">
            <a href="#">ADD TO CART</a>
          </button>
        </div>
      </div>
    `;

    return result
  }

  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplate();
  }

  myRender () {
    const wrapper = document.createElement('div');

    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper.firstElementChild;
  }
}
