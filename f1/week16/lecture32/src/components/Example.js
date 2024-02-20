import './App.css';

function Example() {
  // соусоу
  function myFunction(){
    console.log("hello! i am custom function!")
  }

  // это класс
  const myFunction2 = () => {
    console.log("hello! i am custom function!")
  }

  return (
    <div className="App">
      {/* это соусоу */}
      <button onClick={ function(){console.log("hello!")} }>Test #1</button>

      {/* Это класс */}
      <button onClick={ () => {console.log("hello! i am arrow function")} }>Test #2</button> 

      {/* это соусоу */}
      <button onClick={myFunction}>Test #3</button>

      {/* это класс */}
      <button onClick={myFunction2}>Test #3</button>

      {/* <button onClick={myFunction()}>Test</button> */}
    </div>
  );
}

export default App;

// onClick - ok
// onclick - error

// onClick={myFunction} - ok
// onClick={myFunction()} - error, будет выполняться сразу при рендере, не дожидаясь клика


// StrictMode - что это справшивается на собесах

/* RECALL TO FUNCTIONS IN JS
function myApp(){
  console.log("Hello")
}

myApp()

function(){
  console.log("Hello")
}

() => {console.log("Hello")}

button.addEventListener("click", myApp()) // error

button.addEventListener("click", myApp)

button.addEventListener("click", function(){
  console.log("Hello")
})

button.addEventListener("click", () => {
  console.log("Hello")
})
*/