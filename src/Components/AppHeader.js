import React, { useState, useEffect } from "react";
import { Layout, Menu, Image, Row, Col } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  QuestionCircleOutlined,
  ReadOutlined,
  ExportOutlined,
  ImportOutlined,
  DownOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ Import useLocation
import mlogo from "../Assets/mlogo.png";
import "./AppHeader.css";

const { Header } = Layout;

const AppHeader = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // ✅ parse string to objec
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Hook for pathname changes

  // ✅ Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  //   navigate("/login");
  // };

  const handleMenuClick = (item) => {
    if (item.key === "logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      // window.location.reload();
      navigate(`/login`);
    } else {
      setIsClosing(true);
      setTimeout(() => {
        navigate(`/${item.key}`);
        setMobileMenuVisible(false);
        setIsClosing(false);
      }, 20);
    }
  };
  const handleLogoClick = () => {
    if (mobileMenuVisible) {
      setIsClosing(true);
      setTimeout(() => {
        navigate("/");
        setMobileMenuVisible(false);
        setIsClosing(false);
      }, 300);
    } else {
      navigate("/");
    }
  };

  const toggleMobileMenu = () => {
    if (mobileMenuVisible) {
      setIsClosing(true);
      setTimeout(() => {
        setMobileMenuVisible(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMobileMenuVisible(true);
    }
  };

  const menuItems = [
    { key: "home", label: "Home" },
    {
      label: (
        <span>
          About Us <DownOutlined className="dropdown-icon" />
        </span>
      ),
      key: "about",
      children: [
        {
          label: (
            <>
              <ReadOutlined style={{ marginRight: 8 }} />
              Company Profile
            </>
          ),
          key: "companyprofile",
        },
        {
          label: (
            <>
              <QuestionCircleOutlined style={{ marginRight: 8 }} />
              FAQ
            </>
          ),
          key: "faq",
        },
      ],
    },
    {
      label: (
        <span>
          Products & Services
          <DownOutlined className="dropdown-icon" />
        </span>
      ),
      key: "servicesandproducts",
      children: [
        {
          label: (
            <>
              <ExportOutlined style={{ marginRight: 8 }} />
              Export
            </>
          ),
          key: "export",
          children: [
            { label: "Oilseeds", key: "oilseeds" },
            { label: "Coffee and Tea", key: "coffeeandtea" },
            { label: "Chat", key: "chat" },
            { label: "Pulses", key: "pulses" },
            { label: "Spices", key: "spices" },
            { label: "Cereals", key: "cereals" },
            { label: "Minerals", key: "minerals" },
          ],
        },
        {
          label: (
            <>
              <ImportOutlined style={{ marginRight: 8 }} />
              Import
            </>
          ),
          key: "import",
        },
        {
          label: " Services",
          key: "services",
          children: [
            {
              label: "CleaningService",
              key: "cleaningservice",
            },
            { label: "Mining and Quarrying", key: "#" },
            { label: "Manufacturing", key: "#1" },
            { label: "Construction", key: "#2" },
            { label: "Agriculture", key: "#3" },
            { label: "Transportation", key: "#4" },
          ],
        },
      ],
    },
    { key: "contact", label: "Contact Us" },
    { key: "news", label: "News" },
    token &&
      user?.role === "admin" && {
        label: (
          <span>
            Manage Users <DownOutlined className="dropdown-icon" />
          </span>
        ),
        key: "manage-users",
        children: [
          { key: "createUsers", label: "Create Users" },
          { key: "viewContact", label: "View Contacts" },
          { key: "viewUsers", label: "View Users" },
        ],
      },
    token &&
      (user?.role === "admin" || user?.role === "moderator") && {
        key: "upload",
        label: "Upload",
      },

    {
      label: (
        <>
          <LoginOutlined style={{ marginRight: 8 }} />
          {token ? "Logout" : "Login"}
        </>
      ),
      key: token ? "logout" : "login",
    },
  ];

  return (
    <Header className={`app-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Row className="header-row" align="middle" justify="space-between">
          <Col className="logo-col">
            <div
              className="logo-container"
              onClick={handleLogoClick}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                cursor: "pointer",
                padding: "8px 0", // Minimal padding
              }}
            >
              <Image
                src={mlogo}
                alt="Company Logo"
                preview={false}
                width={60}
                className="logo-image"
                style={{
                  margin: "0",
                  marginLeft: "8px",
                  transition: "transform 0.3s ease",
                  ":hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "23px",
                    lineHeight: "1.2",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    fontStyle: "italic",
                  }}
                >
                  BTY Trading Plc
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "1.3",
                    letterSpacing: "0.3px",
                    fontStyle: "italic",
                  }}
                >
                  Import & Export
                </span>
              </div>
            </div>
          </Col>

          {/* <span
            style={{ color: "white", marginLeft: "100px", fontWeight: "bold" }}
          >
            {user ? user?.firstName + " " + user?.lastName : ""}
          </span> */}

          <Col className="nav-col">
            <Menu
              theme="light"
              mode="horizontal"
              items={menuItems}
              className="nav-menu"
              onClick={handleMenuClick}
              selectedKeys={[location.pathname.substring(1)]} // ✅ Use location hook
              overflowedIndicator={<MenuOutlined />}
            />
          </Col>

          <Col className="mobile-menu-col">
            <button
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuVisible ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </Col>
        </Row>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${mobileMenuVisible ? "visible" : ""} ${
          isClosing ? "closing" : ""
        }`}
      >
        <Menu
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
          selectedKeys={[location.pathname.substring(1)]} // ✅ Use location here too
          style={{ height: "100%" }}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
