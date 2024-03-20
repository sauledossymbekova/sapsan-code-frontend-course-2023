import { Button, Input } from "antd";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["Nariman", "Valikhan"]);
  const [newStudent, setNewStudent] = useState();

  return (
    <div className="App">
      <Input onChange={(e) => setNewStudent(e.target.value)} />

      <Button
        type="primary"
        onClick={() => {
          setList([...list, newStudent]);
        }}
      >
        Click
      </Button>

      {list.map((listItem) => (
        <p key={listItem}>{listItem}</p>
      ))}
    </div>
  );
}

export default App;
