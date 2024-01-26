import "./App.css";
import Photo from "./components/Photo";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div className="App">
      <PhotoList />
      {/* <Photo description='Это моя милая кошка' altText='cute cat' url={'https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg'}/> */}

    </div>
  );
}

export default App;
// главный взять сайт и пататься повторить его какую часть
// 2 компоненты: которые используют пропсы


// properties = свойства = props

// <></> -- React Fragment

// class -> className
// onclick -> onClick -
// и все остальные свойства атрибуты поменяеются на camelCase

// добавить стили
// import './App.css';

// inline style - attribute style={{}}
// backgroundColor
// style={{backgroundColor: 'blue'}}

// создать компоненты и передавать в него пропсы
