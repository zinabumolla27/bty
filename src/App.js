import React from "react";
import { Layout } from "antd";
import AppHeader from "./Components/AppHeader";
import AppContent from "./Components/AppContent";
import AppFooter from "./Components/AppFooter";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <AppContent />
      </Content>
      <AppFooter />
    </Layout>
  );
}

export default App;
