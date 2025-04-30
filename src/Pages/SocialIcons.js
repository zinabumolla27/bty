import { Button } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Button
        type="primary"
        shape="circle"
        icon={<WhatsAppOutlined />}
        size="large"
        href="https://wa.me/YOUR_PHONE_NUMBER"
        target="_blank"
        style={{ backgroundColor: "#25D366" }}
      />
      <Button
        type="primary"
        shape="circle"
        icon={<FaTelegramPlane />}
        size="large"
        href="https://t.me/YOUR_TELEGRAM_USERNAME"
        target="_blank"
        style={{ backgroundColor: "#0088cc" }}
      />
    </div>
  );
};

export default SocialIcons;
