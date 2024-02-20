import './App.css';
import Button from './components/Button';

function App() {
  const handleClick= () => {
    alert("hello!")
  }

  return (
    <div className="App">
      <Button onClick={ ()=>{console.log("Hellloo")} }/>
      <Button onClick={ ()=> {alert("My name is Saule!!!")} }/>

      <Button onClick={handleClick}/> 


      {/* <Button message="Hello my name is Saule!"/>
      <Button message="Text!"/>
      <Button message="alooooo"/> */}
    </div>
  );
}

export default App;

// props - string, number, boolean, {...product}
// props - function