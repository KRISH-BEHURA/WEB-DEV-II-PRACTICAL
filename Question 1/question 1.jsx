import React, { useState, useEffect } from "react";

function NameInput() {
  const [name, setName] = useState("");
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <h3>Name: {name}</h3>
      <h3>Time: {time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default NameInput;