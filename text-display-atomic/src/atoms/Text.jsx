import React from "react";

function Text({ content }) {
  if (typeof content !== "string" && typeof content !== "number") {
    console.error("Invalid content for Text:", content);
    return null; // Prevent rendering if invalid
  }
  return <p>{content}</p>;
}

export default Text;
