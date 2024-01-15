// async await

// promise

// синтаксический сахар
// fetch then catch - Promise

// customeHtmlFunctions

function getProducts() {
    // pending
  let response = fetch("https://api.slingacademy.com/v1/sample-data/products");
    console.log(response)
// let response2 = fetch("")

  response
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.products);
      // some formattingFunctions()
      // customeHtmlFunctions()
    })
    .catch((error) => {
        console.log("Произошла ошибка")
    });

    console.log("1")
    console.log("2")
}

// getProducts()

// await всегда используется внутри асинхронных функции (то есть перед словом function всегда должно быть async)
async function getProductsV2(){
    // справа от await должна быть функция которая возвращает промис
    let response = await fetch("https://api.slingacademy.com/v1/sample-data/products")
    // console.log(response)
    let responseJson = await response.json()
    console.log(responseJson)
}
// getProductsV2()


/*
try {

} catch {

}
*/

/* асинхр функция
async function getPhotos(){
    try {
        let response = await fetch("https://api.slingacademy.com/v1/sample-data/productq")


        console.log(response.ok, response)
        let responseJson = await response.json()
        console.log(responseJson, "json ответ")
    } catch {
        console.log("Произошла непонятная ошибка")
    }
}

getPhotos()
*/

const showInfo = (products, photos) => {
    products.map((product) => {
        console.log(`Продукт ${product.name} стоит ${product.price} тенге ${product.photo_url}`)
        const p = document.createElement("p")
        p.textContent = `Продукт ${product.name} стоит ${product.price} тенге`
        document.body.append(p)

        const result = document.createElement("div")
        const image = document.createElement('img');
        image.src = product.photo_url
        image.width = "200"
        image.height = "200"
        result.appendChild(image);
        document.body.append(result)
    })

    photos.map()
}


async function getInfo(){
    try {
        let responseProducts = await fetch("https://api.slingacademy.com/v1/sample-data/products")
        let responsePhotos = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")

        let productsJson = await responseProducts.json()
        let photosJson = await responsePhotos.json()

        let photos = photosJson.photos
        let products = productsJson.products

        // console.log(productsJson.products, photosJson.photos, "json ответ")

        showInfo(products, photos)
    } catch {
        console.log("Произошла непонятная ошибка")
    }
}

getInfo()

// написать пример

