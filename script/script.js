// ------------------------Homework JS#5
//----------Задача 1  Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

console.log("Задача 1");
function sub(a, b, c){
    sub = (a - b) / c;
}
sub(10,4,2);
console.log(sub);


//----------Задача 2 Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

console.log("Задача 2");
function cvadrat(k) {
    return k ** 2;
}

let message = cvadrat(2);
console.log(message);

function cub(t) {
    return t ** 3;
}

let message1 = cub(2);
console.log(message1);




//----------Задача 3 Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

console.log("Задача 3");
function min (a, b) {
    if (a < b)  {
        return a;
    } else {
        return b;
    }
}
function max (a, b) {
    if (a > b)  {
        return a;
    } else {
        return b;
    }

}

console.log(min(6,3), max(10,8));



//----------Задача 4 Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

console.log("Задача 4");
function createArrey() {
   let g = +prompt('Введите число');
   let j = +prompt('Введите число');
   let arr = []; 
   for(let i = g; i <= j; i++) {
     arr.push(i)
   }

   console.log(arr);
}
createArrey();




//---------------- Задача 5   Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

console.log("Задача 5");
function isEven(num){
   if (num % 2 === 0) {
    return true;
   } else {
    return false;
   }
}
console.log(isEven(15));
console.log(isEven(20));



//---------------- Задача 6 Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

console.log("Задача 6");

function isEven(num) {
    return num % 2 == 0;
  }
  var arr = [0,4,3,5,6,9,56,8,69];
    var newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (isEven(i)) {
        newArr.push(i);
      }
    }
    
    console.log(newArr);
    
  
//------------ Задача 7 Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):

console.log("Задача 7");
let symbol = prompt('символ');
function hefren(n){
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
    };
    document.write(`<pre>${m+'\n'}</pre>`);
  }
};
hefren(prompt('число'));




//----------- Задача 8 Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

console.log("Задача 8");
function writeTriangle(rows, isReverse) {
    const indexes = new Array(rows).fill(0).map((_, i) => i);
    if (isReverse) indexes.reverse();
    for (let i of indexes) {
        const spaces = ' '.repeat(rows - 1 - i);
        console.log(spaces + '*'.repeat(1 + i*2) + spaces);
    }
}
 
const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);



// //---------------- Задача 9 Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

console.log("Задача 9");

console.log("9 задание:");
function getFibArray(n) {
  const arr = [...Array(n).keys()];
  function f(el, i) {
    return i <= 1 ? 1 : f(arr[i - 2], i - 2) + f(arr[i - 1], i - 1);
  }
  return arr.map(f);
}
console.log(getFibArray(22));



// ------- Задача 10  Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

console.log("Задача 10");

function f10(num) {
    let summ = 0;
    if (num < 10) return num;
    num = num + '';
    for (let i = 0; i < num.length; i++) {
        summ += +num[i];
    }
    if (summ < 10) {
        return summ
    }
    return f10(summ);
}


//------------------ Задача 11 Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

function f11(arr) {
    if (arr.length === 0) return;
    console.log(arr.pop());
    f11(arr);
}



//------------------ Задача 12

function f12 (name, surName, lastName, group) 
{
    let title = 'Домашняя работа: «Функции»';
    let subtitle = 'Выполнил: студент гр. ' + group;
    let stringName = `${name} ${surName} ${lastName}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subtitle.length > maxStr) maxStr = subtitle.length;
    if (stringName.length > maxStr) maxStr = stringName.length;


    let ramka = '';
    for (let i = 0; i < maxStr + 4; i++) {
        ramka += '*';
    }

    const fStr = function (str, len) {
        for (let i = str.length; i < len; i++) {
            str += ' ';
        }
        return ' ' + str + ' *';
    }
    title = fStr(title, maxStr);
    subtitle = fStr(subtitle, maxStr);
    stringName = fStr(stringName, maxStr);

    console.log(ramka);
    console.log(title);
    console.log(subtitle);
    console.log(stringName);
    console.log(ramka);
}
f12(prompt('Имя'), prompt('Фамилия'), prompt('Отчество'), prompt('Группа'));



// ---------------Задача 13  Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения.

// function mail(str){
//     let point = str.lastIndexOf('.');
//     if (point === str.length - 1  point === -1  point === 0) return 'Не почтовый адресс';
//     let dog = str.lastIndexOf('@');
//     if (dog !== str.indexOf('@')) return 'Не почтовый адресс';
//     if (dog === str.length - 1  dog === -1  dog === 0  dog < 3) return 'Не почтовый адресс';
//     let defis = str.lastIndexOf('-');
//     if (defis === str.length - 1  defis === 0) return 'Не почтовый адресс';
//     let n = str.lastIndexOf('');
//     if (n === str.length - 1 || n === 0) return 'Не почтовый адресс';

//     let symbols = абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!"#$%&'()*+,/:;<=>?[\\]^{|}~ 
//     let nameSymbols = '!"#$%&'()*+,-/:;<=>?@[\]^`{|}~';
//     let nums = '1234567890.';

//     for (let i = 0; i < str.length - 1; i++){
//         if(str[i] === '.' && str[i + 1] === '.'  
//             str[i] === '@' && str[i + 1] === '.' 
//             str[i] === '.' && str[i + 1] === '@' 
//             str[i] === '@' && str[i + 1] === '@' 
//             str[i] === '' && str[i + 1] === '@' 
//             str[i] === '@' && str[i + 1] === '-' 
//             str[i] === '-' && str[i + 1] === '-' ||
//             str[i] === '' && str[i + 1] === '_' ) return 'Не почтовый адресс';
//         if(symbols.includes(str[i])) return 'Не почтовый адресс';
//     }

//     let name = str.slice(0, dog);

//     if(nums.includes(name[0])) return 'Не почтовый адресс';
//     for (let i = 0; i < name.length; i++){
//         if (nameSymbols.includes(name[i])) return 'Не почтовый адресс';
//     }

//     let dom = str.slice(point);
//     let domName = str.slice(dog, point);

//     if(dom.length < 2  dom.length > 11) return 'Не почтовый адресс';
//     if(domName.length < 2  domName.length > 11) return 'Не почтовый адресс';

//     return 'Почтовый адресс верен';
// }
