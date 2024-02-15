import "./App.css";

function App() {
  let products = [
    { title: "Рюкзак", price: 25000, isAvailable: false },
    { title: "Портфель", price: 15000, isAvailable: true },
  ];
  return (
    <div className="App">
      <h1> Список доступных товаров:</h1>
      <ol>
        {products.map((product) => (
          <>
            <li
              className={product.isAvailable ? 'active' : 'notActive'}
              style={
                product.isAvailable ? { color: "white" } : { color: "red" }
              }
            >
              {product.title} {product.price} tg{" "}
              {product.isAvailable ? "ДОСТУПНО" : "НЕТ В НАЛИЧИИ"}
            </li>
            {/* {product.isAvailable === true ? (
              <li>
                {product.title} {product.price} tg
              </li>
            ) : (
              <></>
            )} */}
            {/* {product.price > 20000 ? (
              <li>
                {product.title} {product.price} tg
              </li>
            ) : (
              <></>
            )} */}
          </>
        ))}
      </ol>
    </div>
  );
}

export default App;

// условие могут разные
// использовать прям внутри тега для отображения разного контента тэга
// или возвращать обсолютно разные элементы в зависимости от условия (<li> или <>)
// влиять на стили в зависимости от уловии