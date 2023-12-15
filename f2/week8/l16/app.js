// ()
// built in functions, browser API

/* обьявление функции, описание, определение, defining 
function greeting(){
    alert("hello");
    // что делает функция
}

greeting() // calling invoking
*/

/* custom functions 
function myFunction() {
  alert("hello");
}

myFunction();*/

// console.error("WARNING!!!!")

/* вызов функции внутри другой 
function random(number) {
    return Math.floor(Math.random() * number);
  }

function greeting(){
    Math.random()
    random()
    myFunction()
    console.log("Hello")
}

greeting() // greeting() => console.log()
*/

// метод - функция обьекта

/* params, arguments Math.random() myText.replace("Я", "Ты");

function greeting(firstName){
    console.log(`Hello, ${firstName}`)
}

greeting("Saule")
*/

/* дефолтные параметры

function greeting(firstName = "my friend", lastName = " ", age = 0){
    if(lastName===" "){
        console.log(`Hello, ${firstName}`)
    } else if(lastName !== " "){
        console.log(`Hello, ${firstName} ${lastName}`)
    }


}

greeting("Saule")
// greeting()
// greeting()
// greeting()
*/

/* опциональные параметры join
let arr = ["a", "b", "c", "d"]

console.log(arr.join())
console.log(arr.join(" "))
console.log(arr.join("/"))
console.log(arr.join("&"))
*/

/*анонимные функции: пример с addeventListener

let myButton = document.querySelector(".button");

// function greeting(){
//     console.log("Hello")
// }

myButton.addEventListener("click", function (){
    console.log("Hello")
})

myButton.addEventListener("click", () => {
    console.log("Hello")
})
*/

// myButton.onclick = function () {
//     alert("привет");
//     // При желании, внутри этой функции
//     // можно написать много кода.
//   };

// стрелочные функции -  function(variable) (variable) =>:

/* Синтаксис стрелочных функции
function (a){
    console.log(a)
}

(a) => {
    console.log(a)
}

function (b){
    return b*b
}

(b) => b*b
(b) => (b*b)

function (c){
    let result = c+ 10*2 - 2*c

    return result
}

(c) => {
    let result = c+ 10*2 - 2*c
    return result
}
*/

/* задание переписать функцию дабл через стрелочные функции 
function double(number) {
  return number * 2;
}

const numbers = [5, 2, 7, 6];

// const doubled = numbers.map(function(number) {
//   return number * 2;
// });

const doubled = numbers.map((num) => num * 2);
console.log(numbers, doubled);
*/

// const numbers = [5, 2, 7, 6];
// 10
// 4
// 14
// 12

// const doubled = numbers.map(function(number) {
//   return number * 2;
// });

// const doubled = numbers.map((number) => number * 2);
// console.log(numbers, doubled)

// const doubled = numbers.map((number) => {
//     console.log(number * 2)
// });
// console.log(doubled)

// return values: substr, replace

/* Виды функции
// функция которая просто что-то выполняет
function sum(a,b){
    console.log(a + b)
}

sum(10,10)

// функция которая возвращает что-то
function minus(a,b){
    return a - b
}

let result = minus(100, 99) // result = 1

console.log(result)
*/


/* Особенности Map

let numbers = [1, 2, 3, 4, 5];

numbers.map((num) => num)

let newArray = numbers.map(function (num){
    return num
})

numbers.map((num) => {
  console.log(num);
});

let newArray = numbers.map(function (num) {
   console.log(num);
});

console.log(newArray);


function findEven(arr){
    for(let i=0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
            console.log("OK")
        } else{
            console.log("NO")
        }
    }
}

let numbers = [2, 5, 9, 3, 8, 12]

numbers.map((num) => {
    if(num % 2 === 0){
        console.log("OK")
    } else{
        console.log("NO")
    }
})

// OK
// NO

*/

/* Область видимости Scope */

let a = "Zebra"

function show(){
    let a = "Saule"
    console.log(a)
}

function sum(){
    let a = "Penguin"
}

console.log(a)

