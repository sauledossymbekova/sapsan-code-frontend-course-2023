/*number, symbol, string, boolean, bigInt, undefined, null

// let a = null 

let num
console.log(num)

num =10
console.log(num)
*/

/* ARRAYS МАССИВЫ
// syntax: let/const/var = []; в [] ставите элементы

// create array

// let animals = []
// 0 1 2 3
let animals = ["cat", "dog", "dolphins", "rats"]
let numbers = [10, 20, 30, 40, 50, 60, 70]
let isStudent = [true, false, true, true]

console.log(animals)

console.log(animals[0], '0')
console.log(animals[1], '1')
console.log(animals[2], '2')
console.log(animals[3], '3')

console.log(animals[4], '4') // undefined
console.log(animals.length, 'длина массива') // 4 animals.length = 4 => animals[4] => undefined

let fruits = ["Яблоко", "Апельсин", "Слива", "ahdbk", "adjknans", "kjsbdkjc", "kjaskjd", "LAST"];

console.log(fruits[fruits.length - 1])
*/

/* Задание: создать массив, показать в консоли первый элемент и последний элемент
let number = [10,20,30,40,50]
console.log(numbers[number.length - 1 ]) */

// let arr = [undefined, null, false, true, 1, 0, -0, -1, 10n, "", "text"];

/* Массив и циклы
let names = ["Saule", "Talgat", "Balabay", "Aidarkhan", "Madina", "Bibigul", "Nurassyl"];

console.log(names)

for (let i = 0; i < names.length; i++){
    if(names[i] ==="Saule"){
        names[i] = 'УЧИТЕЛЬ'
    }
    console.log(`${names[i]}`)

    // console.log(`Ученик ${i+1}: ${names[i]}`)
}
console.log(names)
*/

/* Задание создать массив из чисел от 1 до 10 с помощью цикла 
for 1-10
number = [1,2,3,4,5,6,7,8,9,10] 

let numbers = []

for (let i = 0; i < 10; i++){
    numbers[i] = i + 1 // i=0 => numbers[0] = 1
}

// for (let i = 1; i <= 10; i++){
//     numbers[i-1] = i // i=1 => numbers[0-1] = 1 -> numbers[0] = 1
// }

console.log(numbers)
*/

/* Задание заменить 0 на 1 - let arr = [1, 1, 1, 1, 0, 0, 0, 1, 1]; 
let arr = [1, 1, 1, 1, 0, 0, 0, 1, 1];

for (let i = 0; i < arr.length; i++){
    if(arr[i]=== 0){
        arr[i] = 1
    }
}

console.log(arr)

for (let i in arr) {
    if(arr[i]===0){
        arr[i] = 1
    }
}

console.log(arr)
*/

// console.log(arr);
/* Задание создать массив и показать каждый элемент с помощью цикла только с конца до начала массива

let arr = [1, 0, -0, -1, true, "Bibigul", null, undefined, ""];
console.log(arr);

arr.push("Saule"); // добавляет в конец массива
console.log(arr); // удаляет последний элемент массива

arr.pop()

console.log(arr);
*/

/* Задание создать массив из чисел от 1 до 10 с помощью цикла и метода push*/

// let info = "My name is Saule. I am 23 years old. I work as a software engineer."
// console.log(info.toUpperCase())
// console.log(info.toLowerCase())
// console.log(info)

// console.log(info.includes("Saule")) // true

let list = ["Алдабергенов Балабай","Murat Nurassyl", "Aбдыраимова Бибигуль", "Асубаева Еркежан", "Курманов Талгат","Дакеева Мадина","Матенов Нургазы Асенбаевич","Ахметжанов Айдархан"]
let paragraph = document.createElement("p")
paragraph.textContent = `Мой массив: ${list}`
paragraph.style.background = "beige"
document.body.append(paragraph)

let userValue = document.querySelector(".userValue")
let includeBtn = document.querySelector('.includes')
let sliceBtn = document.querySelector('.slice')

includeBtn.addEventListener('click', function(){
    let result = list.includes(userValue.value)
    let paragraph = document.createElement("p")
    paragraph.textContent = result ? `${userValue.value} есть в списке` : "этого человека нет в списке" 
    result ? paragraph.style.color = "green" :  paragraph.style.color = "red"
    document.body.append(paragraph)
})

// console.log(list.includes("Балабай")) // false
// console.log(list.includes("Алдабергенов Балабай")) // true
// let searchValue = "Балабай"

// for (let element in list){
//     if(list[element].toLowerCase().includes(searchValue.toLowerCase())){
//         console.log('Да ты есть в списке')
//         break
//     }
// }

// показать все типы undefined, null, string, number, boolean, bigInt, Symbol, Object - []
// .includes()
// .indexOf()

// A - 0, i - 1, d -2, a -3, r - 4, k- 5
let firstname = "Aidarkhan"
console.log(firstname.indexOf("khan"))
// console.log(firstname.slice(5))
console.log(firstname.slice(0,5))

/* .slice()
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"
*/
// toLowerCase()
// toUpperCase()
// replace()

// let arr = [true, false, 1, "", null, undefined, 2, "text", []];
// built in functions for array, pop, slice, filter, map, concat, shift, unshift, foreach
