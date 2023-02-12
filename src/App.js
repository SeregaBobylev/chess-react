import React from "react";
import Auth from "./components/Auth";
import Game  from "./components/Game/Game";
import Menu from "./components/Menu";
import './style.css'
function App() {
  return (
    <div className="window">
      {/* <Auth/> */}
      {/* <Menu/> */}
      <Game/>
    </div>
  );
}

export default App;
