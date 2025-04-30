import React from "react";
import { Layout } from "antd";
import AppHeader from "./Components/AppHeader";
import AppContent from "./Components/AppContent";
import AppFooter from "./Components/AppFooter";
import "./App.css";
import SocialIcons from "./Pages/SocialIcons";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <AppContent />
        <SocialIcons />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
