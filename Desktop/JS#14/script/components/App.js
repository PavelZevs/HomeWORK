import {header} from './Header.js';
import {main} from "./Main.js";
import {footer} from "./Footer.js";

class App {
    create() {
        this.element = document.createElement('div');
        this.element.className = 'app';
    }

    render(){
        const body = document.querySelector('body');
        const headerElement = header;
        const mainElement = main;
        const footerElement = footer;

       
        this.element.appendChild(headerElement);
        this.element.appendChild(mainElement);
        this.element.appendChild(footerElement);
        body.appendChild(this.element);
    }

    init(){
        this.create();
        this.render();
    }
}

export default new App().init();