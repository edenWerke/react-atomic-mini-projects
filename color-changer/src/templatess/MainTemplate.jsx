// src/templates/MainTemplate.js
function MainTemplate({ children }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Color Changer App</h1>
      {children}
    </div>
  );
}

export default MainTemplate;
