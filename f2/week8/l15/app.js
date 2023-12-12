/* spread operator - expands - example to create new array 

let oldArray = [1,2,3,4]

let newArray = [...oldArray, 5, 6, 7] // [1, 2, 3, 4, 5, 6,7]

console.log(newArray)

const letters = ['a', 'b', 'c', 'd']

const arr = [...letters, ...newArray, 'A', 'B', 'C']
*/

/* Задание существуют список студентов где нет вас, 
вы должны создать новый список который включает всех из старого списка и вас
let list = ['Narima', 'Valikhan']
let newList // list, Saule */

/* for in, for of
let list = ["Zhanel", "Aron", "Dias", "Anel", "Valikhan", "Nariman"]
let newList = [...list, "Saule"]

// for(let i = 0; i< newList.length; i++){
//     console.log(newList[i])
// }

for (i in newList){
    console.log(i)
}

for (element of newList){
    console.log(element)
}*/

/* rest operator - collects - example with function arg */

/* Пример: Вычисляем сумму
1, 2, 3, 4 - 10
10, 10 - 20 

function sum(...nums) {

  let result = 0;
  for (element of nums) {
    result += element; // 0+1= 1    1+2=3     3+3=6    6+4=10
  }

  console.log(result)
}

sum(1,2,3,4) // => [1,2,3,4]

sum(10,10) // => [10, 10]
*/

/*Задание: 1,2,3,4 => [2,4,6,8]
// double(1,2,3,4) -> [2,4,6,8] в консоли выходит массив, 
// элемент каждого в два раза больше чем цифры которые передали в функцию 
// double(10,10) -> [20,20]


function double(...nums){

    let result = []

    for(element of nums){
        result.push(element*2)
    }

    console.log(result)
}

double(1,2,3,4) // [2,4,6,8]
double(10,10) // [20,20]

let arr = []
arr.push("Saule")
arr.push("Aidar")
console.log(arr)
*/

/* Немножко о цункциях
function sum(num1, num2){
    return num1+num2
}

let result = sum(10,100) //110
console.log(sum(7,10)) // 17
*/

/* push pop shift unshift
// let arr = [1,2,3]

// arr.push(1)
// arr.push(2)
// arr.pop()

// let a = arr.shift()
// console.log(a)

// let b = arr.unshift(0) // [0,1,2,3] -> 4
// console.log(b)

// console.log(arr)
// arr.unshift(0)
// console.log(arr)
*/

/* shift, splice with indexof

let list = ["Zhanel", "Aron", "Dias", "Anel", "Valikhan", "Nariman"]
console.log(list.indexOf("Saule")) // находить индекс элемента в списке

list.splice(0, 3) 
// первое(0) - индекс с которого хотите начинать удалять
// второе(3) - количество элементов которое хотите удалить
console.log(list)
arr.splice(0, 1) // удаляет элемент под 0 индексом
*/

/* Задание написать функцию удаления студента из списка
deleteStudent() // передаете имя студента и он удаляет его из списка и возвращает новый список 

let studenList = ["Zhanel", "Aron", "Dias", "Anel", "Valikhan", "Nariman", "Saule"];

function deleteStudent(studentName){
    let index = studenList.indexOf(studentName)
    studenList.splice(index, 1)
}

deleteStudent("Saule")
deleteStudent("Zhanel")
deleteStudent("Aron")
console.log(studenList)
*/

/* Удаления вместе с хтмл
let studenList = ["Zhanel", "Aron", "Dias", "Anel", "Valikhan", "Nariman", "Saule"];

let h5 = document.createElement("h5");
h5.textContent = studenList;
document.body.append(h5);


let deleteBtn = document.querySelector(".delete");
let deleteInput = document.querySelector(".delete-value");

function deleteStudent() {
  let student = deleteInput.value;

  let index = studenList.indexOf(student); // 0
  studenList.splice(index, 1);

  let p = document.createElement("p");
  p.textContent = `ОБНОВЛЕННЫЙ СПИСОК: ${studenList}`;
  document.body.append(p);
}
*/

/* map 
function double(number) {
  return number * 2;
}

const numbers = [5, 2, 7, 6];

const doubled = numbers.map(double);

console.log(numbers);
console.log(doubled); // [10,4,14,12]
*/

/* filter 

function isLong(city) {
  return city.length > 8
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];

const longer = cities.filter(isLong);
console.log(longer);
*/

// превращать строку в массив и наоборот, split and join

// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

// let arr = data.split(",")
// console.log(arr) // ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']

// let value = arr.join("|")
// console.log(value)

let arr = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle']
console.log(arr)
let value = arr.toString() // Manchester,London,Liverpool,Birmingham,Leeds,Carlisle
console.log(value)