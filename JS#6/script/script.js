// ------Задача 1 Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!')); 


// ------Задача 2 В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

console.log('ЗАДАЧА 2');
    let str1 = '2025-12-31';
    let strr = str1.split ('-');
console.log (strr[2] +'.' + strr[1] + '.' +strr[0]);



// ------Задача 3 Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

let str3 = 'я учу javascript!';
document.write(str3.substr(2,14));
document.write(str3.substring(2,16));
document.write(str3.slice(2,16));



// ------Задача 4 Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [ 4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for ( i=0; i  < arr.length; i++){
    sum += Math.pow(arr[i], 3)
}
document.write(Math.sqrt(sum));



// ------Задача 5 Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

console.log('ЗАДАЧА 5');
let a = 3;
    b = 5;
    c = Math.abs (a-b);
console.log(c);

let a1 = 6;
    b1 = 1;
    c1 = Math.abs (a1-b1);
console.log(c1);



// ------Задача 6 Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

console.log('Задача 6');
let date = new Date();
console.log(date.toLocaleString('ru'));

let resDate = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear();
let numbers = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
console.log(numbers + ' ' + resDate);

function addZero (num) {
    if (num <= 9) {
      return num = '0' + num;  
    } else {
        return num;
    }
}



// ----------Задача 7  Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

console.log('Задача 7')

let AB = 'aa aba abba abbba abca abea';
console.log(AB.match(/ab+a/gi));


// --------------Задача 8
console.log('Задача 8');

function tel(telPhone) {
    let phone = /^\+\d{1,3}\s\(\d{1,5}\)\s\d{5,7}$/;
    return phone.test(telPhone);
}
console.log(tel('+1 (12345) 1234567'));
console.log(tel('456 8524 6254'));



// --------------Задача 9
console.log('Задача 9');

const email = function (mail) {
    let regExp = /^[^\d]{1}[a-zA-Z_\.\d]{1,}@{1}[a-zA-z\d_]{2,11}\.[a-z]{2,11}/g;
    return regExp.test(mail);
}


// ---------------Задача 10
console.log("Задача 10");

const addres = function (url) {
    let regExp = /(https?:\/\/\d?[a-z][a-z0-9]+(?:\.?[0-9a-z]+)*\.[a-z]{2,11})(\/(?:[^#\?\s]+)+\/?)?(\?[^#]+)?(#\w+)?/g;
    let groups = regExp.exec(url);
    // console.log([...groups]);

    return [...groups].filter((elem, index) => index !== 0 ? elem : null);
}


