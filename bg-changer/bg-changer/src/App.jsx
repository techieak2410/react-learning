import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        position: "relative",
        transition: "background-color 0.3s ease",
      }}
    >
      {/* Bottom box */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "20px",
          backgroundColor: "#333",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setColor("red")}
          style={buttonStyle("red")}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          style={buttonStyle("green")}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          style={buttonStyle("blue")}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("yellow")}
          style={buttonStyle("gold")}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("purple")}
          style={buttonStyle("purple")}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("orange")}
          style={buttonStyle("orange")}
        >
          Orange
        </button>
        <button
          onClick={() => setColor("pink")}
          style={buttonStyle("hotpink")}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("gray")}
          style={buttonStyle("gray")}
        >
          Gray
        </button>
      </div>
    </div>
  );
}

// Button style function
function buttonStyle(color) {
  return {
    backgroundColor: color,
    border: "none",
    padding: "10px 20px",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    minWidth: "80px",
    textTransform: "capitalize",
  };
}

export default App;

