import React, { useState } from "react";
import { Layout, Menu, Image, Row, Col, Space } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  QuestionCircleOutlined,
  ReadOutlined,
  ExportOutlined,
  DownOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import { FaBuilding } from "react-icons/fa";
import "./AppHeader.css";
import fl from "../Assets/fl.png";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const AppHeader = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    navigate(`/${item.key}`);
    setMobileMenuVisible(false);
  };

  const handleLogoClick = () => {
    navigate("/");
    setMobileMenuVisible(false);
  };

  const menuItems = [
    { key: "home", label: "Home" },
    {
      label: (
        <Space>
          About Us
          <DownOutlined />
        </Space>
      ),
      key: "about",
      children: [
        {
          label: (
            <>
              <ReadOutlined
                style={{ marginRight: "8px" }}
                size={14}
                color="#007BFF"
              />{" "}
              Company Profile
            </>
          ),
          key: "CompanyProfile",
        },
        {
          label: (
            <>
              {" "}
              <FaBuilding
                style={{ marginRight: "8px" }}
                size={14}
                color="#007BFF"
              />
              Sister Company
            </>
          ),
          key: "SisterCompany",
        },
        {
          label: (
            <>
              <QuestionCircleOutlined
                style={{ marginRight: "8px" }}
                size={14}
                color="#007BFF"
              />{" "}
              FAQ
            </>
          ),
          key: "faq",
        },
      ],
    },
    {
      key: "servicesandproducts",
      label: (
        <Space>
          Services and Products
          <DownOutlined />
        </Space>
      ),
      children: [
        {
          label: (
            <>
              <ExportOutlined style={{ marginRight: "8px" }} size={14} /> Export
            </>
          ),
          key: "export",
          children: [
            {
              label: <>Oilseeds</>,
              key: "oilseeds",
            },
            {
              label: <>Coffee-and-tea</>,
              key: "coffeantea",
            },
            {
              label: <>Chat</>,
              key: "chat",
            },
            {
              label: <>Pulses</>,
              key: "pulses",
            },
            {
              label: <>Spices</>,
              key: "spices",
            },
            {
              label: <>Cereals</>,
              key: "cereals",
            },
            {
              label: <>Peppers</>,
              key: "peppers",
            },
          ],
        },
        {
          label: (
            <>
              {" "}
              <ImportOutlined
                style={{ marginRight: "8px" }}
                size={14}
                color="#007BFF"
              />
              Import
            </>
          ),
          key: "import",
        },
        {
          label: <>Additional Services</>,
          key: "additionalservices",
          children: [
            {
              label: <>Mining and Quarrying</>,
              key: "mining and quarrying",
            },
            {
              label: <>Manufacturing</>,
              key: "manufacturing",
            },
            {
              label: <>Construction</>,
              key: "construction",
            },
            {
              label: <>Agriculture</>,
              key: "agriculture",
            },
            {
              label: <>Transportation</>,
              key: "transportation",
            },
          ],
        },
      ],
    },
    { key: "contact", label: "Contact Us" },
    { key: "news", label: "News" },
    {
      key: "manageusers",
      label: (
        <Space>
          Manage Users
          <DownOutlined />
        </Space>
      ),
      children: [
        {
          key: "viewContact",
          label: "View Contacts",
        },
      ],
    },

    { key: "upload", label: "Upload" },
  ];

  return (
    <Header className="app-header">
      <Row className="header-row" align="middle" justify="space-between">
        <Col className="logo-col">
          <div
            className="logo-container"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={fl}
              alt="Company Logo"
              preview={false}
              width={80}
              className="logo-image"
              style={{
                margin: "0 20px",
              }}
            />
          </div>
        </Col>

        <Col className="nav-col">
          <Menu
            theme="light"
            mode="horizontal"
            items={menuItems}
            className="nav-menu"
            onClick={handleMenuClick}
          />
        </Col>

        <Col className="mobile-menu-col">
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          >
            {mobileMenuVisible ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </Col>
      </Row>

      {/* Mobile Menu - always rendered */}
      <div
        className={`mobile-menu right-aligned-menu ${
          mobileMenuVisible ? "visible" : ""
        }`}
      >
        <Menu
          theme="dark"
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
        />
      </div>
    </Header>
  );
};

export default AppHeader;
