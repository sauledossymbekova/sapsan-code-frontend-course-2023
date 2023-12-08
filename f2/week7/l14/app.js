/* Примитивные и Обьектные типы данных

// string number boolean undefined null symbol bigInt - 7

let num = 1
let firstname = "Saule"
let isStudent = true
*/

/*Массив - список, лист
// syntax: let/const/var = []; в [] ставите элементы

let names = [] // создали пустой массив
console.log(names)

// let num1 = 10
// let num2 = 20
// ...

let numbers = [10, 20, 30, 40, 50, 60]

// Saule - 0 индексом, Anel - 1 индексом
let list = ["Saule", "Anel", "Valikhan", "Aron", "Nariman", "Ermek"]
console.log(list)

console.log(list[0]) // первый элемент
console.log(list[5])

console.log(list.length) // количество элементов

list.length - 1 // 5 - дает индексацию последнего элемента

console.log(list[list.length - 1])
*/
/* Задание: console - сам массив, его первый элемент, и последний элемент
// console.log(list)
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]);
// console.log(list[4]);
// console.log(list[5]);

// console.log(list)
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]);
// console.log(list[4]);
// console.log(list[5]);

let list = ["Saule", "Anel", "Valikhan", "Aron", "Nariman", "Ermek"];
// console.log(list)

for (let i = 0; i < list.length; i++) {
  if (list[i] === "Saule") {
    console.log(`Учитель: ${list[i]}`);
  } else {
    console.log(`Студент ${i}: ${list[i]}`);
  }
}

// console.log(list)
*/
/* Задание создать массив из чисел от 1 до 10 с помощью цикла 
for 1-10
[1,2,3,4,5,6,7,8,9,10] 

// let num = []
// for(let i = 0; i < 10; i++){
//     num[i] = i + 1
// }
// console.log(num)


// let num = []
// for(let i = 1; i <= 10; i++){
//     num[i-1] = i
// }
// console.log(num)
// num[0] = 1
// num -> [1,2,3,4,5,6,7,8,9,10]
*/

/* Задание заменить 0 на 1 - let arr = [1, 1, 1, 1, 0, 0, 0, 1, 1];
=> [1,1,1,1,1,1,1,1,1,1] 
let arr = [1, 1, 1, 1, 0, 0, 0, 1, 1]

for (let i = 0; i < arr.length; i++){
    if(arr[i]=== 0){
        arr[i] = 1
    }
}
console.log(arr)

for(let i in arr){
    if(arr[i] === 0){
        arr[i] = 1
    }
}
console.log(arr)
*/

/* Функции массива pop, push 
// arr.push("Hello")
// arr.push(true)

// arr.push(10n) // bigInt

// arr.push(undefined)
// arr.push(null)

let arr = [1,2,3,4,5]

arr.push(10)
arr.push(20)
arr.push(20)
arr.push(20)
console.log(arr)

arr.pop()
arr.pop()

console.log(arr)
*/

/* undefined vs null
// let a = null // typeof => null - не существует

// undefined - вы не присвоили значение
let b 

let arr = []

console.log(b) // undefined
console.log(arr[10]) */

// let info =
//   "My name is Saule. I am 23 years old. I work as a software engineer.";

// console.log("Изначально:", info);
// console.log(info.toUpperCase()); // все в большие буквы
// console.log(info.toLowerCase()); // все в маленькие буквы

// console.log(info.includes("lakndlknasl")); // true если мини текст есть в стринге, false если нет

const list = [
  "Казбаев Валихан",
  "Балкенов Диас",
  "Калиев НАРИМАН",
  "Ergazin Ermek Dauletovich",
  "Абилдиева Анель",
  "Миллиардова Жанель",
];

// if (list.includes("Балкенов Диас")) {
//   console.log(true);
// }

let searchValue = "Saule"
console.log(searchValue.slice(0,3))

for(let i in list){
    if(list[i].toLowerCase().includes(searchValue.toLowerCase())){
        console.log("Вы были найдены в списке")
        break
    }
}

for( let element of list){
    console.log(element)
}

for( let element in list){
    console.log(element)
}


// for для массива, проходитесь по каждому элементу массива, и если этот элемент включает себя ваше имя то говорите true и останавливаетесь
// "Валихан" - true
// "Saule" - false
