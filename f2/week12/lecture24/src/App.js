import { Item } from './components/List'
import MyList from './components/List'

// import Some from '../public/manifest.json'

function App() {
  return (
    <div className="App">
      <Item/>
      <MyList/>
    </div>
  );
}

export default App;

// root component - App
// компоненты могут переиспользоваться в других

// export - говорит о том,
// что этот код может использоваться в других файлах

// разделение кода нужно!

// Задание: сделать пример использования import export

// export - named/default

// default - может быть только одна в одном файле
// надо импортировать таким синтаксисом 
  // import MyList from './List'
// название когда импортируете может быть изменено


// named -  экспортов может быть много в одном файле
// надо импортировать таким синтаксисом 
  // import { Item } from './List'
// название не меняется

// Задание: сделать пример использования named/default export


