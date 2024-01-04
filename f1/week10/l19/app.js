// Sync однопоточный МИНУСЫ
// 1 если где то ошибка то js крашится, потому что является однопоточным и не идет дальше
// console.log(a)
// console.log("How are you?")

// 2 если вычисления долгие то сайт стопится, и пользователь ничем другим взаимодействует а это может занять долгое время время
// ... что-то считаете очень долгоо
// сюда не дойдет пока выше не закончится

// Штуку которые помогают работать АСИНХРОННО с JS: timeout, interval, callback функции, Promise

// setTimeout setInterval - примеры

/* пример 
console.log("a")
setTimeout(()=>{console.log("Hello world!")}) // 0
console.log("b")
console.log("c")
console.log("d")
// a b Hello world!
*/

/* обычный пример:
function myfunction() {
  console.log("Hello");
}

console.log('1')
myfunction()
setTimeout(myfunction, 1000)
setInterval(myfunction, 1000)
console.log('3')

// при обычном синхроне
// 1 2 3

// при таймауте
// 1 3 2

// при интервале
// 1 3 2 2 2 2 2 2 2
*/

/* более сложный пример:
console.log('a')
setTimeout(()=> console.log("b"), 2000)
myfunction()
console.log('c')
setTimeout(()=> console.log("d"), 3000)
console.log('e')
setInterval(myfunction, 2000)

// a c e d f b
// a c e d b f
// a c e f b d

// a Hello c e Hello b d

// a Hello c e Hello b Hello d Hello Hello Hello
// a Hello c e b Hello d Hello
*/

/* Пример из собеса для таймаутов и интервалов*/
// IIFE - немедленно вызываемая функция

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
//   })();

// function myfunction() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// }
// myfunction()

// callback - фнутри одной функции передаете в качестве параметра другую функцию, и выполняете ее фнутри
/* пример:
function myFunction1(init, myFunction2) {
  const result = init + 1;
  myFunction2(result);
}
myFunction1()
*/

/* обычный пример калбэка
function greeting(name) {
  alert(`Hello, ${name}`);
}

function greeting2(name) {
    alert(`Привет, ${name}`);
  }

function processUserInput(myFunction) {
  const name = prompt("Please enter your name.");
  myFunction(name);
}

processUserInput(greeting);
processUserInput(greeting2);
*/


/* ПЛОХО когда их много потому что создается ад из колбэков "callback hell"
- сложно читать потому что они проваливаются внутрь внутрь внутрь
- сложно будет понять где произошла ошибка если выйдет ошибка
*/
/* пример:
doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
*/

// button.addEventListener("click", ()=> {console.log("YOU CLICKED")})

// promise
