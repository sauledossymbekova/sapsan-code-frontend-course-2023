import "./App.css";
import { data } from "./data";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState()
  const filteredList = data.filter(
    (product) => product.category === "men's clothing"
  );
  const womenProducts = data.filter(
    (product) => product.category === "women's clothing"
  );
  const cheapProducts = data.filter(
    (product) => product.price < 50 && product.category === "women's clothing"
  );

  return (
    <>


      <h1>Дешевые вещи:</h1>
      <ProductList list={cheapProducts} />

      <h1>Мужские вещи:</h1>
      <ProductList list={filteredList} />

      <h1>Женские вещи:</h1>
      <ProductList list={womenProducts} />
    </>
  );
}

export default App;

// conditional rendering

// нужно в консоли показать
// только те продукты у которых категория равна men's clothing

// key - уникальным,
// использоваться только в отображении списков,
// и может повторяться если это отдельные блоки
// прописываем только внутри мап и тд
// в самой компоненте как пропс не надо получать key
// если нужно внутри <></> то используем так: <Fragment key={product.id}>

// создать компоненту ProductPhoto
// который отвечает за отрисовку картинки
// ProductCard -> ProductPhoto
// через пропсы передавать адрес картинки, и размеры картинки

// Задание взять данные с data.js
// для кажлого элемента в data отрисовывать ProductCard

// LOGICAL OPERATORS

// product.category === "women's clothing" || "men's clothing"
// x(a*b) = xab в некоторых языках так
// x(a*b) =  xa в js так

/*0 & 1 -> 0
  1 & 1 -> 1
  1 | 1 -> 1
  0 | 1 -> 1 */

// product.category === "women's clothing" || product.category === "men's clothing" - 10
// product.category === "women's clothing" || "men's clothing" - 20
// product.category === "women's clothing" && "men's clothing" - 6 (все женские)
// product.category === "men's clothing" && "women's clothing" - 4 (все мужские)

// 0 - false, 1 - true, 2 3 4 5 6 7 8 - true
// "" - false, ";alm" - true
// "лофоыли" - true

// 0 - false
// 1 - true

/* 1 & 0 -> 0
  0 & 1 -> 0
  0 & 0 -> 0
  1 & 1 -> 1 */

/* 1 | 0 -> 1
  0 | 1 -> 1
  1 | 1 -> 1
  0 | 0 -> 0 */

// AND - И - &&
// (чай и кофе) -> 1 (обязательно должно выполниться оба условия)
// -> 0 (если только одно верно или ничего не верно)

// OR - ИЛИ - ||
// (чай или кофе) -> 1 (хотя бы одно условие должно выполнится)
// -> 0 (если он ничего не принес)

// ! - NOT - НЕ
// !1 -> 0
// !0 -> 1

// NOT AND - NAND
/* !(1 & 0) -> not 0 -> 1
  !(0 & 1) ->  not 0 -> 1
  !(0 & 0) -> not 0 -> 1
  !(1 & 1) -> not 1 -> 0*/

// NOT OR -> NOR
/* !(1 | 0 )-> not 1 -> 0
  !(0 | 1) -> not 1 -> 0
  !(1 | 1) -> not 1 -> 0
  !(0 | 0) -> not 0 -> 1*/

// XOR (чай если у тебя кофе нет, кофе если у тебя чая нет - и только так!)
// NXOR -> NOT XOR
/**
 *   const result = data.filter(
    (product) =>
      product.category === "women's clothing" ||
      product.category === "men's clothing"
  );
 */