let otvet = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(otvet, "первый консоль"); // обрабатывается

// then - успешный ответ есть

// так плохо, потому что будет then внутри then внутри then
/*
otvet.then((response) => {
    let otvetVJson = response.json()
    otvetVJson.then((info) => {
        console.log(info, "то что мы уже превратили в json формат")


        // 
    })
}) 
*/
// 1
// 1 => 2
// 1 => 2 => 3 //

// так правильно так как читать
/*
otvet
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((responseJSon) => {
    console.log(responseJSon[0].title);

    // покажи информацию о постах в хтмл параграфах
  })
  .catch(() => {
    console.log("Извините, какая то ошибка..");

    // покажи текст ошибки в параграфе
  })
  .finally(() => {
    console.log("Я закончила работу с сервером...");
  });
*/
// let person ={name: "Saule"}
// person.name

// function(response){
//     return response.json()
// }

// console.log(otvet, "третяя консоль");
// 1 3 2

/*
console.log("1")
setTimeout(()=> {console.log("2")})
console.log("3")
// 1 3 2
*/

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

let button = document.getElementById("getPhoto")
button.addEventListener("click", poluchitPhoto)


// fake api - от того что будете делать на сайте, какой сайт
// 