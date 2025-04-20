import { Button, Flex } from "antd";
import React from "react";

function Button1({ onClick }) {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      style={{
        maxWidth: "250px",
        paddingTop: "15px",
        margin: "0 auto",
      }}
    >
      <Button type="primary" block onClick={onClick}>
        Details
      </Button>
    </Flex>
  );
}

export default Button1;
