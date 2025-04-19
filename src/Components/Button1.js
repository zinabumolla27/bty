import { Button, Flex } from "antd";
import React from "react";

function Button1({ onClick }) {
  return (
    <Flex
      direction="column" // Arrange children in a column
      justify="center" // Center vertically
      align="center" // Center horizontally
      style={{
        width: "100%", // Ensure full width on smaller screens
        maxWidth: "250px", // Max width for larger screens
        paddingTop: "15px", // Adjust padding for smaller screens
        margin: "0 auto", // Center the button horizontally
      }}
    >
      <Button type="primary" block onClick={onClick}>
        Details
      </Button>
    </Flex>
  );
}

export default Button1;
