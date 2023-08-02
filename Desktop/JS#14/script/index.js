import "./components/App.js";
// import {header} from "./components/Header.js";
// import {nav} from "./components/Nav.js";
// import {main} from "./components/Main.js";
// import {footer} from "./components/Footer.js";

let html = document.querySelector('html');
html.setAttribute('lang', 'en');
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
let metaHttpEquivContent = document.createElement('meta');
metaHttpEquivContent.setAttribute('http-equiv', 'X-UA-Compatible');
metaHttpEquivContent.setAttribute('content', 'IE=edge');
let metaNameContent = document.createElement('meta');
metaNameContent.setAttribute('name', 'viewport');
metaNameContent.setAttribute('content', 'width=device-width, initial-scale=1.0');
let title = document.createElement('title');

title.innerHTML = 'SITE_Products';

let link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'css/style.css');

let link2 = document.createElement('link');
link2.setAttribute('rel', 'stylesheet');
link2.setAttribute('href', 'css/media.css');

document.head.append(metaUtf8, metaHttpEquivContent, metaNameContent, title, link, link2);


