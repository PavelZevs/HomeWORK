// --------------------------------------HOMEWORK 8

let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let title = document.createElement('title');
title.innerHTML = 'Homework _JS#8';
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'Utf-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

//--------------------------------------HEADER-------------------------------------------------
let header = document.createElement('header');
header.classList.add('head');

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose your option';

let p1 = document.createElement('p1');
p1.innerHTML = 'But i must explain to you how  all this mistaken idea of denouncing';

header.appendChild(h1);
header.appendChild(p1);

document.body.appendChild(header);

h1.style.fontFamily = 'Arvo';
h1.style.fontSize = '36px';
h1.style.fontWeight = '400';
h1.style.lineHeight = '48px';
h1.style.display = 'flex';
h1.style.justifyContent = 'space-around';
h1.style.fontWeight = '400';
h1.style.color = '#212121';
h1.style.marginTop = '122px';

p1.style.fontFamily = 'OpenSans';
p1.style.fontSize = '14px';
p1.style.display = 'flex';
p1.style.justifyContent = 'space-around';
p1.style.color = '#9fa3a7';
p1.style.marginBottom = '55px';
p1.style.marginTop = '10px';

// ----------------------------------------Container-----------------------------------------
let div1 = document.createElement('div1');
div1.classList.add('container');

div1.style.display = 'flex';
div1.style.justifyContent = 'center';
div1.style.marginBottom = '139px';
// ----------------------------------------BLOCK-1 ------------------------------------------

let div2 = document.createElement('div2');
div2.classList.add('block-left');

div2.style.padding = '82px 95px 75px';
div2.style.display = 'flex';
div2.style.width = '400px';
div2.style.height = '480px';
div2.style.alignItems = 'center';
div2.style.justifyContent = 'flex-end';
div2.style.border = '1px solid #E8E9ED';
div2.style.flexDirection = 'column';

let p1_1 = document.createElement('p1_1');
p1_1.innerHTML = 'FREELANCER';

p1_1.style.fontFamily = 'Montserrat';
p1_1.style.fontWeight = '700';
p1_1.style.fontSize = '12px';
p1_1.style.lineHeight = '15px';
p1_1.style.color = '#9FA3A7';


let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to ';

h2.style.width = '210px';
h2.style.textAlign = 'center';
h2.style.fontFamily = 'Arvo';
h2.style.fontWeight = '400';
h2.style.fontSize = '36px';
h2.style.lineHeight = '46px';
h2.style.color = '#212121';

let p1_2 = document.createElement('p');
p1_2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p1_2.style.width = '210px';
p1_2.style.textAlign = 'center';
p1_2.style.fontFamily = 'OpenSans';
p1_2.style.fontSize = '12px';
p1_2.style.lineHeight = '22px';
p1_2.style.color = '#9FA3A7';

let button1 = document.createElement('button');
button1.innerHTML = 'START HERE';

button1.style.width = '147px';
button1.style.height = '46px';
button1.style.background = '#fff';
button1.style.border = '3px solid #FFC80A';
button1.style.borderRadius = '30px';
button1.style.fontFamily = 'Montserrat';
button1.style.fontWeight = '700';
button1.style.fontSize = '12px';
button1.style.color = '#212121';
button1.style.lineHeight = '15px';
button1.style.margin = '64.5px 0';
button1.style.letterSpacing = '2.4px';

div2.appendChild(p1_1);
div2.appendChild(h2);
div2.appendChild(p1_2);
div2.appendChild(button1);

// // ----------------------------------------BLOCK-2 -------------------------------
let div3 = document.createElement('div');
div3.classList.add('block-right');

div3.style.padding = '82px 95px 75px';
div3.style.backgroundColor = '#8F75BE';
div3.style.width = '400px';
div3.style.height = '480px';
div3.style.display = 'flex';
div3.style.flexDirection = 'column';
div3.style.alignItems = 'center';
div3.style.justifyContent = 'flex-end';

let p2_1 = document.createElement('p');
p2_1.innerHTML = 'STUDIO';

p2_1.style.fontFamily = 'Montserrat';
p2_1.style.fontWeight = '700';
p2_1.style.fontSize = '12px';
p2_1.style.lineHeight = '15px';
p2_1.style.color = '#FFC80A';

let h2_1 = document.createElement('h2');
h2_1.innerHTML = 'Initially designed to ';

h2_1.style.width = '210px';
h2_1.style.textAlign = 'center';
h2_1.style.fontFamily = 'Arvo';
h2_1.style.fontWeight = '400';
h2_1.style.fontSize = '36px';
h2_1.style.lineHeight = '46px';
h2_1.style.color = '#FFF';

let p2_2 = document.createElement('p');
p2_2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';

p2_2.style.width = '210px';
p2_2.style.textAlign = 'center';
p2_2.style.fontFamily = 'OpenSans';
p2_2.style.fontSize = '12px';
p2_2.style.lineHeight = '22px';
p2_2.style.color = '#FFF';

let button2 = document.createElement('button');
button2.innerHTML = 'START HERE';

button2.style.width = '147px';
button2.style.height = '46px';
button2.style.background = '#8F75BE';
button2.style.border = '3px solid #FFC80A';
button2.style.borderRadius = '30px';
button2.style.fontFamily = 'Montserrat';
button2.style.fontWeight = '700';
button2.style.fontSize = '12px';
button2.style.lineHeight = '15px';
button2.style.color = '#FFF';
button2.style.margin = '64.5px 0';
button2.style.letterSpacing = '2.4px';

div3.appendChild(p2_1);
div3.appendChild(h2_1);
div3.appendChild(p2_2);
div3.appendChild(button2);

div1.appendChild(div2);
div1.appendChild(div3);

document.body.appendChild(div1);