import Photo from "./Photo";

export default function PhotoList() {
  const list = [
    {
      url: "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg",
      altText: "cute cat",
      description: "This is my cute cat",
    },
    {
      url: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
      altText: "cute dog",
      description: "Look at my friends dog",
    },
    {
      url: "https://i.pinimg.com/736x/e6/6a/ac/e66aac184ab665b01ec3e2d18d5fb829.jpg",
      altText: "capibara",
      description: "Crazy capibara",
    },
  ];

  return (
    <>
      <h3>Фотографии моих животных:</h3>
      {list.map((element) => (
        <Photo
          url={element.url}
          description={element.description}
          altText={element.altText}
        />
      ))}
    </>
  );
}
