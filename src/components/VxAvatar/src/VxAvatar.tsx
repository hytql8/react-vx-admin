import { Avatar, Dropdown, Space, App, Flex, type MenuProps } from "antd";
import React from "react";

const ComStyle: React.CSSProperties = {
  height: "100%",
  padding: "0 10px",
  fontSize: "var(--text-useful-size)",
};

const AvatarStyle: React.CSSProperties = {
  border: "1px solid var(--divider-color)",
  marginLeft: "10px",
};

const NameStyle: React.CSSProperties = {
  color: "var(--theme-text-color)",
  fontSize: "var(--text-useful-size)",
};

export const VxAvatar: React.FC = () => {
  const { message } = App.useApp();
  const onClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`点击了第 ${key} 项`);
  };

  const items: MenuProps["items"] = [
    {
      label: "个人中心",
      key: "1",
    },
    {
      label: "修改密码",
      key: "2",
    },
    {
      label: "退出登录",
      key: "3",
    },
  ];

  return (
    <>
      <Dropdown menu={{ items, onClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Flex align="center" style={ComStyle}>
              <span style={NameStyle}>系统管理员</span>
              <Avatar
                style={AvatarStyle}
                src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
              />
            </Flex>
          </Space>
        </a>
      </Dropdown>
    </>
  );
};
