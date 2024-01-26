// import './Photo.css'

export default function Photo({url, altText, title, description}) {
  // const image = {
  //   url: "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg",
  //   altText: "cute cat",
  //   description: "This is my cat",
  // };

  return (
    <>
      <img src={url} alt={altText} width="200" style={{borderRadius: '50'}}/>
      <h1>{title}</h1>
      <p>{description}</p>

      <div>
        <button>click me</button>
      </div>
    </>
  );
}
