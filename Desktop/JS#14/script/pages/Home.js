export default class Home {
  constructor() {
    this.elem = document.createElement("div");
  }

  render() {
    this.elem.classList.add("home");
    this.elem.innerHTML = `
        <div class="Home">
           <div class="block_home">
                 <h2>Summer sale</h2>
                <p>Увеличиваем скидки и расширяем ассортимент! До -50% на выбранные модели коллекции и до -70% на весенне-летние коллекции выделенных брендов уже доступны в каталоге</p>
                <button class='learn_more'>Узнать больше</button>
            </div>
            
        </div>
        
        `;
  }

  init() {
    this.render();
    return this.elem;
  }
}
