import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RCAP_logo from "./assets/RCAP_logo.png";

function App() {
  const [whichMap, setMap] = useState("./AllDataMap.html");
  const handleToggleClick = () => {
    if (whichMap === "./FDH_heatmap.html") {
      setMap("./AllDataMap.html");
    } else {
      setMap("./FDH_heatmap.html");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={RCAP_logo} alt="" width={65}></img>
        <h1>National Forage Data Hub</h1>
        <button
          type="button"
          className="btn btn-light"
          onClick={handleToggleClick}
          style={{ position: "absolute", right: "2vw" }}
        >
          Toggle heatmap
        </button>
      </header>
      <div className="App-body">
        <iframe className="fdh-map" src={whichMap}></iframe>
      </div>
    </div>
  );
}

export default App;
