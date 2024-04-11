import { news } from "../news";
import InfoCard from "./InfoCard";

export default function InfoList() {
  return (
    <>
      {news.map((novost) => (
        <InfoCard novost={novost} />
      ))}
    </>
  );
}
