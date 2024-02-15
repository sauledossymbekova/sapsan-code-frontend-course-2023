import "./App.css";
import ProductList from "./components/ProductList";
import { data } from "./data";

function App() {
  const manProducts = data.filter(
    (product) => product.category === "men's clothing"
  );

  const womenProducts = data.filter(
    (product) => product.category === "women's clothing"
  );

  const jeweleryProducts = data.filter(
    (product) =>
      product.category === "jewelery" || product.category === "electronics"
  );

  const result = data.filter((product) => !(product.rating.count > 300));

  console.log("render");
  return (
    <>
       <h1>Ювелирные украшения</h1>
      <ProductList list={jeweleryProducts} />
      <h1>Одежда для мужчин</h1>
      <ProductList list={manProducts} />
      {/*<h1>Одежда для женщин</h1>
      <ProductList list={womenProducts} /> */}
    </>
  );
}

export default App;

// 1 || 1 -> 1
// 0 || 1 -> 1

// 0 false, 1 true, 2 3 4 5 6 7 8 9 - true
// "" false, "kajn" "a" - true

// x(a+b) = xa +xb
// xa+b

// 1 0
/* AND
1 & 0 -> 0
0 & 1 -> 0
1 & 1 -> 1
0 & 0 -> 0 */

/* OR
  1 | 0 -> 1
  0 | 1 -> 1
  1 | 1 -> 1
  0 | 0 -> 0
*/

/* NOT
!1 -> 0
!0 -> 1 */

/* NAND - NOT AND - 
1 & 0 -> 0 + not -> 1
0 & 1 -> 0 + not -> 1
1 & 1 -> 1 + not -> 0
0 & 0 -> 0 + not -> 1 */

// NOR - NOT OR

//XOR, NXOR

// && - AND (чай и кофе)
// || - OR (чай или кофе)

// ! - NOT (чай)

// показать списко электроник, дешевых вещей цена<50

// key - уникальным,
// использоваться только в отображении списков,
// и может повторяться если это отдельные блоки
// прописываем только внутри мап и тд
// в самой компоненте как пропс не надо получать key
// если нужно внутри <></> то используем так: <Fragment key={product.id}>

// Задание div.app -> Container с children

// props

// parent -> children

// component tree

// Задание создать компоненту Product Photo
// в него должно передаваться пропсы юрл картинки и размер картинки

// Задание взять данные с data.js
// для кажлого элемента в data отрисовывать ProductCard
