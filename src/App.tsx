import { RouterApp } from "@/router";
import store from "@/store";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ cssVar: true }}>
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </ConfigProvider>
  );
};

export default App;
