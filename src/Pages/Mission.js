import React from "react";
import { Card, Typography } from "antd";
import { RocketOutlined, EyeOutlined, TrophyOutlined } from "@ant-design/icons";
import "./Mission.css";

const { Title, Paragraph } = Typography;

const Mission = () => {
  return (
    <div className="bty-mission-container">
      <Title level={1} className="main-title animated-text">
        Our Core Principles
      </Title>
      <Paragraph className="mission-subtitle">
        Driving excellence in global trading through innovation and integrity
      </Paragraph>

      <div className="mission-cards">
        {/* Vision Card */}
        <Card
          className="mission-card vision-card"
          hoverable
          cover={
            <div className="card-icon-container">
              <EyeOutlined className="card-icon" />
            </div>
          }
        >
          <Title level={3} className="card-title">
            Our Vision
          </Title>
          <Paragraph className="card-content">
            To become the most trusted and innovative global trading partner,
            transforming markets through cutting-edge solutions while
            maintaining uncompromising ethical standards.
          </Paragraph>
          <div className="card-footer">See Beyond Horizons</div>
        </Card>

        {/* Mission Card */}
        <Card
          className="mission-card mission-card-primary"
          hoverable
          cover={
            <div className="card-icon-container">
              <RocketOutlined className="card-icon" />
            </div>
          }
        >
          <Title level={3} className="card-title">
            Our Mission
          </Title>
          <Paragraph className="card-content">
            To deliver exceptional value through strategic global trade
            solutions, fostering sustainable growth for our partners while
            leveraging technology to redefine industry standards.
          </Paragraph>
          <div className="card-footer">Trade Without Boundaries</div>
        </Card>

        {/* Values Card */}
        <Card
          className="mission-card values-card"
          hoverable
          cover={
            <div className="card-icon-container">
              <TrophyOutlined className="card-icon" />
            </div>
          }
        >
          <Title level={3} className="card-title">
            Our Values
          </Title>
          <Paragraph className="card-content">
            <ul className="values-list">
              <li>
                <strong>Integrity:</strong> ethics in all dealings
              </li>
              <li>
                <strong>Innovation:</strong> Pioneering trade solutions
              </li>
              <li>
                <strong>Excellence:</strong> Relentless pursuit of quality
              </li>
              <li>
                <strong>Partnership:</strong> Collaborative success
              </li>
            </ul>
          </Paragraph>
          <div className="card-footer">The BTY Difference</div>
        </Card>
      </div>
    </div>
  );
};

export default Mission;
