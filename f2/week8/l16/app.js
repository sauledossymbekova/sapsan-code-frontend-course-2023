// ()
// built in functions, browser API

/* обьявление функции, описание, определение, defining
function greeting(){
    alert("hello");
}

greeting() // calling invoking
*/

/* custom functions
function myFunction() {
    alert("hello");
  }
  
  myFunction();
*/

// console.error("WARNING!!!!")

/* вызов функции внутри другой
function random(number) {
    return Math.floor(Math.random() * number);
  }*/
// метод
/* params, arguments Math.random() myText.replace("Я", "Ты");
// дефолтные параметры

function greeting(firstName = "my friend"){
    console.log(`Hello, ${firstName}`)
}


let myName = "Saule"

greeting(myName)
greeting()
greeting()
*/

/* опциональные параметры join
let arr = ["a", "b", "c", "d"]
console.log(arr.join())
console.log(arr.join("-"))
console.log(arr.join("/"))
*/

/*анонимные функции: пример с addeventListener

// let myButton = document.querySelector(".button");

// myButton.addEventListener('click', function(){
//     alert("Hello my friend!")
// })

// myButton.addEventListener('click', () =>
//     alert("Hello my friend!")
// )
*/
/*function(){
    alert("Hello my friend!")
}

() => { alert('Hello')}

function(){
    return 'Hello'
}

()=> 'hello'*/

/*function sum(a,b){
    console.log(a + b)
}

let c = sum(10,10) // c=20
*/

// myButton.onclick = function () {
//     alert("привет");
//     // При желании, внутри этой функции
//     // можно написать много кода.
//   };

// стрелочные функции -  function(variable) (variable) =>:
// return values: substr, replace

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

/* Пример с клавиатурой 
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keypress", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
*/

/* Область видимости Scope

// let a = "Saule"

// function sum(){
//     let a = 10

//     console.log("а внутри функции",a)
// }
// sum()

// console.log("а вне функции",a)
*/

/* Пример с несколькими скриптами*/

/* Пример с переменными и функциями 
const x = 1;
function a() {
    const y = 2;
    console.log(x);
  }
  
  function b() {
    const z = 3;
    console.log(x);
  }
*/

// append child, remove child, innerhtml

let input = document.querySelector(".input");
let result = document.querySelector("div");
console.log(input)

input.addEventListener("change", (event) => {
  console.log('You typed')
  result.textContent = `You typed ${event.target.value}`;
});

// let button = document.querySelector(".button")

// function greeting() {
//   console.log("Clicked #2");
// }

// button.addEventListener("click", greeting)

// button.addEventListener("click", function () {
//   console.log("Clicked #2");
// })
// button.addEventListener("click", function () {
//   console.log("Clicked #3");
// })

// button.onclick = function () {
//   console.log("Clicked #1");
// };

// button.onclick = function () {
//   console.log("Clicked #2");
// };
