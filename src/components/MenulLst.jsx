import {
  DashboardOutlined,
  HomeOutlined,
  PoweroffOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import HomePage from "../contents/HomePage";
import AboutCourse from "./AboutCourse";

export function MenuList({ darkTheme }) {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <Menu
        className="menu-bar"
        mode="inline"
        theme={darkTheme ? "dark" : "light"}
        // className="menu2"
        onClick={({ key }) => {
          if (key === "signout") {
            // fvbndf
          } else {
            navigate(key);
          }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Home", key: "/home", icon: <HomeOutlined /> },
          {
            label: "Quizz test",
            key: "/dashboard",
            icon: <DashboardOutlined />,
          },
          {
            label: "User List",
            key: "/user",
            icon: <UnorderedListOutlined />,
            children: [
              { label: "Active User", key: "/activeuser" },
              { label: "Disabled User", key: "/disableuser" },
            ],
          },
          { label: "Profile", key: "/profile", icon: <UserOutlined /> },
          { label: "Sign out", icon: <PoweroffOutlined />, danger: true },
        ]}
      ></Menu>
    </div>
  );
}

