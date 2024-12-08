// src/atoms/Button.js

// src/atoms/Box.js
function Box({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        margin: "20px auto",
        backgroundColor: color,
        border: "2px solid black",
      }}
    ></div>
  );
}

export default Box;
