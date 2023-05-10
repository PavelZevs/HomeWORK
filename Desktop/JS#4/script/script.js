// Задача 1--Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

// let arr1 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr1.length; i++) {
// 	document.write(arr1[i] + '<br>');
// }



// Задача 2----Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
//  быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

// let ar = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for (let i = 0; i < ar.length; i++) {
// 	if (ar[i] > -10 && ar[i] < -3)
// 		document.write(ar[i] + '<br>');
// }


// // Задача 3---------Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.


// let arr6 = [30, 35, 37, 44, 45, 48, 50, 52, 53, 55, 57];


// for (let i = 0; i < arr6.length; i++) {
// 	document.write(arr6[i] + '<br>');
// }

// let array = [23, 24, 33, 34, 45];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//   result += array[i];
// }
// console.log(result);




// Задача 4--------------Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.

// let arr = ['10', '20', '30', '50', '235', '3000'];

// for (i = 0; i < arr.length; i++) {
// 	if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
// 		document.write(arr[i] + ', ');
// 	}
// }




// Задача 5 ------------Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// // дни недели, а выходные дни выведите жирным.

// let days = ['MON', 'TU', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
// var d = days.length;
// for (var i = 0; i < d; i++) {
// 	if (i == 5 || i == 6) {
// 		document.write('<strong>' + days[i] + '</strong><br>');
// 	}
// 	else {
// 		document.write(days[i] + ' ');
// 	}
// }


// Задача 6 -----Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

// let num = [13, 14, 33, 44, 45];
// num. push('Apple');
// console.log(num);

// let lastItem = num.length -1; 
// console.log(num[lastItem]);
// document.write("Последний элемент массива:",num[lastItem]);





// -------------------------Задача 7
// let arr = [];
// while (1){
//     let num = prompt('Введите число');
//     if (isNaN(num)) {
//         alert('Ввели число');
//         continue;
//     }
//     if (num === ''){
//         break;
//     }
//     arr.push(num);
// }

// arr.sort();
// console.log(function (a, b) {
//     return a = b;
// });

// console.log (arr);







// Задача 8----Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.


function reverseString([]) {

	const arr = [12, false, 'Текст', 4, 2, -5, 0];
	let reverse = "";

	while (arr.length) {
		reverse = reverse + arr.pop()
	}

	return reverse;
}

console.log(reverseString('reverse'));



// Задача 9-------Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].
let n, arrayLength = 15, y = [5, 9, 21, , , 9, 78, , , , 6];
for (i = 0; i < y.Length; i++) {
	y[i] = Math.round(Math.random() * 10);
}
n = 0;
for (i = 0; i < y.length; i++) {
	if (y[i] == 0) n++;
}
console.log('массив: [' + y.join(', ') + ']');
console.log('количество нулевых элементов равно ' + n);



// -----------------Задача 10
let arrs = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let firsIndex = arrs.indexOf(0),
	lastIndex = arrs.lastIndexOf(0),
	summ = 0;

if (firsIndex === lastIndex) {
	console.log(summ);
} else {
	for (let i = firsIndex; i < lastIndex; i++) {
		summ += arrs[i];
	}
	console.log(summ)
}

//-----------------Задача 11
let h = +prompt('Высота пирамидки');

for (let i = 1; i <= h; i++) {
	let str = '';
	let p = '';
	for (let j = 0; j < h - i; j++) {
		str += ' ';
	}
	for (let a = 0; a < i * 2 - 1; a++) {
		p += '^';
	}

	document.write(`<pre>${str + p}</pre>`);
}





