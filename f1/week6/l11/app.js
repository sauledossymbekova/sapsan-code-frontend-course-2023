/* 11 Задач */
  /* Задание найти среднее из двух чисел 
  ВВОД: 5 9 ВЫВОД: 7
  ВВОД: 3 4 ВЫВОД: 3.5
  */

  /*  Задание посчитать остаток при делении 
      и вытащить сколько нужно добавить к первому числу(если надо) чтобы делилось без остатка
      
  ВВОД: 10 7 ВЫВОД: 3
  ВВОД: 10 10 ВЫВОД: OK
  ВВОД: 7 10 ВЫВОД: 7 3

  Подсказка: если первое число больше то не надо прибавлять
  */

  /* Задание вывести правильное время
  Ввод: 7:45 pm Вывод 19:45
  Ввод: 7:45 am Вывод 07:45 */

  /* Максимум из двух чисел 1 2 - 2 */
  // Високосный год - 2007 NO, 2000 - YES
  // Максимум из трех
  // Минимум из трех

  /* ax + b = 0 вводятся a и b найти х, если х между 0-1 то вывезти -1
  если х больше 1 то вывезти 1 
  ВВОД: 6 -2 ВЫВОД: -1 (x=1/3)
  ВВОД: 1 -1 ВЫВОД: 1 (x=1)
  */

  /* Товар стоит a руб. b коп. За него заплатили c руб. d коп. Сколько сдачи требуется получить?
  ВВОД: 5 5 6 5 ВЫВОД 1 0
  ВВОД: 2 17 2 18 ВЫВОД 0 1
  */

  /* В кафе мороженое продают по три шарика и по пять шариков. Можно ли купить ровно k шариков мороженого? 
  ВВОД: 3 ВЫВОД: YES
  ВВОД: 1 ВЫВОД: NO
  */

  /* На сковородку одновременно можно положить k котлет. 
  Каждую котлету нужно с каждой стороны обжаривать m минут непрерывно. 
  За какое наименьшее время удастся поджарить с обеих сторон n котлет? 
  Вводятся 3 числа: k, m и n. Все числа не превосходят 32000.

  ВВОД: 1 5 1  ВЫВОД 10
  */

/*Домашнее задание:

Совет: прежде чем сразу брать значение с инпутов попробуйте чисто на js решать
то есть примерноо let a = 10 let b = 10 console.log(a+b)
чтобы просто понять правильно ли вы вычисляете
дальше дело красоты через getElementById, onclick, .value, .textContent будете внедрять

Примечание: значение инпутов всегда превращаете в число если речь о вычислениях
в дано кнопка sum - это <button id="sum"> Sum </button>

№1
Есть два инпута в хтмл, при нажатии на кнопку sum - 
вы должны в параграфе вытащит сумму этих инпутов

Ввод: 10 10 Вывод: 20

№2
Есть один инпут в хтмл, при нажатии на кнопку numberCheck - 
вы должны в параграфе вытащит 
    'Positive' если число положительное,
    'Negative' если число отрицательное,
    'Zero' если число равно нули

Ввод: 6 Вывод: Positive
Ввод: -100 Вывод: Negative

№3
Есть один инпут в хтмл, при нажатии на кнопку evenCheck - 
вы должны в параграфе вытащит 'Yes' если это четное, и 'No' если не четное значение инпута

Ввод: 6 Вывод: Yes
Ввод: 7 Вывод: No

Подсказка: четные на 2 без остатка делятся, остаток как находить показывала или можете загуглить

№4
Есть два инпута в хтмл, при нажатии на кнопку calculate - 
вы должны в 4 разных параграфах вытащит результат 
при плюсе, минусе, умножении и делении этих значении инпутов

Ввод: 10 10 Вывод: 20 0 100 1

№5
Есть 3 инпута в хтмл, 
    первый инпут - рост, в виде числа берете
    второй инпут - окружность талии, в виде числа берете
    третий инпут - мужчина или женщина, в виде текста Ж или М, 
    то есть когда будете потом проверять мужчина или женщина 
        проверяйте как (gender == 'М') и (gender == 'Ж')
при нажатии на кнопку getFat - 
вы должны получить процент жира в параграфе по формулам:
Мужчина: 64 − (20 × рост/окружность талии)
Женщина: 76 − (20 × рост/окружность талии)

Ввод: 165 60 Ж Вывод: 21
*/

/* ответы Домашнего задания */
// HW: 1

let inputEl1_1 = document.getElementById("input1-1");
let inputEl1_2 = document.getElementById("input1-2");

let submitEl1 = document.getElementById("sum");
let resultEl1 = document.getElementById("result1");

submitEl1.onclick = function () {
  let x = Number(inputEl1_1.value);
  let y = Number(inputEl1_2.value);
  let result = 0;

  result = x + y;

  resultEl1.textContent = result;
};

// HW: 2

let inputEl2_1 = document.getElementById("input2-1");

let numberCheckBTN = document.getElementById("numberCheck");
let resultEl2 = document.getElementById("result2");

numberCheckBTN.onclick = function () {
  let x = Number(inputEl2_1.value);
  let result;

  if (x > 0) {
    result = "Positive";
  } else if (x == 0) {
    result = "Zero";
  } else if (x < 0) {
    result = "Negative";
  }

  resultEl2.textContent = result;
};

// HW: 3

let inputEl3_1 = document.getElementById("input3-1");

let evenCheckBtn = document.getElementById("evenCheck");
let resultEl3 = document.getElementById("result3");

evenCheckBtn.onclick = function () {
  let x = Number(inputEl3_1.value);
  let result;

  if (x % 2 == 0) {
    result = "Yes";
  } else {
    result = "No";
  }

  resultEl3.textContent = result;
};

// HW: 4

let inputEl4_1 = document.getElementById("input4-1");
let inputEl4_2 = document.getElementById("input4-2");

let calculateBtn = document.getElementById("calculate");
let resultEl4_1 = document.getElementById("result4-1");
let resultEl4_2 = document.getElementById("result4-2");
let resultEl4_3 = document.getElementById("result4-3");
let resultEl4_4 = document.getElementById("result4-4");

calculateBtn.onclick = function () {
  let x = Number(inputEl4_1.value);
  let y = Number(inputEl4_2.value);

  resultEl4_1.textContent = x + y;
  resultEl4_2.textContent = x - y;
  resultEl4_3.textContent = x * y;
  resultEl4_4.textContent = x / y;
};

// HW: 5
// рост
let inputEl5_1 = document.getElementById("input5-1");
// окружность
let inputEl5_2 = document.getElementById("input5-2");
// гендер
let inputEl5_3 = document.getElementById("input5-3");

let getFatBtn = document.getElementById("getFat");
let resultEl5 = document.getElementById("result5");

getFatBtn.onclick = function () {
  let x = Number(inputEl5_1.value);
  let y = Number(inputEl5_2.value);
  let z = inputEl5_3.value;
  let result = 0;

  if(z == "М"){
    result =  64 - (20 * x/y)
  } else if(z == "Ж") {
    result =  76 - (20 * x/y)
  }

  resultEl5.textContent = result;
};
