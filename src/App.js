import "./styles/App.css";
import PeerSupport from "./components/2_PeerSupport";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app-container">
      <div></div>
      <PeerSupport />
      <Navigation />
    </div>
  );
}

export default App;
