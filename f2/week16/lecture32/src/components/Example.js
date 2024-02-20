import './App.css';

function Example() {
  {/* можно,сомнительно */}
  function myFunction1(){
    console.log("Test #3")
  }

  {/* top, rjulf*/}
  const myFunction2 = () => {
    console.log("Test #4")
    console.log("Привет")
  } 

  return (
    <div className="App">
      {/* можно,сомнительно */}
      <button onClick={ function(){console.log("Test1")} }> Click </button>
      
      {/* top */}
      <button onClick={ () => {console.log("Test2")} }> Click #2 </button>
      
      <button onClick={myFunction1}> Click #3</button>
      <button onClick={myFunction2}> Click #4</button>

      {/* Error */}
      {/* <button onClick={myFunction2()}> Click #4</button> */}

    </div>
  );
}

export default Example;

// onclick - error
// onClick - ok

// side effects - сторонние эффекты, requests to backend

/*
// функции с названием
function myApp(){
  console.log("Hello")
}

myApp()

const myApp2 = () => {console.log("Hello")}
myApp2()

// функции без названия
function (){
  console.log("Hello")
}

() => {console.log("Hello")}

button.addEventListener("click", function (){
  console.log("Hello")
}) - ok

button.addEventListener("click", () => {console.log('Hello')}) - ok

button.addEventListener("click", myApp) - ok

button.addEventListener("click", myApp()) - error
*/