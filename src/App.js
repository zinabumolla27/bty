import React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import AppHeader from "./Components/AppHeader";
import AppContent from "./Components/AppContent";
import AppFooter from "./Components/AppFooter";
import { store } from "./app/store";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Header */}
        <AppHeader />

        {/* Main Content */}
        <Content>
          <AppContent />
        </Content>

        {/* Footer */}
        <AppFooter />
      </Layout>
    </Provider>
  );
}

export default App;
