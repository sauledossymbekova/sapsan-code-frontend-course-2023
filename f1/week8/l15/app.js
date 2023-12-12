/* spread operator - expands - example to create new array

let arr = [1,2,3,4]
let secondArr = [5, 6, 7, 8]

let newArr = [...arr, ...secondArr, 9, 10] // -> ...arr -> 1, 2, 3, 4
console.log(newArr)
*/

/* Задание существуют список студентов где нет вас, 
вы должны создать новый список который включает всех из старого списка и вас
let list = []
let newList // list, Saule */

/* rest operator - collects - example with function arg */
/* Пример: Вычисляем сумму
1, 2, 3, 4 - 10
10, 10 - 20 
function sum(...nums) {

  let result = 0;
  for (num of nums) {
    result += num;
  }

  console.log(result)
}

sum(1,2,3,4) // => [1,2,3,4]
sum(10,10) // => [10, 10]
*/

/*Задание: 1,2,3,4 => [2,4,6,8]
//double(3,4,5) => [3,4,5] // => [6,8,10]

function double(...nums){

    let result = []

    for(element of nums){
        result.push(element*2)
    }

    console.log(result)
}

double(1,2,3,4) // [1,2,3,4]
*/

// for in
// for of
/*let arr = ["Saule", "Bibigul", "Erkezhan", "Madina", "Nurassyl", "Nurgazy"]

for (i in arr){
    console.log(i)
}

for (el of arr){
    console.log(el)
}*/

// shift, splice with indexof

/*let arr = ["Bibigul", "Erkezhan", "Madina", "Nurassyl", "Nurgazy"]
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)

arr.splice(0, 1) // удаляет элемент под 0 индексом
console.log(arr)

console.log(arr.indexOf("Erkezhan")) // находить индекс элемента в списке

let studenList = ["Bibigul", "Erkezhan", "Madina", "Nurassyl", "Nurgazy"];
console.log(studenList)
let deleteBtn = document.querySelector(".delete");
let deleteInput = document.querySelector(".delete-value");

function deleteStudent() {
    let student = deleteInput.value

  let index = studenList.indexOf(student); // 0
  studenList.splice(index, 1);

  for (student of studenList) {
    let p = document.createElement("p");
    p.textContent = student;
    document.body.append(p);
  }
}
*/
/* map 
function double(number) {
  return number * 2;
}

const numbers = [5, 2, 7, 6];

const doubled = numbers.map(double);
console.log(doubled);
*/

/* filter 
function isLong(city) {
  return city === "London"
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];

const longer = cities.filter(isLong);
console.log(longer);
*/

let arr = ["Bibigul", "Erkezhan", "Madina", "Nurassyl", "Nurgazy"]

console.log(arr)
console.log(arr.toString())


const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",");
console.log(data,cities)

const commaSeparated = cities.join(",");
console.log(commaSeparated)

// превращать строку в массив и наоборот, split and join

