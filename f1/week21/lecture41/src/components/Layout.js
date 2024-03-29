import { Link, Outlet } from "react-router-dom";
import { Button } from "antd";

export default function Layout() {
  return (
    <div>
      <Link to={"/"}>
        <Button type="primary">Перейти на главную страницу</Button>
      </Link>
      <Link to={"/info"}>
        <Button>Перейти на страницу информации</Button>
      </Link>
      <Link to={"/services"}>
        <Button type="primary">Перейти на страницу Услуг</Button>
      </Link>

      <Outlet />
    </div>
  );
}
