import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import axios from "axios";
import AboutCourse from "./AboutCourse";
import { MenuList } from "./MenulLst";
import ToggleThemeButton from "./ToggleThemeButton";
import Logo from "./Logo";
import FooterPage from "./FooterPage";

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
  color: "#fff",
  backgroundColor: "#233A6C",
  paddingLeft:"230px"
};
const layoutStyle = {
  width: "calc(100% - 8px)",
  maxWidth: "calc(100% - 8px)",
};


function NewApp() {

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
             <AboutCourse />
          </Content>                          
          <Footer style={footerStyle}>
            <FooterPage/>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default NewApp;