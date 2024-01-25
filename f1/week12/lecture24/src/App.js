// import { List } from './List'

// import { Item } from './components/List'
// import ItemList from './components/List'

// import {Title} from './components/Title'
import ToDoList from './components/TodoList';

// root component
function App() {
  return (
    <div className="App">
      <ToDoList/>
      {/* <img src=''/>
      <button onClick=""></button>
      <Title/>
      <ItemList/> */}
    </div>
  );
}

export default App;

// JSX = HTML+JS
// JSX - возвращать один корневой элемент
// иначе выйдет такая ошибка: JSX expressions must have one parent element

// Fragment: <></>

// camelCase naming convention - onClick, className

// все теги должны закрываться
// ошибка если <img src=''>
// надо <img src=''/>



// Задание 1: разделить код и использовать импорте экспорт

// export default/named
// default - без {} при импорте, 
// название импортируемой компоненты может быть разным

// default export - может быть только один в файле
// а named export - могут быть несколько

// Задание 2: использовать default и named экспорт
// и импортировать их
