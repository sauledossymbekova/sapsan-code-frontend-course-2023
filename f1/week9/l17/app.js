// Область видимости

/* #1
function myFunction(){
    let a = "Saule"
}

console.log(a) // ReferenceError: a is not undefined 
*/

/*2
function myFunction(){
    let a = "Saule"
    console.log(a)
}

myFunction() // "Saule"
*/

/*3
let a = "Bibigul"

function myFunction(){
    let a = "Saule"
    console.log(a)
}


myFunction()
console.log(a)
// Saule Bibigul
*/

/* Primitive data types: string, number, boolean, null, undefined, symbol, bigInt

let a = 10
let b = "Saule"
let isStudent = false

let isTeacher // undefined
*/

/* Object data types - Reference Data Types, Обьектные типы данных или ссылочные типы данных
// Array 

let arr1 = ["Saule", "Balabay"] // object data type

let arr2 = ["Saule", "Balabay"]

console.log(arr1 === arr2) // false

let name1 = "Saule"
let name2 = "Saule"
console.log(name1 === name2) // true
*/

// let firstname = "Saule"
// let age = 23
// let isTeacher = true

// function greeting(){
//     console.log(`Привет меня зовут ${firstname}!`)
// }

let person = {
  firstname: "Saule",
  age: 23,
  isTeacher: true,
  languages: ["kz", "ru", "en"],
  greeting() {
    console.log(`Привет меня зовут ${this.firstname}!`);
  },
  info: function () {
    console.log(
      `Мой возраст - ${this.age}, ${
        this.isTeacher ? "Я твой учитель" : "Я студент"
      }`
    );
  },
};

// let person2 = {
//   firstname: "Nurassyl",
//   age: 25,
//   isTeacher: false,
//   languages: ["kz", "ru", "en"],
//   greeting() {
//     console.log(`Привет меня зовут ${this.firstname}!`);
//   },
//   info: function () {
//     console.log(
//       `Мой возраст - ${this.age}, ${
//         this.isTeacher ? "Я твой учитель" : "Я студент"
//       }`
//     );
//   },
// };

// let person3 = {
//     firstname: "Bibigul",
//     age: 20,
//     isTeacher: false,
//     languages: ["kz"],
//     greeting() {
//       console.log(`Привет меня зовут ${this.firstname}!`);
//     },
//     info: function () {
//       console.log(
//         `Мой возраст - ${this.age}, ${
//           this.isTeacher ? "Я твой учитель" : "Я студент"
//         }`
//       );
//     },
//   };

/* Dote notation
console.log(person)
console.log(person.firstname)
console.log(person.age)

person.greeting()
*/

/*bracket notation
console.log(person["firstname"])
console.log(person["age"])
*/

// console.log(person.languages)

/* Меняем значения свойств в обьекте
let _name = person.firstname

console.log(_name.toUpperCase())

person.languages.push("ukr")
person.languages.pop()

person.firstname = "Madina"
person.surname = "Doss"
console.log(person)
*/

// создать себя ввиде обьекта, с новыми свойствами

// есть три студента, у каждого студента есть имя и группа, и функция которая говорит в какой он группе
// надо создать этих студентов через функцию createStudent

// let studen1 = {
//     name: "Saule",
//     group: "Ф1",
//     surname: "",
//     showGroup(){
//         console.log(`Я учусь в группе: ${this.group}`)
//     }
// }
// let studen2 = {
//     name: "Балабай",
//     group: "Ф2",
//     surname: "",
//     showGroup(){
//         console.log(`Я учусь в группе: ${this.group}`)
//     }
// }
// let studen3 = {
//     name: "Нурасыл",
//     group: "Ф1",
//     surname: "",
//     showGroup(){
//         console.log(`Я учусь в группе: ${this.group}`)
//     }
// }


/* Создаем функцию которая создает студентов
function createStudent(name, group) {
    const student = {};
    student.name = name;
    student.group = group;
    student.showGroup = function () {
      console.log(`Привет я в группе ${this.group}.`);
    };

    return student;
}
  
let student1 = createStudent("Nurassyl", "F2")
let student2 = createStudent("Bibigul", "F1")
let student3 = createStudent("Madina", "F1")

console.log(student1, student2, student3)
 */


// создание обьекта через литерал
let student1 = {
    name: "Saule",
    group: "F2",
    info(){
        console.log(`Привет я в группе ${this.group}.`)
    }
}
console.log(student1)

// Создание обьектов через конструктор new
function Student(name, group){
    this.name = name
    this.group = group
    this.info =  function(){
        console.log(`Привет я в группе ${this.group}.`)
    }
}

let student2 = new Student("Nurassyl", "F1")
console.log(student2)

// let obj = {}
// console.log(obj)

// let obj2 =  new Object()

// let firstname = "Saule"

// let firstname1 = String("Saule")
