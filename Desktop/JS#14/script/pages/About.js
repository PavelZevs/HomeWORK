export default class About {
    constructor() {
        this.elem = document.createElement('div');
    }

    render() {
        this.elem.classList.add('about');
        this.elem.innerHTML = `
        <div class='_About_'>
         <h2>About</h2>
          <p>При отборе брендов мы ориентируемся на вещи средней ценовой категории.  В разделе обувь вы найдете оригинальные New Balance от 4 до 10 тысяч рублей, ботинки Timberland за 12-15 тысяч и UGG по 8-12 тысяч. 
             Наш бизнес устроен так, чтобы предложить покупателям низкие цены в сочетании с короткими сроками доставки.</p>
        </div>
        `;
    }

    init() {
        this.render();
        return this.elem;
    }

}