// Arrow functions
// =>
// Es5 - Es6

/* param => либо то что возвращается либо то что выполняется

setTimeout(() => {
  console.log("hello")
}, 2000);

setTimeout(function () {
  console.log("hello")
}, 2000)(
  //
  function () {
    return "Ok"
  }
);

() => "OK";

() => {
  return "OK"
};
*/

/* Syntax

// у вас один параметр и вы возвращаете что-то
(function (a) {
  return a
});

(a) => a;

(a) => {
  return a
};

(a) => a;
(a) => {
  return a
};

// больше чем один параметр

(a, b) => {
  return a + b
};

(a, b) => a + b;
(a, b) => a + b;

(a, b, c, d) => {
  return a + b + c
};

(a, b, c) => a + b + c;

// когда функция не принимает параметр

(function(){
    return "Yes"
});

() => "Yes";

() => {
    return "Yes"
};

// Error, когда без ()
//  => {
    
//  }

// правая часть функции

// function(){

// }

// () =>

// когда функция что-то возвращает
(function (a) {
    return a
});

(a) => a;
(a) => (a);

(a) => {
    return a
};


(a, b) => (a*b - a- b); // 10*5-10-5 = 35
(a, b) => {
    return a*b - a- b
}

() => "Yes";
() => {return "Yes"}

// когда функция что-то делает

(function (text){
    console.log("твой текст это:", text)
});

(text) => {
    console.log("твой текст это:", text)
}

// когда функция выполняет некую логику и что-то возвращает

(function(a, b){
    let result = a*a - 2*a*b + b *b
    // ...
    return result
});

(a, b) => {
    let result = a*a - 2*a*b + b *b
    // ...
    return result
}
*/

/* Запись результата функции: если вдруг функция что то возвращает с этим результатом надо что-то делать
function sum1(a, b){
    return a+b
}

sum1(10, 20); // 30
sum1(100, 27);


const sum2 = (a,b) => a+b

let result = sum2(7,7) // 14
console.log(result)

let parag = document.createElement("p")
parag.textContent = result
document.body.append(parag)

sum2(13, 6) // 19
*/

/* Как давать названия функциям
function greeting(){
    console.log("Привет, меня зовут Сауле")
}

greeting()

const greeting2 = () => {
    console.log("Привет, меня зовут Сауле")
}
greeting2()
*/

/* почему const почему let
let a = 10
// спустя какое-то время..
a = 20

const b = 3
b = 4 // здесь будет ошибка

// inmutability - лучше придерживаться

const myfunct = () => {
    return "Yes"
}

myfunct = () => { // вот тут будет ошибка потому что функцию которую обьявили через const нельзя поменять
    return "No"
}

// let можно использовать для коротких записей где переменная потом меняет свое значение
// "saule" => "SAULE"
*/

/* Задание: переписать обычную функцию в стрерлочную функция которая вычисляет квадрат - 10 => 100

function squareFunct(num){
    return num*num
}

// declaring function
const squareFunct1 = num => num*num
const squareFunct2 = (num) => (num*num)
const squareFunct3 = (num) => {
    return num*num
}

let a = 8
let result = squareFunct1(a)
console.log(result) 
*/

/* Задание: функция которая создает параграф с текстом Hello World в хтмл 

let div = document.getElementById("output")
// ... createElement
div.appendChild()
document.body.append()

parent.textContent = `Hello World`

const showText = () => {
    console.log(value)
}

showText("Hello world")
showText("Saule")
*/

// Rest operator -

function myFunc(...params){
    for(element of params){
        console.log(element)
    }
}

myFunc()
myFunc("hello")
myFunc(1,2,3,4)

const calculate = (text, ...params) => {
    let result = 0;
    for (num of params) {
      result += num;
    }
    console.log(text, result); // 10
  };

calculate("я суммировала =",1,2,3,4)

// Преимущество
// + они короче
// + они более читабельнее

// различия стрелочных от обычных
// - синтаксисом отличаются, без function, с =>
// - this не можем
// - через стрелочные нельзя писать конструкторы, то есть создавать функцию которая что-то создает

// так не стоит писать 
const Person = () => {

}

function Person(){
    this.firstname = ""
    this.age = ""

    this.greeting() = function (){
        console.log("Hello")
    }
}

let person1 = new Person()

// использовать методы reduce filter map sort, и сделать 4 примера (параметры этих функции должны быть описаны через стрелочную функцию)
// reduce, filter, sort, msap

let arr = ["Saule", "Aidarkhan"]

arr.filter((name) => name.length > 6)


// для кастомных функции

const myfunct2 = (num = 10) => {
    return num*num
}

myFunc() // 100
myFunc(7) // 49
myFunc(5) // 25