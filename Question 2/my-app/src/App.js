import React from "react";
import { UserContext } from "./UserContext";
import Parent from "./Parent";

function App() {
  const user = "Krish"; // data from parent

  return (
    <UserContext.Provider value={user}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Context API Example</h2>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default App;