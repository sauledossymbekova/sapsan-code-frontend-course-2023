import { newsData } from "../news-data";
import NewCard from "./NewsCard";

export default function NewsList() {
  return (
    <div style={{ display: "flex" }}>
      {newsData.map((novost) => (
        <NewCard {...novost} />
      ))}
    </div>
  );
}
