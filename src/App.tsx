import { RouterApp } from "@/router";
import store from "@/store";
import { ConfigProvider, App as AntdApp } from "antd";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ cssVar: true }}>
      <Provider store={store}>
        <AntdApp>
          <RouterApp />
        </AntdApp>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
