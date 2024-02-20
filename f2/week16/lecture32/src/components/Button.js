export default function Button({ onClick }) {
  return (
    <>
      <button onClick={onClick}>Test</button>
    </>
  );
}

// если пропс эта функция и привязана к событию то:
    // она должна начинаться с "on"
