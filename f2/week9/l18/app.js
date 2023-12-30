// литералы - object literals

const person1 = {
  firstname: "Saule",
  surname: "Doss",
  age: 23,
  status: "teacher",
  greeting() {
    console.log(`Привет меня зовут ${this.firstname}`);
  },
};

const person2 = {
  firstname: "Ermek",
  surname: "Ergazin",
  age: 25,
  status: "student",
  greeting() {
    console.log(`Привет меня зовут ${this.firstname}`);
  },
};

const person3 = {
  firstname: "Zhanel",
  surname: "$$$$",
  age: 22,
  status: "student",
  greeting() {
    console.log(`Привет меня зовут ${this.firstname}`);
  },
};

const person4 = {
  firstname: "Valikhan",
  surName: "",
  age: 2,
  status: "student",
  greeting() {
    console.log(`Привет меня зовут ${this.firstname}`);
  },
};

person4.firstname

// функция которая создает людей по определенному шаблону - конструктор
function Person(name, surname, age, status) {
  this.firstname = name;
  this.age = surname;
  this.status = age;
  this.surname = status;

  this.greeting = function () {
    console.log(`Привет меня зовут ${this.firstname}`);
  };
}

let ermek = new Person("Ermek", "Ergazin", 25, "student");
ermek.firstname

// неэффективно
// ermek.firstname = "Ermek"
// ermek.age = 25

let zhanel = new Person();
let saule = new Person();
let valikhan = new Person();
console.log(ermek);
console.log(zhanel)

// let obj  = {}
let obj = new Object()

let _name = "Saule"
console.log(_name.toUpperCase())

// let _name = new String()

function Object(){

}

/* async 
btn.addEventListener("click", () => {
    alert("You clicked me!");
  
    let pElem = document.createElement("p");
    pElem.textContent = "This is a newly-added paragraph.";
    document.body.appendChild(pElem);
  });
*/

// json

// fetch

fetch("https://jsonplaceholder.typicode.com/posts")
