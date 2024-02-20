export default function ButtonExample({message}) {

  const handleMyClick = () => {
    alert(message);
  };

  return (
    <>
      {/* <button onClick={() => alert(message)}>My Button</button> */}
      <button onClick={handleMyClick}>My Button</button>
    </>
  );
}

// все функции обработчики событии начинаются со слова handle

// props - {message, title, image,    ..., children}
//
