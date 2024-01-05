/* Причины почему синхронность Js это плохо:
// однопоточный язык - синхронный язык
// 1 - одновременно несколько действии он не может выполнять
console.log(a) // ошибка
console.log("How are you?")
// 2 - если есть логика где требует много ресурсов - время, то он создаст неудобство для пользователя
*/

// асинхронность
// setTimeout, setInterval

/* синтаксис setTimeout, setInterval
function hello(){
    console.log("Привет!")
}

console.log("1")
// hello() // 1 Привет! 2
setTimeout(hello, 2000)
console.log("2")
// 1 2 Привет!

// setTimeout(()=> {console.log("Ты на сайте более 3 секунд")}, 3000)
setInterval(hello, 2000) // hello hello hello
*/

/* Примеры с таймаут и интервалом
function hello(){
    console.log("Привет!")
}

console.log("a")
setTimeout(()=> { console.log("b") }, 2000)
console.log("c")
hello()
setInterval(()=> { console.log("d") }, 1000)
setInterval(()=> { console.log("hello") }, 1000)
setTimeout(()=> { console.log("e") }, 3000)
console.log("f")

// clearTimeout()
// clearInterval()

// a c b
// a c d b
// a c e - b d
// a c e - d - b
// a c f d b e  
// a c e d b d - d - d - d

// a c f - d b d e d d d
*/

/* 1000 - это минимальное время
function hardLongFunction(){
    // ...
}

setTimeout(hardLongFunction, 1000) //1.2 - 1.001
*/

/* дефолт - 0 секунд
setTimeout(()=> { console.log("b") })
*/

/* общий поток и очередь таймаутов, почему так работает
console.log("a")
setTimeout(() => { console.log("b") })
console.log("c")
console.log("c")
console.log("c")
console.log("c")
console.log("c")
console.log("c")
console.log("c")

// a b c
// b a c
// a c b - 
*/

/* Пример из собеса для таймаутов и интервалов, и что такое IIFE

// IIFE - немедленно вызывемая функция - синтаксис (function(){})()

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();

function myFunction() {
    console.log(1);
    setTimeout(() => {console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
}
myFunction()
*/

/* callback - когда внутри одной функции в качестве параметра вы передаете другую функцию и выполняете */

/* простой пример колбэка
function greeting1(personName){
    alert(`Привет ${personName}, как дела?`)
}

function greeting2(personName){
    alert(`Hello ${personName}, how are you?`)
}

function processUserInput(myFunction){
    let personName = prompt("Введи свое имя")
    myFunction(personName)
}


// processUserInput(greeting1)
processUserInput(greeting2)
*/

/* сложная Логика колбэков
function doStep1(callback){
    let a  = 10
    console.log("1")
    callback(10)
}

function doStep2(num, callback){
    console.log("2")
    num *= num
    callback(num)
}

function doStep3(num){
    console.log(num)
}

doStep1(doStep2(doStep3))
// выполняется первый шаг ->  второй шаг -> третий шаг
*/

/* 2 причины почему цепочка из колбэков это плохо!
// callback hell - 1 плохо читается, 2 сложно отследить ошибку

function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();
*/