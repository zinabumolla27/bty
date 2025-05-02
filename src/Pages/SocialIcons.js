import { Button, Tooltip } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{
        position: "fixed",
        bottom: 30,
        right: 30,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      {/* WhatsApp Button with Breathing Pulse */}
      <Tooltip title="Chat on WhatsApp" placement="left" color="#25D366">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: "relative" }}
        >
          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "#25D366",
              scale: 0.9,
            }}
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<WhatsAppOutlined style={{ fontSize: "22px" }} />}
            size="large"
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            style={{
              backgroundColor: "#25D366",
              width: "46px",
              height: "46px",
              border: "2px solid rgba(255,255,255,0.3)",
              position: "relative",
            }}
          />
        </motion.div>
      </Tooltip>

      {/* Telegram Button with Offset Breathing Pulse */}
      <Tooltip title="Message on Telegram" placement="left" color="#0088cc">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: "relative" }}
        >
          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "#0088cc",
              scale: 0.9,
            }}
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <Button
            type="primary"
            shape="circle"
            icon={<FaTelegramPlane style={{ fontSize: "22px" }} />}
            size="large"
            href="https://t.me/YOUR_TELEGRAM_USERNAME"
            target="_blank"
            style={{
              backgroundColor: "#0088cc",
              width: "46px",
              height: "46px",
              border: "2px solid rgba(255,255,255,0.3)",
              position: "relative",
            }}
          />
        </motion.div>
      </Tooltip>

      {/* Enhanced Floating Indicator */}
      <motion.div
        style={{
          position: "absolute",
          right: "65px",
          top: "50%",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6],
          y: "-50%",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default SocialIcons;
