/* литералы
let person = {
  firstname: "Saule",
  age: 23,
  greeting() {
    console.log("Hello");
  },
  lang: ["kz", "ru", "en"],

  cat: {
    name: "ryzhik",
    age: 7,
    tsarapatsya() {
      console.log("myyaaaaau");
    },
  },
};
*/

/* что такое for in
// let arr = ["Saule", "Madina", "Bibigul"]
// for (let i in arr){
//     console.log(i)
// }

// for (let i in person){
//     console.log(i)
// }
*/

// for in for objects
// show prototypes
// hasOwnProperty for objects
// prototyping
/*
let person = {
  firstname: "Saule",
  age: 23,
  lang: ["kz", "ru", "en"],
  greeting() {
    console.log("Hello");
  },
};
console.log('age' in person)
console.log('toString' in person)

console.log(person.hasOwnProperty("age")) // true
console.log(person.hasOwnProperty("toString")) // false
*/

/* JS constructors
let person = {
  firstname: "Saule",
  age: 23,
  lang: ["kz", "ru", "en"],
  height: "175cm",
  greeting() {
    console.log("Hello");
  },
};

let person2 = {
    firstname: "Balabay",
    age: 25,
    lang: ["kz", "ru", "en", "de"],
    height: "175cm",
    greeting() {
      console.log("Hello");
    },
};

let person3 = {
    firstname: "Madina",
    age: 20,
    lang: ["kz", "ru"],
    height: "175cm",
    greeting() {
      console.log("Hello");
    },
};

String() 
Boolean()
let myObject = new Object()

function Person(){
    this.firstname = undefined
    this.age = undefined
    this.height = ""
    this.greeting() = function() {
        console.log("Hello");
    }
}

let person1 = new Person()
person1.firstname = "Saule"

let person4 = new Person()
person4.firstname = "Madina"

let person5 = new Person()
*/

// work with objects make a constructor
// JSON

// console.log("Hello")
// alert("Нотификация!")

// console.log("How are you?")

// btn.addEventListener("click", () => {
//     alert("You clicked me!");
  
//     let pElem = document.createElement("p");
//     pElem.textContent = "This is a newly-added paragraph.";
//     document.body.appendChild(pElem);
//   });

fetch('https://jsonplaceholder.typicode.com/todos/1')

// [{}, {}, {}]
/* async 
btn.addEventListener("click", () => {
    alert("You clicked me!");
  
    let pElem = document.createElement("p");
    pElem.textContent = "This is a newly-added paragraph.";
    document.body.appendChild(pElem);
  });

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").textContent =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
*/
