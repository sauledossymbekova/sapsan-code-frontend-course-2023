import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const items = [
  {
    label: "Navigation One",
    key: "mail",
    // icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    // icon: <AppstoreOutlined />,
  },
];

export default function Main() {
  return (
    <Layout>
      <Header>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          onClick={(key) => }
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content>
        Main page
        <Link to={`product/1`}>Your Name</Link>
        <Outlet />
      </Content>
    </Layout>
  );
}
