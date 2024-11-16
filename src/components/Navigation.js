import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="nav-bar">
      <div
        className={`nav-item ${isActive("/") ? "active" : ""}`}
        onClick={() => navigate("/")}
      >
        <span className="nav-icon">🏠</span>
        <span className="nav-text">Home</span>
      </div>
      <div
        className={`nav-item ${isActive("/peer-support") ? "active" : ""}`}
        onClick={() => navigate("/peer-support")}
      >
        <span className="nav-icon">👥</span>
        <span className="nav-text">Peer support</span>
      </div>
      <div
        className={`nav-item ${isActive("/reward") ? "active" : ""}`}
        onClick={() => navigate("/reward")}
      >
        <span className="nav-icon">🎯</span>
        <span className="nav-text">Reward</span>
      </div>
      <div
        className={`nav-item ${isActive("/treatment") ? "active" : ""}`}
        onClick={() => navigate("/treatment")}
      >
        <span className="nav-icon">💊</span>
        <span className="nav-text">Treatment</span>
      </div>
    </nav>
  );
};

export default Navigation;
