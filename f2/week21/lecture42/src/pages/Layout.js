import { Button } from "antd";
import { Outlet, Link } from "react-router-dom";
export default function Layout() {
  return (
    <div>
      <img src="" />

      <Link to={"/"}>
        <Button type="primary">Главная</Button>
      </Link>
      <Link to={"/news"}>
        <Button>Новости</Button>
      </Link>
      <Link to={"/event"}>
        <Button type="primary">Мероприятия</Button>
      </Link>
      <Outlet />
    </div>
  );
}
