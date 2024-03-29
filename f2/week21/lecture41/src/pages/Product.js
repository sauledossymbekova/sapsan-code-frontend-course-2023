import { useParams } from "react-router-dom";

export default function Product() {
  let { id } = useParams();
  return (
    <>
      <h1>Product {id}</h1>
    </>
  );
}
