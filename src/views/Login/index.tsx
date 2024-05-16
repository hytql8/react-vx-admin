import { Layout, Button, Checkbox, type CheckboxProps } from "antd";
import classes from "./login.module.scss";
import { useState, useRef, useEffect } from "react";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const { Header, Footer, Content } = Layout;

const vxTitle = import.meta.env.VITE_APP_TITLE;
const logoUrl = new URL("@/assets/imgs/VxLogo.png", import.meta.url).href;

const Login = () => {
  // username input ref
  const usernameInputRef = useRef<HTMLInputElement>(null);
  // password input ref
  const passwordInputRef = useRef<HTMLInputElement>(null);
  // 管理当前username的placeholder状态;
  const [usernameActived, setUsernameActived] = useState(false);
  // 管理当前password的placeholder状态;
  const [passwordActived, setPasswordActived] = useState(false);
  // 双向绑定username
  const [username, setUsername] = useState("");
  const usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setUsernameTips("");
  };
  // 双向绑定username
  const [password, setPassword] = useState("");
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordTips("");
  };
  // 聚焦时，usernameActived为true
  const usernameFocus = () => {
    setUsernameActived(true);
    // 有可能为点击事件触发
    usernameInputRef.current?.focus();
  };
  const passwordFocus = () => {
    setPasswordActived(true);
    // 有可能为点击事件触发
    passwordInputRef.current?.focus();
  };

  // usernameFocus有可能是点击触发，获取input让其聚焦
  useEffect(() => {
    if (usernameActived) {
      usernameInputRef.current?.focus();
    }
    if (passwordActived) {
      passwordInputRef.current?.focus();
    }
  }, [usernameActived, passwordActived]);
  // 失焦时，无值时，usernameActived为false，有值为true
  const usernameBlur = () => {
    setUsernameActived(!!username && usernameActived);
    if (!username) setUsernameTips("");
  };
  const passwordBlur = () => {
    setPasswordActived(!!password && passwordActived);
    if (!password) setPasswordTips("");
  };
  // usernameTips是否显示 以及 提示信息
  const [usernameTips, setUsernameTips] = useState("");
  // passwordTips是否显示 以及 提示信息
  const [passwordTips, setPasswordTips] = useState("");
  // 记住密码
  const [checked, setChecked] = useState(false);
  const onChange: CheckboxProps["onChange"] = (e) => {
    setChecked(e.target.checked);
  };
  // 提交
  const submit = () => {
    if (!username || !password) {
      if (!username) setUsernameTips("用户名不能为空!!!");
      if (!password) setPasswordTips("密码不能为空!!");
      return;
    } else {
      console.log("登录成功");
    }
  };
  return (
    <Layout className={classes.layout}>
      <Header className={classes.header}>
        <ThemeSwitch />
      </Header>
      <Content className={classes.content}>
        <div className={classes.loginBox}>
          <div className={classes.headerBox}>
            <img className={classes.logo} src={logoUrl} alt="logo" />
            <span className={classes.title}>{vxTitle}</span>
          </div>
          <div className={classes.despBox}>
            <p>一款基于React + Ant Design + Vite + TypeScript 的后台管理系统</p>
          </div>
          <div className={classes.contentBox}>
            <div
              className={`${usernameActived ? classes.borderActived : ""} ${classes.inputBox}`}
            >
              <span
                onClick={usernameFocus}
                className={`${usernameActived ? classes.actived : ""} ${classes.inputTitle}`}
              >
                请输入用户名
              </span>
              <input
                ref={usernameInputRef}
                className={classes.input}
                type="text"
                onFocus={usernameFocus}
                onBlur={usernameBlur}
                value={username}
                onChange={usernameChange}
              />
            </div>
            <div className={classes.inputTips}>{usernameTips}</div>
            <div
              className={`${passwordActived ? classes.borderActived : ""} ${classes.passwordBox}`}
            >
              <span
                onClick={passwordFocus}
                className={`${passwordActived ? classes.actived : ""} ${classes.inputTitle}`}
              >
                请输入密码
              </span>
              <input
                ref={passwordInputRef}
                className={classes.input}
                type="password"
                onFocus={passwordFocus}
                onBlur={passwordBlur}
                value={password}
                onChange={passwordChange}
              />
            </div>
            <div className={classes.inputTips}>{passwordTips}</div>
            <div className={classes.rememberBox}>
              <Checkbox checked={checked} onChange={onChange}>
                <span className={classes.text}>记住密码</span>
              </Checkbox>
            </div>
            <div className={classes.submitBox}>
              <Button
                className={classes.submitBtn}
                type="primary"
                onClick={submit}
              >
                登录
              </Button>
              <Button className={classes.signBtn}>注册</Button>
            </div>
          </div>
        </div>
      </Content>
      <Footer className={classes.footer}></Footer>
    </Layout>
  );
};

export default Login;
