import { notification } from "antd";

export const notifyUser = (type, placement, BodyMessage) => {
  return notification[type]({
    placement: placement,
    message: "Message",
    description: BodyMessage,
  });
};
