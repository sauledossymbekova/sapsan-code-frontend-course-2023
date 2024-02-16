import "./App.css";

function App() {
  const products = [
    { title: "Рюкзак", price: 25000, isAvailable: false },
    { title: "Портфель", price: 15000, isAvailable: true },
    { title: "Тетрадка", price: 150, isAvailable: true },
  ];
  return (
    <div className="App">
      <ol>
        {products.map(
          (product) =>
            product.isAvailable && (
              <li>
                {product.title} {product.price}tg
              </li>
            )
        )}
      </ol>
    </div>
  );
}

export default App;

/*
условный рендеринг 

через ТЕРНАРНЫЙ ОПЕРАТОР
условие ? дествие #1(если верно) : действие #2(если не верно)

inStock ? <ProductCard /> : <></>


через ЛОГИЧЕСКИЙ ОПЕРАТОР И &&
условие && действие (если условие верно)

inStock && <ProductCard />
*/
