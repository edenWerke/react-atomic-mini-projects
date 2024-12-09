import React from "react";
import GreetingForm from "../molecules/GreetingForm";
import GreetingDisplay from "../organisms/GreetingDisplay";

const GreetingTemplate = ({ name, setName, onGreet, message }) => {
  return (
    <div>
      <GreetingForm name={name} setName={setName} onGreet={onGreet} />
      <GreetingDisplay message={message} />
    </div>
  );
};

export default GreetingTemplate;
