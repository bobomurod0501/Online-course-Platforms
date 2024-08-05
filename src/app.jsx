import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { MenuList } from "./components/MenulLst";
import Logo from "./components/Logo";
import ToggleThemeButton from "./components/ToggleThemeButton";
import axios from "axios";
import HomePage from "./contents/HomePage";

const { Header, Sider, Content, Footer } = Layout;

const headerStyle = {
  textAlign: "center",
  height: 64,
  backgroundColor: "white",
  position: "fixed",
  width: "100%",
  zIndex:3
};
const contentStyle = {
  minHeight: 120,
  backgroundColor: "#eceeef",
  paddingLeft: "250px",
  paddingTop: "80px",
};
const siderStyle = {
  lineHeight: "120px",
  color: "#fff",
  height: "100vh",
  position: "fixed",
  zIndex: 4,
  userSelect: "none",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};


function App() {

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <div>
      <Layout style={layoutStyle}>
        <Sider width="10%" style={siderStyle}>
          <Logo />
          <MenuList darkTheme={dark} />
          <ToggleThemeButton darkTheme={dark} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>
              <HomePage />
          </Content>                          
          <Footer style={footerStyle}>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

// export function Content1() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/home" element={<HomePage />}></Route>
//         <Route
//           path="/dashboard"
//           element={<div className="box">Dashboard</div>}
//         ></Route>
//         <Route path="/activeuser" element={<div>Active User List</div>}></Route>
//         <Route
//           path="/disableuser"
//           element={<div> Disabled User List</div>}
//         ></Route>
//         <Route path="/profile" element={<div>Profile</div>}></Route>
//         <Route path="/home/:courseId" element={<AboutCourse />}></Route>
//       </Routes>
//     </div>
//   );
// }

