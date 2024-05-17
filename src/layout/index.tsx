import React from "react";
import { Layout, Flex } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { toggle } from "@/store/modules/collapsed";
import { Outlet } from "react-router-dom";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { VxAvatar } from "@/components/VxAvatar";

const SiderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  color: " var(--left-menu-text-color)",
  backgroundColor: "var(--left-menu-bg-color)",
};

const LayoutStyle: React.CSSProperties = {
  minHeight: "100vh",
};

const HeaderStyle: React.CSSProperties = {
  backgroundColor: "var(--theme-div-color)",
  display: "flex",
  alignItems: "center",
  height: "var(--header-global-height)",
  justifyContent: "space-between",
  padding: "0 10px 0 10px",
};

const ContentStyle: React.CSSProperties = {
  backgroundColor: "var(--theme-bg-color)",
  padding: "20px",
};

const IconStyle: React.CSSProperties = {
  color: "var(--theme-text-color)",
};

const { Header, Sider, Content } = Layout;

const Index = () => {
  const dispatch: AppDispatch = useDispatch();
  const collapsed = useSelector((state: RootState) => state.collapsed.value);

  const toggleMenu = () => {
    dispatch(toggle());
  };
  return (
    <Layout style={LayoutStyle}>
      <Sider width={collapsed ? 50 : 200} style={SiderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={HeaderStyle}>
          {collapsed ? (
            <MenuUnfoldOutlined onClick={toggleMenu} style={IconStyle} />
          ) : (
            <MenuFoldOutlined onClick={toggleMenu} style={IconStyle} />
          )}
          <Flex align="center">
            <ThemeSwitch />
            <VxAvatar />
          </Flex>
        </Header>
        <Content style={ContentStyle}>
          <Outlet />
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};

export default Index;
