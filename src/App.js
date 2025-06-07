import React from "react";
import { Layout } from "antd";
import { useLocation } from "react-router-dom";
import AppHeader from "./Components/AppHeader";
import AppContent from "./Components/AppContent";
import AppFooter from "./Components/AppFooter";
import SocialIcons from "./Pages/SocialIcons";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";

const { Content } = Layout;

function App() {
  const location = useLocation();

  // Define routes where the footer and social icons should be hidden
  const noFooterRoutes = [
    "/upload",
    "/viewContact",
    "/viewUsers",
    "/createUsers",
  ];

  const hideFooter = noFooterRoutes.includes(location.pathname);

  return (
    <Provider store={store}>
      <Layout>
        <AppHeader />
        <Content>
          <AppContent />
          {!hideFooter && <SocialIcons />}
        </Content>
        {!hideFooter && <AppFooter />}
      </Layout>
    </Provider>
  );
}

export default App;
