import React, { useState } from "react";
import GreetingTemplate from "../templatess/GreetingTemplate";

const HomePage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleGreet = () => {
    setMessage(`Hello, ${name || "Guest"}!`);
  };

  return (
    <div>
      <GreetingTemplate
        name={name}
        setName={setName}
        onGreet={handleGreet}
        message={message}
      />
    </div>
  );
};

export default HomePage;
