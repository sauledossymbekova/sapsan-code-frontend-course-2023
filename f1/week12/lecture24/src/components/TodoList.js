export default function ToDoList() {
  const list = ["Сделать уборку", "Сделать домашнее задание", "Покушать"];
  const newList = [
    {
      title: "Сделать уборку",
      description: "надо сделать до завтра",
      isDone: true,
    },
    {
      title: "Сделать домашнее задание",
      description: "и надо отправить учителю",
      isDone: true,
    },
    { title: "Покушать", description: "не забыть!", isDone: true },
  ];

  return (
    <>
      <ol>
        {newList.map((element) => (
            <li>
                <h5>{element.title}</h5>
                <p>{element.description}</p>
            </li>
        ))}
      </ol>
    </>
  );
}
