import { Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { toggle } from "@/store/modules/collapsed";
import { Outlet } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const Index = () => {
  const dispatch: AppDispatch = useDispatch();
  const collapsed = useSelector((state: RootState) => state.collapsed.value);

  const toggleMenu = () => {
    dispatch(toggle());
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={collapsed ? 50 : 200} style={{ color: "white" }}>
        Sider
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "white", height: "50px" }}>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={toggleMenu} />
          ) : (
            <MenuFoldOutlined onClick={toggleMenu} />
          )}
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
