import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/1_Home";
import PeerSupport from "./components/2_PeerSupport";
import Reward from "./components/3_Reward";
import Treatment from "./components/4_Treatment";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peer-support" element={<PeerSupport />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/treatment" element={<Treatment />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
