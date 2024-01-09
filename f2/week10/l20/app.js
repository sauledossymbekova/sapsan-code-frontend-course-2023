// fetch("https://jsonplaceholder.typicode.com/posts")

/* прошлый урок 
console.log("1")
setTimeout(()=> {console.log("2")}) // 0ms
console.log("3")
// 1 2 3
// 1 3 2
*/

// pending - когда ответ от запроса в обработке
// fulfilled - когда ответ от запроса закончился

// когда от запроса ответ успешный
/*
let zapros = fetch("https://jsonplaceholder.typicode.com/posts");
// ...
console.log(zapros); // pending

zapros
  .then((otvet) => {
    // console.log(zapros) // это сам промис, у него есть состояния и ответ
    console.log(otvet); // то что всегда прилетает в первом then от запроса
    return otvet;
  })
  .then(() => console.log(" второй зен"))
  .then(() => {}); // срабатывает
*/
/*
let meJSon = {
  "firstname": "Saule",
  "isStudent": true,
};
meJSon.firstname

let meJSon2 = [
  {
    "firstname": "Saule",
  },
  {
    "firstname": "Saule",
  },
];

for(element of meJSon2){
    console.log(element)
}

let meJson3 = ""
*/
/*
function showResult(text) {
  // for(el of otvetVJson){
  //     console.log(el.title)
  // }
  let result = document.getElementById("result");
  result.textContent = text;
}

console.log("Fetch начался 1");
let zapros = fetch("https://jsonplaceholder.typicode.com/posts");

console.log("2");
// цепочка из then
zapros
  .then((otvet) => {
    console.log("3");
    return otvet.json();
  })
  .then((otvetVJson) => {
    showResult(otvetVJson[0].title);
    console.log("4");
  })
  .catch(() => {
    let result = document.getElementById("result");
    result.style.color = "red";
    result.textContent = "Произошла непонятная ошибка";
    console.log("Произошла непонятная ошибка")
  })
  .finally(() => {
    console.log("срабатывает всегда")
  });

console.log("5");
*/

// 1 2 5 3 4 срабатывает всегда - это если успешный запрос
// 1 2 5 Произошла непонятная ошибка срабатывает всегда- это если НЕ успешный запрос

function putImageInHtml(photos){
    for(photo of photos){
        // dom method
        // как создать картинку в хтмл через js
        const result = document.createElement("div")
        const image = document.createElement('img');
        image.src = photo.url
        image.width = "400"
        image.height = "400"
        result.appendChild(image);
        document.body.append(result)
    }
}

function poluchitPhoto() {
  let zapros = fetch(
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
  );

  zapros
    .then(otvet => otvet.json())
    .then(otvetZaprosaVJson => {
      console.log(otvetZaprosaVJson);

      putImageInHtml(otvetZaprosaVJson.photos)
    })
    .catch(e => {
        console.log("вышла какая-то ошибка", e)
    })
    // .finally()
}

// poluchitPhoto()

let getPhotoButton = document.getElementById("getPhoto")
getPhotoButton.addEventListener("click", poluchitPhoto)

// искать бэкенд - fake api photos, products, 
// функцию чтобы достать эти данные
// функцию чтобы работать с хтмл