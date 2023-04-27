console.log('Задача 1');
console.log('');

let name = prompt('Меня зовут', 'Павел');
console.log (name);
let age = prompt('Ваш возраст', 23);
console.log (age);
let city = prompt('Я проживаю в городе', 'Минске');
console.log (city);
let phone = prompt('Ваш телефон','+375447191651');
console.log (phone);
let email = prompt('Ваша Почта', 'pasha186186@gmail.com');
console.log (email);
let company = prompt('В какой Компании вы работаете?' , 'школа');
console.log (company);

console.log('');

console.log('Задача 2');
console.log('');

let year = prompt('Ваш возраст', '23');
if(year != age)console.log('Неверный возраст');
if(year == age)console.log('Павел родился в 2000 году');


console.log('');

console.log('Задача 3');
console.log('');
let number = prompt('Введите сумму чисел 1, 2, 3');
let numbe = 1+2+3;
let numb = 4+5+6;
if(numbe == numb){
    console.log ('Да');
} else{
    console.log ('Нет');
}
console.log('');


console.log('Задача 4');
console.log('');
let a = prompt ('Введите значение 1, 0, -3')
if(a > 0) {
    console.log ('Верно');
} else {
    console.log('Неверно');
}


a = 1;
if(a > 0) {
    console.log ('Верно');
} else {
    console.log('Неверно');
}

a = -3;
if(a > 0) {
    console.log ('Верно');
} else {
    console.log('Неверно');
}
console.log('');


console.log('Задача 5');
console.log('');

let a1 = 10;
let b = 2;
let sum = a1 + b;
let sub = a1 - b;
let mult = a1 * b;
let div = a1 / b;

console.log('Сумма:' + sum);
console.log('Разность:' + sub);
console.log('Произведение:' + mult);
console.log('Частное:' + div);
if (sum > 1){
    console.log('Сумма в квадрате', sum ** 2);
}
console.log('');



console.log('Задача 6');
console.log('');
if((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

console.log('');


console.log('Задача 7');
console.log('');

let n = prompt('Введите число от 0 до 59');
if (n >=0 && n <= 14){
    console.log('Первая');
} else if (n >= 15 && n<= 29) {
    console.log('Вторая'); 
} else if (n >= 30 && n<= 44) {
    console.log('Третья'); 
} else if (n >= 15 && n<=29) {
console.log('Четвертая'); 
} else {
    console.log('Неверное значение n');
  }
 console.log('');


 console.log('Задача 8');
 console.log('');

 let day = prompt('Введите число от 1 до 31');

 if (day >= 0 && n <= 10) {
   console.log('Первая');
 } else if (n >= 11 && n <= 20) {
   console.log('Вторая');
 } else if (n >= 21 && n <= 31) {
   console.log('Третья');
 } else {
   console.log('Неверное значение day');
 }

 console.log('');




console.log('Задача 9');
console.log('');

let dayS = Number(prompt(" Введите число "));

let years = dayS / 365,
    months = dayS / 31,
    weeks = dayS / 7,
    hours = dayS * 24,
    minutes = dayS * 24 * 60,
    seconds = dayS * 24 * 60 * 60;

if (years < 1) {
    console.log(" Меньше года");
} else {
    console.log(" Количество лет - " + years);
}

if (months < 1) {
    console.log(" Меньше месяца");
} else {
    console.log(" Количество месяцев - " + months);
}

if (weeks < 1) {
    console.log(" Меньше недели");
} else {
    console.log("Количество недель - " + weeks);
}

console.log("Количество часов - " + hours);
console.log("Количество минут - " + minutes);
console.log("Количество секунд - " + seconds);




// conscole.log{'Задача 10'};
// conscole.log{''};

let days = +prompt(); {

}
if (days < 0 || days > 365) {
    console.log('Неверно введенный день');
} else {

    let mont =200;
    let season = '';


    if (days < 31) {
        mont = 1;
    } else if (mont <= 59) {
        mont = 2;

    } else if (days <= 90) {
        mont = 3;
    }
    else if (days <= 120) {
        mont = 4;
    }
    else if (days <= 151) {
        mont = 5;
    }
    else if (days <= 181) {
        mont = 6;
    }
    else if (days <= 212) {
        mont = 7;
    }
    else if (days <= 243) {
        mont = 8;
    }
    else if (days <= 273) {
        mont = 9;
    }
    else if (days <= 304) {
        mont = 10;
    }
    else if (days <= 334) {
        mont = 11;
    }
    else {
        mont = 12;
    }


    switch (mont) {
        case 12:
        case 1:
        case 2:
            season = 'Зима';
            break;
        case 3:
        case 4:
        case 5:
            season = 'Весна';
            break;
        case 6:
        case 7:
        case 8:
            season = 'Лето';
            break;
        case 9:
        case 10:
        case 11:
            season = 'Осень';


    }
    console.log(mont + ' - месяц');
    console.log(season + ' - пора года');
}

