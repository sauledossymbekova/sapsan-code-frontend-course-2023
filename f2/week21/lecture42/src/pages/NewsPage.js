import { newsData } from "../news-data";
import { Col, Row, Card, Button } from "antd";
import { Link, Outlet } from "react-router-dom";

export default function NewsPage() {
  return (
    <div>
      <h5> Актуальные новости на сегодняшний день</h5>
      <Outlet />
      <Row gutter={16}>
        {newsData.map((novost) => (
          <Col span={8}>
            <Card title={novost.title}>
              <>
                {novost.description}
                <Link to={`/news/${novost.id}`}>
                  <Button type="dashed" block size="small">
                    подробнее
                  </Button>
                </Link>
              </>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
