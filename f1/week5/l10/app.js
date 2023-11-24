// > < != == >= <= || &&

/* операторы сравнения
// true
console.log(10 == 10);

// true
console.log(10 == "10");

// false
console.log(10 <= 0);

// false
console.log(10 < 0);

// true
console.log(10 > 0);

// true
console.log(10 >= 0);

// false
console.log(10 == "Saule");

// false
console.log(11 === "11");

// false
console.log(11 != "11");

// true
console.log(11 !== "11");

// не строгое сравнение 10 == "10" TRUE

// строгое сравнение 10 === "10" FALSE
*/

/* Калькулятор */
let inputEl1 = document.getElementById('input1')
let inputEl2 = document.getElementById('input2')

let plusBtn = document.getElementById('plus')
let minusBtn = document.getElementById('minus')

let submitEl = document.getElementById('submit')
let resultEl = document.getElementById('result')

let operator

plusBtn.onclick = function(){
    operator = '+'
}

minusBtn.onclick = function(){
    operator = '-'
}

submitEl.onclick = function(){
    let x = Number(inputEl1.value)
    let y = Number(inputEl2.value)
    let result = 0

    if(operator === '+') {
        result= x+ y
    } else if(operator === '-') {
        result = x-y
    }


    resultEl.textContent = result
}

// Tutorial Js Html calculator