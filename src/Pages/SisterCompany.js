import React from "react";
import { Card, Col, Row, Typography } from "antd";
import "./SisterCompany.css";

const { Title, Paragraph } = Typography;

const sisterCompanies = [
  {
    name: "Company X",
    description:
      "Company X provides cutting-edge technology solutions for industrial automation and equipment manufacturing.",
    link: "https://example.com/x",
  },
  {
    name: "Company Y",
    description:
      "Company Y is focused on sustainable energy solutions, helping to build a greener future.",
    link: "https://example.com/y",
  },
  {
    name: "Company Z",
    description:
      "Company Z is a leader in logistics and transportation, ensuring fast and reliable shipping services worldwide.",
    link: "https://example.com/z",
  },
];

const SisterCompany = () => {
  return (
    <div className="sister-company-container">
      <Title level={2} className="header-title">
        Our Sister Companies
      </Title>
      <Row gutter={[16, 24]} justify="center">
        {sisterCompanies.map((company, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              className="company-card"
              cover={
                <img
                  alt={company.name}
                  src={`https://via.placeholder.com/150?text=${company.name}`}
                />
              }
              onClick={() => window.open(company.link, "_blank")}
            >
              <Title level={4} className="company-title">
                {company.name}
              </Title>
              <Paragraph className="company-description">
                {company.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SisterCompany;
