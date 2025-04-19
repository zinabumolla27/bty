import { Provider } from "react-redux";
import { Layout } from "antd";
import AppContent from "./Components/AppContent";
import AppHeader from "./Components/AppHeader";
import { store } from "./app/store";
import "./App.css"; // Make sure you have this file

import AppFooter from "./Components/AppFooter";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout style={{ minHeight: "100vh" }}>
          <AppHeader />
          <Content
            style={{
              marginTop: 64, // Matches header height
              backgroundColor: "#fff", // Optional: set your preferred background
            }}
          >
            <AppContent />
          </Content>
          <AppFooter />
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
