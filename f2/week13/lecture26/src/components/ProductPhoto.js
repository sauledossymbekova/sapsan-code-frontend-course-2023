export default function ProductPhoto({url, width, height, alt}) {

  return (
    <>
      <img
        src={url}
        width={width}
        height={height}
        alt={alt}
      />
    </>
  );
}

// props -> {url, width, height}
// const {url, width} = props

// деструктуризация
// из обьекта вы вытаскиваете опр поля через {}
