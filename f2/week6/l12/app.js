/* Тернарный оператор 
синтаксис: условие ? команда которая должна выполниться если верно : команда которая должна выполниться если НЕ верно
let num1 = 10
let num2 = 500

if(num1 > num2) {
  console.log('Первое больше')
} else {
  console.log('Второе больше')
}

num1 > num2 ? console.log('Первое больше') : console.log('Второе больше')
*/

/* Динамический типизируемый язык это?

// динамически типизируемые | строго типизируемые 

let a = "Saule"

console.log(a, typeof a)

// какая то логика...

a = 10

console.log(a, typeof a)
 */

/* Цикл - Loop 
Syntax

for(define counter; condition for counter; action for counter){
что должно происходить при каждом шаге
}
*/

/* Цикл на примере эффективного решения и неэффективного решения 
// 1 2 3 4 5
// Неэффективное решение при повторяющихся действии 

// 1 2 3 4 5
let a = 0

// a++
// console.log(a)

// a++
// console.log(a)

// a++
// console.log(a)

// a++
// console.log(a)

// a++
// console.log(a)

// Эффективное решение при повторяющихся действии через циклы
for(let i = 0; i < 5; i++){
  a++
  console.log(a)
}
*/

/* Цикл c услофиями 1 2 4 5
let a = 0
for(let i = 0; i < 5; i++) {
  a++
  if(a !== 3){
    console.log(a)
  }
}
*/

/* Задание: c 1 до 10 вытащить все цифры: 1 2 3 4 5 6 7 8 9 10 

for(let i = 1; i <= 10; i++){
  console.log(i)
}
*/

/* Задание: c 1 до 10 вытащить все четные цифры: 2 4 6 8 10 

for(let i = 1; i <= 10; i++){
  if(i % 2 === 0) {
    console.log(i)
  }
}
*/

/* Пример посчитать до той цифры что ввел пользователь

let num = +prompt("Введите любое число")

for(let i = 1; i <= num; i++){
  console.log(i)
}
*/

/* Задание: вытащить все НЕ четные до той цифры что ввел пользователь
Ввод: 22
Вывод: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21
*/

/* Работа со строками, превратить цифру в строку, новая строка, как писать I've, шаблонная строка 
// цифру в строку, typeof

// \n - new line,

// string => number Number()
console.log('10', typeof '10')

console.log( Number('10'), typeof  Number('10'))

// number => string String()

console.log(57, typeof 57) // 57, number

console.log(String(57), typeof String(57))


console.log("Hello, My name is Saule.\n What is your name? \n How old are you?")

// console.log('I've got something') - ERROR
console.log('I\'ve two lessons')
*/

/* Работа со строками template string: 

// template string syntax: `sometext and ${some js}` 

const sentence = `Hello, My name is Saule.
What is your name?
How old are you?`

console.log(sentence)

let firstname = "Saule"
let lastname = 'Doss'
let profession = `software engineer`

// const greeting = "Hello" + " " + firstname + " " + "!";

const greeting = `Hello ${firstname} !`

console.log(greeting)

let num1 = 10
let num2 = 5

console.log(`Result: ${num1 * num2}`)
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

buttonEl.onclick = function(){
  console.log('you clicked me')
}

function myFunction(){
  console.log('you clicked me')
}

buttonEl.addEventListener('click', myFunction)
*/

/* Задание: Вывезти числа от 1 до 100 которые являются кратными 3
Вывод: 3 6 9 12 ... 99 */


// Задание: Таблица умножения 3 умнажаете к цифрам от 1 до 10 => 3 6 9 12...30
let buttonEl = document.getElementById("my-button")

function myFunction(){
  for(let i = 1; i <= 10; ++i){

  }
}

buttonEl.addEventListener('click', myFunction)



// разница между buttonEl.onclick и buttonEl.addEventListener

