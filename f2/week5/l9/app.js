// console.log('Hello friend!')

/* Переменные и типы
let меняет значение, const неизменно
типы: string строковые, number числа, boolean 

let firstname = 'Saule'

firstname = 'Aidarkhan'

const age = 23
// age = 30

let isStudent = true
let isCriminal = false


let a
// const b 

console.log(typeof isStudent)
*/

/* Как надо и не надо писать? стиль - camelCase 
// Нужно
let myName = 'Saule'
let isRealStudent

// Можно но не стоит
let my_name
let _name 
let name_
let $name
let name1

// Нельзя
// let my-name
// let 1name
*/


/* Операторы + - * / %
let a = 17
let b = 10

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

console.log(17 % 10)
console.log(10 % 10)
*/

/* Пример приветствия 
let firstname = "Saule"
let lastname = "Doss"

console.log(firstname+' '+lastname)
*/
/* Задание: поприветствовать с именем и фамилией пользователя 
должно в консоли выйти: Hello Saule Doss!

let firstname = prompt("Как вас зовут?")
let surname = prompt("Как ваша фамилия?")
console.log('Hello' + ' ' + firstname + ' '+ surname + '!')
*/

/* Пример суммирования, как превращать строку в число (Number, +) 
let num1 = +prompt("First number:")
let num2 = +prompt("Second number:")

console.log(Number(num1) + Number(num2))
console.log(num1 + num2)
*/
/* Задание человек ввел 2 числа, в консоли надо вывести ответы при + - * /
ВВОД: 10 10
ВЫВОД: 20 0 100 1
*/

/* Разница строковых string и чисел number
let a = '10'
let b = 10

console.log(typeof a, "- это тип '10' ")
console.log(typeof b, "- это тип 10 ")

// Number()

let a = '10'

console.log(typeof a)
console.log(typeof Number(a))
*/


/* Функции
function greeting(){
    console.log('Привет, как дела?')
}
greeting()
*/

/* Пример функции которая находит сумму
function sum(a, b){
    return a + b
}

let result = sum(1927309171, 21397409172)
console.log(result)
*/
/* Задание написать функцию которая находит квадрат числа 
function square(num){
    return num * num
}

let result = square(11)
console.log(result)
*/

/* Вызов функции при клике на кнопку
let button = document.getElementById('my-button')

button.onclick = function () {
    console.log(11*11)
}
*/


/* Взаимодействие с html елементами

let inputEl = document.getElementById('my-input')
let buttonEl = document.getElementById('my-button')
let resulEl = document.getElementById('result')

console.log(resulEl.textContent)

buttonEl.onclick = function () {
    let num = Number(inputEl.value)
    resulEl.textContent = num * num
}
 */
