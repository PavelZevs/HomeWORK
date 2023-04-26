// ------------Задача 1(Выведите числа от 1 до 50 и от 35 до 8.)
console.log('Задача 1')
let i = 1;

while (i <= 50) {
    console.log(i);
    i++;
}
for (let i = 35; i >= 8; i--) {
    console.log(i);
}

console.log('')




// // -------------Задача 2(Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа

console.log('Задача 2')

let o = 89;
while (o >= 11) {
    document.write(o + '<br>');
    o--;
}
console.log('')





// // -------------Задача 3(С помощью цикла найдите сумму чисел от 0 до 100.)
console.log('Задача 3')
let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
    console.log(sum);
}

console.log('')



//Задача 4----- Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
// (1+2+3).


console.log('Задача 4')
let a = 5;
let suM = 0;
for (let i = 1; i <= a; i++) {
    suM = 0;
    for (let j = 1; j <= i; j++) {
        suM += j;
    }
    console.log('suM' + i + ' = ' + suM);
}
console.log('')



// Задача 5--------Выведите чётные числа от 8 до 56. Решить задание через while и for.

console.log('Задача 5')

let p = 8;
while (p <= 56){
    p++;
    if (p % 2 == 1) continue;
    console.log(p);
}

for( let u = 8; u <= 56; u++) {
    if(u % 2 == 1) continue;
    console.log(u);
}
console.log('')




// Задача 6 Необходимо вывести на экран полную таблицу умножения (от 2 до 10)
console.log('Задача 6')

for (let z = 2; z <= 10; z++){ 
    for (let i = 2; i <=10; i++)
    { 
    console.log(z + "*" + i + "=" +(z*i));
    }        
} 
console.log('');



// Задача 7
console.log('Задача 7');

for (let n = 1000, num = 0; n > 50; num++) {
    n /= 2;
    num ++
    console.log( n );
    console.log( num + ' итераций' );
}
console.log('');

// Задача 8 

// let sumn = 0,
//     count = 0;

// while (true) {
//     let num = prompt('Введите число');
//     if (isNaN(num) || num === '') {
//         alert('Введено не чило');
//         continue;
//     }
//     if (+num === 0) {
//         break;
//     }

//     sumn += +num;   //summ += Number(num)
//     count++;
// }

// alert('Общая сумма: ' + summ + '\nСреднее арифметическое: ' + summ / count);


// console.log('');



// Задача 9
console.log('9');
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let min = Infinity,
    max = -Infinity;
let buf = '';

for (let i = 0; i < str.length; i++) {

    if (str[i] !== ' ') {
        buf += str[i];
    } else {
        if (+buf > max) max = +buf;
        if (+buf < min) min = +buf;
        buf = '';
    }
}

console.log('Макимальное число: ' + max + '\nМинимальное число: ' + min);

console.log('');




// Задача 10

console.log('10');
let num = prompt('Введите число');
let coun = 0,
    summ = 0,
    rev = '';


for (let i = 0; i < num.length; i++) {
    // console.log(num[i]);
    coun++;
    summ += +num[i];
    rev = num[i] + rev;
}
console.log(`Исходное число: ${num}
  Сумма цифр: ${summ}
  Количество цифр: ${coun}
  Число в обратном порядке: ${rev}`);
