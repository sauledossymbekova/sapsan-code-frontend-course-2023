import "./App.css";
import { Button, ConfigProvider, Switch, Steps } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#00b96b",
          },
        },
        token: {
          // colorPrimary: "#00b96b",
        },
      }}
    >
      <div className="App">
        <Button type="primary" size="large" icon={<QuestionOutlined />}>
          Click
        </Button>

        <Button type="primary" size="large" icon={<QuestionOutlined />}>
          Click
        </Button>

        <Button type="primary" size="large" icon={<QuestionOutlined />}>
          Click
        </Button>

        <Switch defaultChecked />

        <Steps
          current={1}
          items={[
            {
              title: "Finished",
              description: 'description',
            },
            {
              title: "In Progress",
              description: 'description',
              subTitle: "Left 00:00:08",
            },
            {
              title: "Waiting",
              description: 'description',
            },
          ]}
        />
      </div>
    </ConfigProvider>
  );
}

export default App;
