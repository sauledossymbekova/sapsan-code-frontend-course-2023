export default function Button({ onButtonClick }) {
    
  return (
    <>
      <button onClick={onButtonClick}>My Button</button>
    </>
  );
}

// App -> Button передаем функцию

// пропс который является функцией начинаем со слова - on