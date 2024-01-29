export default function ProductPhoto({ url, width="200" }) {
  // const {url, width} = props

  return (
    <>
      <img src={url} width={width} />
    </>
  );
}

// props = {url: '', width: '', ...}
