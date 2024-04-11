import Title from "./Title";
export default function InfoCard({ novost }) {
  return (
    <>
      <Title text={novost.title} />
      <p>{novost.description}</p>
      <img src={novost.image} width="300" height="300" />
    </>
  );
}
