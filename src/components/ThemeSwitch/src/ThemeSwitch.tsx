import { useState } from "react";
import React from "react";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { Switch } from "antd";
import classes from "./ThemeSwitch.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { setThemeMode } from "@/store/modules/appStore";

export const ThemeSwitch: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  // 初始化
  const [theme, setTheme] = useState(
    useSelector((state: RootState) => state.appStore.themeMode)
  );

  const [event, setEvent] = useState({} as React.MouseEvent);

  const ani = (e?: React.MouseEvent) => {
    const transition = document.startViewTransition(() => {
      if (theme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
    // 在 transition.ready 的 Promise 完成后，执行自定义动画
    transition.ready.then(() => {
      // 由于我们要从鼠标点击的位置开始做动画，所以我们需要先获取到鼠标的位置
      const { clientX, clientY } = e ?? event;

      // 计算半径，以鼠标点击的位置为圆心，到四个角的距离中最大的那个作为半径
      const radius = Math.hypot(
        Math.max(clientX, innerWidth - clientX),
        Math.max(clientY, innerHeight - clientY)
      );
      const clipPath = [
        `circle(0% at ${clientX}px ${clientY}px)`,
        `circle(${radius}px at ${clientX}px ${clientY}px)`,
      ];
      const isDark = document.documentElement.classList.contains("dark");
      // 自定义动画
      document.documentElement.animate(
        {
          // 如果要切换到暗色主题，我们在过渡的时候从半径 100% 的圆开始，到 0% 的圆结束
          clipPath: isDark ? clipPath.reverse() : clipPath,
        },
        {
          duration: 300,
          // 如果要切换到暗色主题，我们应该裁剪 view-transition-old(root) 的内容
          pseudoElement: isDark
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  };

  const toggle = (checked: boolean, e: React.MouseEvent) => {
    setEvent(e);
    ani(e);
    dispatch(setThemeMode(checked));
    setTheme(checked);
  };
  return (
    <div>
      <Switch
        className={classes.switchStyle}
        checkedChildren={<SunFilled className={classes.sunIcon} />}
        unCheckedChildren={<MoonFilled className={classes.moonIcon} />}
        defaultChecked={theme}
        onChange={toggle}
      />
    </div>
  );
};
