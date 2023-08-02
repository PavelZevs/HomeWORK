// @ts-check
import ProductCart from "../components/ProductCart.js";

class Cart {
  constructor() {
    this.elem = document.createElement("div");
    this.elem.classList.add("cart");
    this.cart = [];
    this.widgetItem = document.createElement("a");
    this.widgetItem.classList.add("wrapper__cart");
    this.addToCart = this.addToCart.bind(this);
    this.widget = this.widget.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.getItemState = this.getItemState.bind(this);
    this.addCount = this.addCount.bind(this);
  }

  render() {
    if (!this.cart.length) {
      this.elem.innerHTML = `
        <h1>Корзина пуста</h1>
      `;
    } else {
      this.elem.innerHTML = "";
      this.cart
        .map(item => new ProductCart(item))
        .forEach(cartItem => this.elem.append(cartItem.init()));
    }

  }

  widget() {
    let couter = this.cart.reduce((count,item) => count += item.count, 0);
    let widgetText = document.createElement('span');
    widgetText.innerText = this.cart.reduce((count, item) => count + item.price, 0);
    this.widgetItem.setAttribute('href', '#Cart');
    this.widgetItem.innerHTML = `
    <div class="img__wrapper"><img src="../images/bucket.png" alt="cart"></div>
    <span>${couter.toString()}</span> |
    <span>${this.cart.reduce((count, item) => count + (item.price * item.count), 0)}</span>
    $`;
    return this.widgetItem;
  }

  /**
     * @param {number} id
     * @param {boolean} [mode]
     * */
  addCount(id, mode){
    if (mode){
        this.cart = this.cart.map(item => {
            if (item.id === id){
                item.count += 1;
                return item;
            }else{
                return item;
            }
        })
    }else if (mode === false){
        this.cart = this.cart.map(item => {
            if (item.id === id){
                if (item.count < 1) return item;
                item.count -= 1;
                return item;
            }else{
                return item;
            }
        })
    }
    this.widget()
    return this.cart.find(item => item.id === id)?.count; 
}

  addToCart(item) {
    if (!item) return;
    if (!this.cart.includes(item)) {
      item = {
        ...item,
        count: 1,
      }
      this.cart.push(item);
    }
    this.widget();
  }

   /**@param {number} id */
   removeItem(id) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.render();
    this.widget();
  }

  /**@param {number} id */
  getItemState(id) {
    return this.cart.some(item => item.id === id);
  }

  init() {
    this.render();
    return this.elem;
  }
}

const cart = new Cart();
const addToCart = cart.addToCart;
const widget = cart.widget();
const removeItem = cart.removeItem;
const getItemState = cart.getItemState;
const addCount = cart.addCount;

export default cart;
export { addToCart, widget, removeItem, getItemState, addCount };