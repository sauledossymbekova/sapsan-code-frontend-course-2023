export default function ButtonExample({ message }) {
  const handleScroll = () => {
    console.log(message);
  };

  return (
    <>
      <button onClick={handleScroll}> Test</button>
    </>
  );
}

// функции обработчики событий
// начинаться со слова handle
