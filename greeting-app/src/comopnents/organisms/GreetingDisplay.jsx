import React from "react";
import Text from "../atoms/Text";

const GreetingDisplay = ({ message }) => {
  return <Text content={message} className="greeting-message" />;
};

export default GreetingDisplay;
