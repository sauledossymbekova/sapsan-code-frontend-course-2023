/* Операторы сравнения
let a = 10
let b = 5
let c = 10

console.log(a>b)
console.log(a<b)

// false
console.log(a == b)

// true
console.log(a==c)
// 3
let num1 = 10 % 7
// 0
let num2 = 4 % 2

// false
console.log(num1 == num2)
*/
/* >= <= > < == */

/* Операторы условия if else 

let num = +prompt("Введите число:")

// Эффективное решение
if (num > 0) {
  console.log(num + ":" + "Положительное число")
} else if(num == 0){
    console.log(num + ":" + "число равно 0")
} else {
    console.log(num + ":" + "Отрицательное число")
}

// Не эффективное решение
if(num > 0){

}

if(num == 0){

}

if(num < 0){

}
*/

/* Пример найти число четное или нечетное 
// ВВОД:4 ВЫВОД: четное
// ВВОД:5 ВЫВОД: нечетно
// Подсказка: если число четное то она делится на двойку без остатка

let num = 655

if(num%2 == 0){
    console.log(num + " " +"Четное")
} else {
    console.log(num + " "+"Не четное")
}
*/

// Prettier
// alt shift f если винда
// cmd shift f если макос

/* различия let const var */

/* создания без присваивания значения
let a 
// SyntaxError
const b 
*/

/* менять значения
let a = 10
a = 5

// TypeError
const b = 10
b = 5
*/

/* undefined переменная существует но нет в нем значения*/
/* var имеет большую видимость, его видно даже до самой инициализация */

/* Видимость переменных*/

/*  когда пытаемся обратиться к переменной до его создания */
/*когда let - ReferenceError
console.log(num)

let num = 10
*/
/* когда const - ReferenceError
console.log(num)

const num = 5

console.log('num')
*/
/* когда var
console.log(a)

var a = 10

console.log("Hello world!")
*/

/* Схожести var let 
// Здесь все ОК
let num1 
var num2
// в этом случае будет ошибка
const num3 
*/

/* Пример нахождения возраста человека 
в зависимости от его года рождения 

let inputEl = document.getElementById("input")
let buttonEl = document.getElementById("submit")
let resultEl = document.getElementById("result")
console.log(buttonEl)

buttonEl.onclick = function(){
    let year = Number(inputEl.value)
    let currentYear = 2023

    let result = currentYear - year
    resultEl.textContent = result
}
*/

/* Задание: есть два инпута, 
    в одном количество хлеба, в другом количество воды
    стоимость хлеба 500, стоимость воды 300
    надо найти общую сумму к оплате

// Хлеб 500  Вода 300
// 2 2
// 1600

let inputEl1 = document.getElementById("input1")
let inputEl2 = document.getElementById("input2")

let buttonEl = document.getElementById("submit")
let resultEl = document.getElementById("result")

const priceHleb = 500
const priceVoda = 300

buttonEl.onclick = function(){
    let hleb = Number(inputEl1.value)
    let voda = Number(inputEl2.value)

    let result = hleb * priceHleb + voda* priceVoda

    resultEl.textContent = result
}
 */

/* Пример дается три числа 
    надо найти результат по формуле x² + y - z:2  

let x = 3
let y = 9
let z = 8

let result = x * x + y - z/2
console.log(result)
*/

/* Задание: если число четное то выводите в консоли ОК
    если не четное то к числу прибавляете единичку
    и выводите в консоли
    ВВОД: 3 ВЫВОД 4
    ВВОД: 4 ВЫВОД ОК
*/
/* Increment Decrement 
let a = 10

// ++a
// --a

// a++
// a--

console.log(++a)

console.log(a)
*/
/* Пример с четными и нечетными вместе с инкрементом
let a = 13

if (a % 2  == 0) {
    console.log("OK")
} else {
    console.log(++a)
}
*/


/* Калькулятор */
let inputEl1 = document.getElementById("input1")
let inputEl2 = document.getElementById("input2")

let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")

let calculateBtn = document.getElementById("submit")
let resultEl = document.getElementById("result")

let operator

plusBtn.onclick = function(){
    operator = '+'
}

minusBtn.onclick = function(){
    operator = '-'
}


calculateBtn.onclick = function(){
    let num1 = Number(inputEl1.value)
    let num2 = Number(inputEl2.value)

    let result = 0

    if(operator == '+'){
        result = num1 + num2
    } else if(operator == '-'){
        result = num1 - num2
    }

    resultEl.textContent = result
}