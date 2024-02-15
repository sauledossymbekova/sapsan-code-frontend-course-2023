import "./App.css";

function App() {
  let products = [
    { title: "Рюкзак", price: 25000, isAvailable: false },
    { title: "Портфель", price: 15000, isAvailable: true },
    { title: "Тетрадь", price: 150, isAvailable: true },
  ];

  return (
    <div className="App">
      <ol>
        {products.map((product) => product.isAvailable && (
          <>
            <li>
              {product.title} {product.price} tg{" "}
            </li>
          </>
        ))}
      </ol>
    </div>
  );
}

export default App;
/*
(условие && условие2 && условие3) ? действие #1 : действие #2 - условный рендеринг через тернарный оператор
<></>

условие && действие если условие верное

inStock ? <ProductCard/> : <></>
  if(условие){
    действие
  } else {
    действие иначе
  }


inStock && <ProductCard/>
if(условие){
  действие
}


// false - false, undefined, 0, null, ""
// true - true, "sau", 4, */
