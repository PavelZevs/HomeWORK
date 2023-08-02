import { widget } from "../pages/Cart.js";


class Nav {
  create() {
    this.element = document.createElement("nav");
    this.element.className = "nav";
  }

  render() {
    this.element.innerHTML = `
        <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Catalog">Catalog</a></li>
            <li><a href="#About">About</a></li>
        </ul>
        `;

        this.cart = document.createElement('div');
        this.cart.classList.add('cart1');
        this.cart.append(widget);
        this.element.append(this.cart)
  }

  init() {
    this.create();
    this.render();
    return this.element;
  }
}

const nav = new Nav().init();
export default nav;


