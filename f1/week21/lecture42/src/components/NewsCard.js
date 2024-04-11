import { Card, Button } from "antd";
import { Link } from "react-router-dom";

export default function NewsCard({ title, description, id }) {
  return (
    <Card title={title}>
      {description}
      <Link to={`/news/${id}`}>
      <Button size="small" type="primary">
        Подробнее
      </Button>
      </Link>
    </Card>
  );
}

// 0 -> /news/0