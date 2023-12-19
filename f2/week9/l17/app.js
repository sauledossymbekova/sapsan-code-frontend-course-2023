/* Пример с клавиатурой
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
*/

/* Пример с кнопкой 

const button = document.getElementById("button");

// button.addEventListener("click", (event) => {
//     console.log("YOU CLICKED ME", event)
// })

// button.addEventListener("click", () => {
//     console.log("Вторая версия клика")
// })

// button.onclick = (event) => {
//   console.log("YOU CLICKED ME", event);
// };

// button.onclick = () => {
//   console.log("Вторая версия клика");
// };

function clickMe() {
    console.log("YOU CLICKED ME")
}
*/

/*
const input = document.querySelector(".input")

input.addEventListener("change", (event) => {
    console.log("Ты что-то вводишь", event.target.value)
})
*/

// Примитивные типы данных: string, number, boolean, undefined, null, bigInt, symbol

// Object types - reference types
// Arrays

// let firstname = "Saule"
// let age = 23
// let isTeacher = true
// let status

// function greeting(){
//     console.log(`Привет, меня зовут ${firstname}`)
// }

// let student = {}

let person = {
    firstname: "Saule", 
    age: 23,
    isTeacher: true,
    status: undefined,
    lang: ["kaz", "rus", "eng"],
    greeting(){
        console.log(`Привет, меня зовут ${this.firstname}`)
    },

    basket: [{name: "krosovki", price: 200000}, {name: "kepka", price: 13000, color: "red"}],
    cat: {
        nick: "Barsik",
        poroda: "british",
        age: 6,
        color: "рыжий"
    }
}

// console.log(person)

// let _name = person.firstname
// console.log(_name)

// console.log(person.isStudent)
// console.log(person["age"])

// for (let key in person){
//     // console.log(key)
//     console.log(person[key])
// }

/*
person.firstname = "Aidarkhan"
person.lang.push("ukr")
person.skills = ["js", "html", "css"]

person.greeting()
*/


console.log(person.hasOwnProperty("firstname")) // true
console.log(person.hasOwnProperty("toString")) // false