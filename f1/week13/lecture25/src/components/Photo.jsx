import './Photo.css'

export default function Photo({ url, altText, description }) {
  //   let url =
  //     "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg";
  //  const style = {color: 'red'}
  //   const image = {
  //     url: "https://i.pinimg.com/736x/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg",
  //     text: "cute cat",
  //   };
  function clickMe() {
    alert("Ты Кликнул меня!");
  }

  return (
    <>
      <img src={url} alt={altText} width="200" className="photo"/>
      <p className='description'>{description}</p>
      <div>
        <button onClick={clickMe}>Click Me</button>
      </div>
    </>
  );
}
