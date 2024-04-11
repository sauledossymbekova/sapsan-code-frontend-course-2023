import { Row, Col } from "antd";
import { news } from "../news";
import NewsCard from "../components/NewsCard";

export default function NewsPage() {

    return (
    <>
      <h1>Актуальные новости на сегодняшний день:</h1>

      <Row gutter={16}>
        {news.map((novost) => (
          <Col span={8}>
            <NewsCard {...novost} />
          </Col>
        ))}
      </Row>
    </>
  );
}
