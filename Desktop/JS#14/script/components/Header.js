import nav from "./Nav.js"

class Header {
    create() {
        this.element = document.createElement('header');
        this.element.className = 'header';
    }

    render() {
        this.element.innerHTML = `
        <div class= "logo">
        <a href='#'><img src="https://via.placeholder.com/50" alt="logo" /></a>
        </div>
    `;
    this.element.append(nav);
    }

    init(){
        this.create();
        this.render();
        return this.element;
    }
}
const header = new Header().init();
export {header};