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

  // Define routes where footer and social icons are hidden
  const noFooterRoutes = [
    "/upload",
    "/viewContact",
    "/viewUsers",
    "/createUsers",
    "/login",
    "/forgot-password",
    "/reset-password",
  ];

  // Define all valid routes in your app (used to detect 404 pages)
  const validRoutes = [
    "/",
    "/about",
    "/servicesandproducts",
    "/import",
    "/export",
    "/oilseeds",
    "/coffeeandtea",
    "/pulses",
    "/spices",
    "/chat",
    "/cereals",
    "/contact",
    "/news",
    "/companyprofile",
    "/faq",
    "/services",
    "/minerals",
    "/cleaningservice",
    "/miningandquarrying",
    "/manufacturing",
    "/construction",
    "/agriculture",
    "/transportation",
  ];

  // Hide footer & icons if route is in `noFooterRoutes` or not found in `validRoutes`
  const hideFooter =
    noFooterRoutes.includes(location.pathname) ||
    !validRoutes.includes(location.pathname);

  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh", background: "#fff" }}>
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
