import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

export const Dashboard = () => {
  const [isFold, setIsFold] = useState(false);

  const foldMenu = () => {
    setIsFold(!isFold);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={isFold ? 50 : 200} style={{ color: "white" }}>
        Sider
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "white", height: "50px" }}>
          {isFold ? (
            <MenuUnfoldOutlined onClick={foldMenu} />
          ) : (
            <MenuFoldOutlined onClick={foldMenu} />
          )}
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
