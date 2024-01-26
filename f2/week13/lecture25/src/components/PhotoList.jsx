import Photo from "./Photo";

export default function PhotoList() {
  const list = [
    {
      url: "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg",
      title: "Это моя милая кошка",
      description: "ей 1 годик",
      altText: "cute cat",
    },
    {
      url: "https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg",
      title: "Помотри на смешную на собаку",
      description: "это собака моего друга",
      altText: "cute dog",
    },
    {
      url: "https://i.pinimg.com/736x/e6/6a/ac/e66aac184ab665b01ec3e2d18d5fb829.jpg",
      title: "Сумасшедшая Капибара",
      description: "популярна в тиктоке",
      altText: "capibara",
    },
  ];

  return (
    <>
      <h1 style={{ color: "purple" }}> Это галерея моих животных</h1>
      {list.map((element) => (
        <Photo
          url={element.url}
          description={element.description}
          altText={element.altText}
          title={element.title}
        />
      ))}
    </>
  );
}
