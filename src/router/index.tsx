import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import("@/layout/index"));
const Login = lazy(() => import("@/views/Login/index"));
const Dashboard = lazy(() => import("@/views/Dashboard/index"));
const NotFound = lazy(() => import("@/views/Error/NotFound/index"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const RouterApp = () => (
  <Router>
    <Routes>
      {routes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children &&
            children.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>
      ))}
    </Routes>
  </Router>
);

export { RouterApp };

// 动态
// import { lazy, useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const Layout = lazy(() => import("@/layout/index"));
// const NotFound = lazy(() => import("@/views/Error/NotFound/index"));

// const RouterApp = () => {
//   // 使用 useState 定义一个状态变量来保存动态路由配置
//   const [dynamicRoutes, setDynamicRoutes] = useState([]);

//   // 使用 useEffect 在组件加载时动态生成路由配置
//   useEffect(() => {
//     // 模拟异步加载路由配置
//     const fetchRoutes = async () => {
//       // 这里可以根据需要动态生成路由配置
//       const fetchedRoutes = [
//         {
//           path: "/",
//           element: <Layout />,
//           children: [
//             {
//               path: "/dashboard",
//               element: <Dashboard />,
//             },
//             {
//               path: "/login",
//               element: <Login />,
//             },
//           ],
//         },
//         {
//           path: "*",
//           element: <NotFound />,
//         },
//       ];

//       // 更新动态路由配置
//       setDynamicRoutes(fetchedRoutes);
//     };

//     // 执行异步加载路由配置
//     fetchRoutes();
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* 渲染动态生成的路由配置 */}
//         {dynamicRoutes.map(({ path, element, children }) => (
//           <Route key={path} path={path} element={element}>
//             {children && children.map(({ path, element }) => (
//               <Route key={path} path={path} element={element} />
//             ))}
//           </Route>
//         ))}
//       </Routes>
//     </Router>
//   );
// };

// export { RouterApp };
