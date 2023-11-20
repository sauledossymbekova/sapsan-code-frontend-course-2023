// alert("Hello World!")

/* Переменные - Variables  
различие const константа, let можно менять значение
number, string, boolean


let a = 10 
const b = 'Saule'

a = 20

let isStudent = true


let firstname
firstname = 'Saule'

//  camelCase - BEST way
let myName 
let myAge

let myname
let my_name
let _name
let name1
let $name

let 1name
let my-name

let myName = 'Saule'
let firstname = "Saule"
*/

/* Операторы
let num1 = 10
let num2 = 7

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log('Моя перва цифра',num1)
console.log('Моя вторая цифра',num2)

console.log(num1 % num2)

let firstname = 'Saule'
let lastname = 'Doss'

console.log(firstname + ' '+ lastname)
*/

/* Пример приветствия 
let firstname = prompt("What is your name?")
let surname = prompt("What is your surname?")

alert('Hello' + ' '+ firstname + ' ' + surname + '!')*/
/* Задание: поприветствовать с именем и фамилией пользователя
    Должно выйти в алерте:
    Hello Saule Doss !
*/


/* Пример суммирования 
let a = +prompt("First number");
let b = +prompt("Second number");
alert(a + b)
*/
/* Задание: суммировать три цифры
let a = +prompt("First number");
let b = +prompt("Second number");
let c = +prompt("Third number");

alert(a + b + c)
*/
/* Нюансы типов, разница '10' 10
let num1 = '10'
let num2 = 10

let changedNum = Number(num1)

console.log(typeof num1)
console.log(typeof num2)
console.log(typeof changedNum)


let myValue = +prompt("Введите что-то:")
console.log(typeof myValue)
*/

/* Операторы сравнения и Условные операторы If else > < >= <= == != 
let a = 101
let b = 10

if (a == 100){
    alert('а ровно 100')
} else {
    alert('a не ровно 100')
}
*/

/* Как коротко писать if else 
if (b > 0) {
    alert(' у тебя b больше 0')
}

if (b < 0) {
    alert(' у тебя b меньше 0')
}

if (b == 0) {
    alert(' у тебя b = 0')
}


if (b > 0) {
    alert(' у тебя b больше 0')
} else if (b< 0) {
    alert(' у тебя b меньше 0')
} else if(b==0){
    alert(' у тебя b = 0')
} else {
    alert('у тебя b не понятно')
}
*/
/* Задание: берете возраст человека, и проверяете есть ли ему 18 */

/* getElementById
let h1Element = document.getElementById('heading')
console.log(h1Element.textContent)
*/

/* Функции

function sum(a, b){
    // console.log(a + b)
    return a + b
}

// sum(10, 17)
// sum('Saule', '!')

let c = sum(10,10)

alert(c + 'Result') 
*/

/* Задание:
    prompt a b
    function которая в консоли выводит a+b a-b a*b a/b


let num1 = +prompt('First Number')
let num2 = +prompt('Second Number')

// Описание
function calculate(a, b) {
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}

// вызов функции
calculate(num1, num2)
*/

/* Пример определения совершеннолетия */
let inputEl = document.getElementById('my-input')
let buttonEl = document.getElementById('my-button')
let resultEl = document.getElementById('result')

buttonEl.onclick = function(){
    let myValue = Number(inputEl.value)
    
    if(myValue >= 18){
        resultEl.textContent = 'Вы совершеннолетний'
    } else {
        resultEl.textContent = 'Вы не совершеннолетний'
    }
}
/*
Домашнее задание:

Совет: прежде чем сразу брать значение с инпутов попробуйте чисто на js решать
то есть примерноо let a = 10 let b = 10 console.log(a+b)
чтобы просто понять правильно ли вы вычисляете
дальше дело красоты через getElementById, onclick, .value, .textContent будете внедрять

Примечание: значение инпутов всегда превращаете в число если речь о вычислениях
в дано кнопка sum - это <button id="sum"> Sum </button>

№1
Есть два инпута в хтмл, при нажатии на кнопку sum - 
вы должны в параграфе вытащит сумму этих инпутов

Ввод: 10 10 Вывод: 20

№2
Есть один инпут в хтмл, при нажатии на кнопку numberCheck - 
вы должны в параграфе вытащит 
    'Positive' если число положительное,
    'Negative' если число отрицательное,
    'Zero' если число равно нули

Ввод: 6 Вывод: Positive
Ввод: -100 Вывод: Negative

№3
Есть один инпут в хтмл, при нажатии на кнопку evenCheck - 
вы должны в параграфе вытащит 'Yes' если это четное, и 'No' если не четное значение инпута

Ввод: 6 Вывод: Yes
Ввод: 7 Вывод: No

Подсказка: четные на 2 без остатка делятся, остаток как находить показывала или можете загуглить

№4
Есть два инпута в хтмл, при нажатии на кнопку calculate - 
вы должны в 4 разных параграфах вытащит результат 
при плюсе, минусе, умножении и делении этих значении инпутов

Ввод: 10 10 Вывод: 20 0 100 1

№5
Есть 3 инпута в хтмл, 
    первый инпут - рост, в виде числа берете
    второй инпут - окружность талии, в виде числа берете
    третий инпут - мужчина или женщина, в виде текста Ж или М, 
    то есть когда будете потом проверять мужчина или женщина 
        проверяйте как (gender == 'М') и (gender == 'Ж')
при нажатии на кнопку getFat - 
вы должны получить процент жира в параграфе по формулам:
Мужчина: 64 − (20 × рост/окружность талии)
Женщина: 76 − (20 × рост/окружность талии)

Ввод: 165 60 Ж Вывод: 21
*/



/* Пример простого калькулятора 
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')

const resultElement = document.getElementById('result')

submitBtn.onclick = function () {
    const sum = Number(input1.value) + Number(input2.value)
    resultElement.textContent = sum
}
*/
