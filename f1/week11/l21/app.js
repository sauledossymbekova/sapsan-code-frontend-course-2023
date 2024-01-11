// Arrow functions
// Es6
/* Синтаксис
// addEventListener("click", function(){})

(function(a) {
    return a
})

// param => expression

a => a

a => {return a}

// несколько параметров

// 2 3 => 5

(a, b) => a+b;
(a, b) => (a+b);
(a, b) => {
    return a+b
}

// Если функция ничего не возвращает но что то выполняет
//("Hello") => выполнится alert("Hello")

(function(text){
    alert(text)
});

text => {
    alert(text)
}

(text) => {
    alert(text)
}

(text1, text2) => {
    console.log(text1 + text2)
}

// Комплексная функ

function(a, b){
    let x = a*a + 2*a*b - b*2
    return x
}

(a, b) => {
    let x = a*a + 2*a*b - b*2
    return x
}


function(a, b){
    return a*a + 2*a*b - b*2
}

(a, b) => a*a + 2*a*b - b*2; 
(a, b) => (a*a + 2*a*b - b*2)
*/

/* Примеры с присваиванием названии
function myFunction1(a) {
    return a
}

myFunction1(10) // 10

// myFunction1(a) => a // Syntax Error

let myFunc = (a) => a

myFunc(10) // 10

// пример когда один параметр и возвр значение
// square(10) - 100

function square1(a){
    return a*a
}

const square2 = (a) => a*a

const square3 = a => a * a

const square4 = (a) => {
    return a*a
}

square1(5) // 25

// пример когда несколько вариантов и возвр значение

function sumSquare(a, b){
    return a*a+b*b
}

const sumSquare1 = (a, b) => a*a+b*b

const sumSquare2 = (a, b) => (a*a+b*b)
const sumSquare3 = (a, b) => {
    return a*a+b*b
}
*/

/* записываем значение которое возвращается в переменную резалт
const func1 = (a) => a*a

let result = func1(10) // result = 100

console.log(result)
*/

/*
function hello(){
    alert("Привет!")
}
hello("My name is Saule")
hello("Helooooo")

const hello2 = () => {
    alert("Привет!")
}

hello2()
*/

/* Задание: функция которая создает параграф с текстом Hello World в хтмл

const showText = (a) => {
    let text = document.createElement("p")

    text.textContent = a

    document.body.append(text)
}

showText("Saule") // create paragraph - paragraph's text "Saule"

showText("Sapsan")

showText("F1")

showText("Hello World")
*/

/* Default params
let sum = (a = 10) => {
  console.log(a + a);
};

sum(7); // 14

sum(); // 20
*/

/* Разное количество параметров
() => {};

(num1) => {};

(num1, num2) => {};

(num1, num2, num3, num4) => {};
*/

// Rest operator -
let calculate = (...params) => {
  let result = 0;
  for (num of params) {
    result += num;
  }
  console.log(result);
};

calculate(0);
calculate(2, 2);
calculate(2, 2, 2, 2);
calculate();

// Различие стрелочных от обычных
// - без ключевого слова function
// - синтаксис пишется через стрелки
// - this не используется внутри стрелочных функци
// - конструкторы нельзя писать через стрелочные функции


function Person(){
    this.age = 0 
    this.name = ""
}

// для своих кастомных функции
// в качестве параметра в других функциях

button.addEventListener("click", ()=> {})

arr = [1, 2, 3]

arr.map((el) => el*2)
setTimeout(function(){ console.log("Hello")}, 1000);
setTimeout(()=> {console.log("Hello")}, 1000)

// async await

// использовать методы reduce filter map sort, и сделать 4 примера (параметры этих функции должны быть описаны через стрелочную функцию)