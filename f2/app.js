// Типы данных

// Примитивных: string, number, boolean, undefined, null, bigInt, symbol

let a; // undefined
let b = null;

// ==
// срав на значение
// ===
// срав и на значение и на тип
if (1 === "1") {
  console.log("ok");
} else {
  console.log("no");
}

// false значения

'1' // true
'' // false

// 0 '' null undefined false -0 Nan

// Обьектные, ссылочные

let c = {}
let d = {}

c == d // false
c === d // false

// var let const

// var - глобальная область видимости
// const let - блочная

// var let  - изменить их значения
// сonst - нельзя


// hoisting

myName // undefined

// ...
var myName = 'Saule'

// array работа с ним

let myMassiv = [1,2,3]

// как они возвращают
// как они меняют сам массив

// map filter reduce sort find findAll