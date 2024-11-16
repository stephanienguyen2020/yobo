import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import PeerSupport from "./components/2_PeerSupport";
import Reward from "./components/3_Reward";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<PeerSupport />} />
          <Route path="/peer-support" element={<PeerSupport />} />
          <Route path="/reward" element={<Reward />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
