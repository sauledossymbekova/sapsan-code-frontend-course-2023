/* Тернарный оператор 
синтаксис: условие ? команда которая должна выполниться если верно : команда которая должна выполниться если НЕ верно
let num1 = 10
let num2 = 5

// if(num1 > num2){
//     console.log('первая больше')
// } else {
//     console.log('вторая больше')
// }

num1 > num2 ? console.log('первая больше') : console.log('вторая больше')
*/

/* Динамический типизируемый язык это? 
let a = 10

console.log(a, typeof a,"моя переменная")

a = "Saule"

console.log(a, typeof a,"моя переменная")
*/

/* Цикл - Loop 
Syntax

for(define counter; condition for counter; action for counter){
что должно происходить при каждом шаге
}
*/

/* Цикл на примере эффективного решения и неэффективного решения 

// Неэффективное решение при повторяющихся действии
// let a = 0;

// a++;
// console.log(a);

// a++;
// console.log(a);

// a++;
// console.log(a);

// a++;
// console.log(a);

// a++;
// console.log(a);

let a = 0;

// Эффективное решение при повторяющихся действии через циклы
for (let i = 0; i < 5; i++) {
  a++;
  console.log(a);

  // console.log(++a)
}

// 1 2 4 5
for (let i = 1; i <= 5; i++) {
  if (i !== 3) {
    console.log(i);
  }
}

*/

/* Задание: c 1 до 10 вытащить все четные цифры: 2 4 6 8 10

for (let i = 1; i <= 10; i++) {
    if (i %2 === 0) {
      console.log(i);
    }
}
*/

/* Пример посчитать до той цифры что ввел пользователь
let num = +prompt("Введите любое число")

for (let i = 0; i < num; ++i){
    console.log(i)
}
*/

/* Задание: вытащить все НЕ четные цифры до той цифры что ввел пользователь
Ввод: 22
Вывод: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21
*/

/* Работа со строками, превратить цифру в строку, новая строка, как писать I've, шаблонная строка

// цифру в строку
// let a = '10'
// Number() '10' => 10

let b = 20

console.log(typeof b)
console.log(typeof String(b))

// \n - new line,
console.log("Hello, my nam is Saule.\n What is your name?")

// console.log('I've got something') - ERROR
console.log('I\'ve got something')
*/

/* Работа со строками: 
let firstname = "Saule"
let lastname = 'Doss'
let profession = `software engineer`

console.log(`Hello, my nam is Saule. What is your name?`)

// template string syntax: `sometext and ${some js}` 

const my_name = "Chris";
const greeting = `Hello, ${my_name}`;
// const greeting = "Hello" + " " + name;
console.log(greeting);

let num1 = 10;
let num2 = 20;

console.log(`Result = ${num1 * num2}!`)
*/

// Задание: написать функцию которая будет знакомиться, у вас есть 3 переменных: имя, фамилия, профессия
/* Результат должен быть таким в консоли:
Hello, I'm Saule Doss.
I work as software engineer.
What's your name? 

let firstname = "Saule"
let lastname = "Doss"
let profession = "software engineer"

function greeting(){
    console.log()
}

greeting()
*/

/* addEventListener

let buttonEl = document.getElementById("my-button")

buttonEl.onclick = function (){

}

function onePlusOne(){
    console.log(1+1)
}

buttonEl.addEventListener('click', onePlusOne)
*/

/* Задание: Вывезти числа от 1 до 100 которые являются кратными 3
Вывод: 3 6 9 12 ... 99 */

// разница между buttonEl.onclick и buttonEl.addEventListener

