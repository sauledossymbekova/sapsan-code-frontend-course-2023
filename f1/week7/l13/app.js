/* ADDEVENTLISTENER VS ONCLICK 
let buttonEl = document.getElementById("button")
let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")

// buttonEl.onclick =  function(){
//   result1.textContent = "Clicked BUTTON - Result 1"
// }

// buttonEl.onclick =  function(){
//   result2.textContent = "Clicked BUTTON - Result 2"
//}

function showInFirstP(){
  result1.textContent = "Clicked BUTTON - Result 1"
}

function showInSecondP(){
  result2.textContent = "Clicked BUTTON - Result 2"
}

buttonEl.addEventListener('click', showInFirstP)
buttonEl.addEventListener('click', showInSecondP)
*/

/* Пример Таблица умножения тройки - 3 6 9...30 

let num = 3;

function multiply() {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 3 = `, i * 3);
  }
}
multiply();
*/

// 4 8 16 20 - 4 multipliers

/* Обратный цикл Reverse 
// for (let i = 100; i > 0; --i) {
//   console.log(i);
// }

// Пример 5 4 3 2 1
// Задание: 10 8 6 ... 2
// 1
// for(let i = 100; i > 0; --i){
//   console.log(i)
//   --i
// }

// for (let i = 100; i > 0; --i) {
//   if(i % 2 === 0){
//     console.log(i);
//   }
// }
*/

/* Двигаться по циклу по своим шагам Cинтаксис: += -= *= /= 
for (let i = 100; i > 0; i-=2) {
  console.log(i);
}

let a = 100
console.log(a)
// a = a + 5

a+=5
a-=5
a*=5
a/=5

console.log(a)
*/

/* Цикл: break, continue - скипнуть какой-то шаг 

for(let i = 1; i <= 5; i++) {
  console.log(i);

  if (i === 3) {
    break;
  }
  
}

for(let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  
  console.log(i);
}
*/

/* WHILE
// loop

// let i = 0;

// while (i < 10) {
//   console.log(++i);
// }

// reverse loop
let i = 10;

while (i > 0) {
  i--;
  console.log(i); // i=9
}

// Syntax while(condition){ action while condition is true}

*/

/* Задание: 100 95 90 85 80 .. 0
// while (a >= 0) {
//   console.log(a);
//   a -= 5;
// }
 */
/* Задание: Выведите все точные квадраты натуральных чисел, не превосходящие данного числа N
15 - 4, 9
20 - 4 9 16
let num = 15
let i = 2

while(i*i < num){
  console.log(i*i)
  i++
}
*/

/* Полезные функции document и элементов в документе */

/* querySelector, document.createElement, document.body.append, element.style  */

/* Пример Задачи с угадыванием цифры 

let paragraph = document.querySelector(".block p")
console.log(paragraph)

let inputEl = document.getElementById("input")
let element = document.getElementById("button")

function guess(){
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let userGuess = Number(inputEl.value);

  let result = document.createElement("p")

  if (userGuess === randomNumber) {

    result.textContent = `Congratulations! You got it right! Random number was: ${randomNumber}`;
    result.style.backgroundColor = "green";
    result.style.color = "white"

  } else {
    result.textContent = `Wrong! Random number was: ${randomNumber}`;
    result.style.backgroundColor = "red";
  }
  console.log(result)

  document.body.append(result)
}

element.addEventListener('click', guess)


element.style.backgroundColor = "yellow";
element.style.fontSize = "200%";
element.style.padding = "10px";
element.style.boxShadow = "3px 3px 6px black";
*/

/* ОБЬЯСНЕНИЕ Math.floor(Math.random() * 1000) + 1
- этот алгоритм было создан для рандомизации цифр

Math.random - создает цифру от 0 до 1 такие как 0.12311 0.384011
умножаете его на 10 чтобы взять цифру больше 1,
то есть если цифра была 0.384011 она превратилась в 3.84011

затем math.floor округляет цифру до целого,то есть было 3.84011 стало 3

+1 делается для того чтобы если math.random выдаст вам цифру 0.0123 
чтобы в итоге от него тоже вышло целое число
*/

// 7 Tasks for Loop
// 1
/* Вычислите N! ("эн-факториал") N!=1∙2∙3∙…∙ N 5!= 1*2*3*4*5
есть инпут который лежит в див с классом enter, 
результат показать через document.createElement и document.body.append в параграфе
*/

// 2
/* Вычислите 2 в степени N Ввод: 4 Вывод 16 (2*2*2*2). Решать через циклы без библиотеки Math*/

// 3
/* Дано целое число, не меньшее 2. Выведите его наименьший натуральный делитель, отличный от 1.
Ввод: 15 Вывод: 3 */

// 4
/* Задание dividers: эффективно найти все делители числа 
Ввод: 10 Вывод: 2 5
Ввод: 20 Вывод: 2,4,5,10 */

// 5
/* вычисления суммы всех натуральных чисел от 1 до n
ВВОД: 3  ВЫВОД: 6 
ВВОД: 4  ВЫВОД: 10
*/

// 6
/* Cумму квадратов всех чисел от 1 до n - 1*1 + 2*2 + 3*3 +...+ n*n  Ввод 3 Вывод 14*/

// 7
/* Проверить число является ли простым, простое число делится только на 1 и на себя, например: 2 3 5 7 11 - prime numbers 
Ввод: 11 Вывод: Yes
Ввод: 4 Вывод: No
Ввод: 1 Вывод: No
*/