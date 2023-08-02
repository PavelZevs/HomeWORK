// @ts-check
import { getData } from "../utils/getApiData.js";
import ProductCart from "../components/ProductCart.js";
import { pagination } from"../utils/pagination.js";

export default class Catalog {
  constructor() {
    this.wrapper = document.createElement('div');
    this.elem = document.createElement("div");
    this.elem.classList.add("catalog");
    this.page = 1;
        this.data = [];
        this.pagination = document.createElement('div');
        this.pagination.classList.add('pagination');
  }

  async render() {
    this.elem.innerHTML = '';
        if (this.data.length === 0) {
            this.data = await getData();
        }
        let pageCount = 4;

        const [
            pageData,
            page,
            parPageCount,
            changePage,
            setPage
        ] = pagination(this.data, pageCount, this.page);
        this.page = page;
        console.log(this.data);
        pageData.map(item => {
            return new ProductCart(item);
        }).forEach(cart => {
            this.elem.append(cart.init());
        });
        this.createPagination(setPage, changePage, parPageCount);
        this.wrapper.append(this.elem, this.pagination);
  }

  createPagination(setPage, changePage, pageCount){
    this.pagination.innerHTML = '';
    let next = document.createElement('button');
    next.classList.add('next')
    next.innerHTML = `&#9658;`;
    let prev = document.createElement('button');
    prev.classList.add('prev')
    prev.innerHTML = `&#9668;`
    let pages = document.createElement('div');
    pages.classList.add('pages');
    next.addEventListener('click', () => {
        this.page = changePage(true);
        this.render();
    });
    prev.addEventListener('click', () => {
        this.page = changePage(false);
        this.render();
    });
    this.renderButtons(pages, pageCount, setPage);
    this.pagination.append(prev, pages, next);
}

renderButtons (elem, pageCount, fs){
    elem.innerHTML = '';
    [...Array(pageCount).keys()].forEach(button => {
        let btn = document.createElement('button');
        btn.innerHTML = (button + 1).toString();
        btn.addEventListener('click', () => {
            this.page = fs(button + 1);
            this.render();
        })
        btn.disabled = this.page === button + 1; 
        elem.append(btn);
    })
}

  init() {
    this.render();
    return this.wrapper;
  }
}