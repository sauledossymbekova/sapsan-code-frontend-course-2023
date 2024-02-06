export default function ProductPhoto({
  url,
  width = "200",
  height = "200",
  alt,
}) {
  return (
    <>
      <img src={url} width={width} height={height} alt={alt} />
    </>
  );
}

// props -> {url, width, height}
// const {url, width} = props

// деструктуризация
// из обьекта вы вытаскиваете опр поля через {}

// function sum(a = 1, b = 1) {
//   console.log(a + b);
// }

// sum(100, 1); // 101

// sum(); // 2

// sum(2); // 3
