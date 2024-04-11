import { news } from "../news";
import { Card } from "antd";
import { useParams } from "react-router-dom";

export default function DetailedNewsPage() {
  const { id } = useParams();

  const { title, description, image, moreText } = news[id];

  return (
    <Card title={title}>
      {description}
      <img width="400" src={image} />
      {moreText}
    </Card>
  );
}
