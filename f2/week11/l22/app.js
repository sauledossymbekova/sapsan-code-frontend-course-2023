// async await

/* Старый способ
let response = fetch(
  "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
);
let response2 = fetch(
  "https://api.slingacademy.com/v1/sample-data/products?offset=5&limit=20"
);
console.log("1");
console.log(response);

response
  .then((a) => a.json())
  .then((json) => {
    console.log(json);
  })
  .catch(() => console.log("ошибка1"));

response2
  .then((a) => a.json())
  .then((json) => {
    console.log(json);
  })
  .catch(() => console.log("ошибка2"));
*/

/* Синтаксис и обьяснение
function simpleFunction(){
    console.log("Я простая функция")
}

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

// await должен использоваться только с async
async function getTodos() {
    // справа от await должна быть функция которая возвращает промис (асинх)
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")

    let responseJson = await response.json()

    console.log(responseJson)

    // customShowHtml()
}
// getTodos()
// console.log("1")
// console.log("2")
*/

/* ОБЫЧНЫЙ ПРИМЕР
async function getPhotos() {
    let response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=201")
    let responseJson = await response.json()

    console.log(responseJson.photos)
}

getPhotos()
*/

/* Пример с ошибкой 
async function getInfo(){
    try {
        const res = await fetch("https://api.twitter.com/1.1/statuses/update.json?include_entities=true")
        const response = res.json()

        console.log(response)
        // showHtml()
    } catch(err) {
        console.log("Не удалось получить фотографии, извините попробуйте позже", err)
    }
}

// {
//     message: "извините у этого пользователя уже есть кредит"
// }
getInfo()
*/

/* async await почему синтаксический сахар*/

// отображает картинки
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

// отображет фото продукта
const showProductsPhoto = (url) => {
  const result = document.createElement("div");
  const image = document.createElement("img");
  image.src = url;
  image.width = "200";
  image.height = "200";
  result.appendChild(image);
  document.body.append(result);
};

// отображет информацию про продукты
const showProducts = (products) => {
  // for(let product of products){
  //     const parag = document.createElement("p")
  //     parag.textContent = product.name
  //     document.body.append(parag)
  // }

  products.map((product) => {
    const parag = document.createElement("p");
    parag.textContent = `Продукт: ${product.name} стоит ${product.price} тенге`;
    document.body.append(parag);

    showPhoto(product.photo_url)

  });
};

async function getInfo() {
  try {
    console.log("запрос на продукты")
    const responseProducts = await fetch(
      "https://api.slingacademy.com/v1/sample-data/products?offset=5&limit=20"
    );
    console.log("запрос на photo")
    const responsePhotos = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
    );

    console.log("меняю на json")
    const productsJson = await responseProducts.json();
    const photosJson = await responsePhotos.json();

    console.log("пытыаюсь показать на html")
    showProducts(productsJson.products);
    putImageInHtml(photosJson.photos)
    // console.log(productsJson, photosJson);
  } catch (err) {
    console.error(
      "Не удалось получить фотографии, извините попробуйте позже",
      err
    );
  }
}

getInfo();