import { newsData } from "../news-data";
import { Col, Row, Card } from "antd";
import { useParams } from "react-router-dom";

export default function DetailedNewsPage() {
  const { newsId, title } = useParams();

  const novost = newsData[newsId];
    console.log(newsId, title);
  return (
    <div>
      <Col span={24}>
        <Card>
          <h1>{novost.title}</h1>
          <p>{novost.description}</p>
          <img width="300" height="300" src={novost.image} />
          <p>{novost.more}</p>
        </Card>
        {/* <Card title={article.title}>{article.description}</Card> */}
      </Col>
    </div>
  );
}
