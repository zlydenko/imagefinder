import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar
        currentPage={"home"}
        activePageTitle={"Image finder"}
        authenticated={true}
      />
    </div>
  );
}

export default App;
