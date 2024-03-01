import "./App.css";
import ProductList from "./components/ProductList";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const manProducts = data.filter(
    (product) => product.category === "men's clothing"
  );

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Одежда для мужчин</h1>
          <ProductList list={manProducts} />
          {/*<h1>Одежда для женщин</h1>
            <ProductList list={womenProducts} /> */}
        </div>
      ) : (
        <div>
          <label>
            Email:
            <input onChange={() => {}} />
          </label>
          <label>
            Password:
            <input onChange={() => {}} />
          </label>
          <button onClick={() => setIsLoggedIn(true)}>Войти</button>
        </div>
      )}
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
