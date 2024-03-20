import { Button, ConfigProvider } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./App.css";

function App() {
  return (
    <ConfigProvider
      theme={{
        // вы поменяли colorPrimary для всех компонент
        colorPrimary: "#00b96b",
        components: {
          Button: {
            // вы поменяли colorPrimary для кнопки
            colorPrimary: "#00b96b",
          },
        },
      }}
    >
      <div className="App">
        <Button type="primary" icon={<CloseCircleOutlined />}>
          Click
        </Button>
      </div>
    </ConfigProvider>
  );
}

export default App;
