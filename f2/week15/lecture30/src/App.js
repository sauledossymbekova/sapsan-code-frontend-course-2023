import "./App.css";

function App() {
  const products = [
    { title: "Рюкзак", price: 25000, isAvailable: false },
    { title: "Портфель", price: 15000, isAvailable: true },
  ];

  return (
    <div className="App">
      <ol>
        {products.map((product) => (
          <>
            <li
              className={product.isAvailable ? 'active' : 'notActive'}
              // style={
              //   product.isAvailable ? { color: "green" } : { color: "red" }
              // }
            >
              {product.title} {product.price} тг
              {product.isAvailable ? "ДОСТУПНО" : "НЕТ В НАЛИЧИИ"}
            </li>

            {/* {product.isAvailable ? (
              <li>
                {product.title} {product.price} тг
              </li>
            ) : (
              <></>
            )} */}

            {/* {product.price > 20000 ? (
              <li>
                {product.title} {product.price} тг
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