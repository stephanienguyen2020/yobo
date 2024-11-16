import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-item">
        <span className="nav-icon">🏠</span>
        <span className="nav-text">Home</span>
      </div>
      <div className="nav-item active">
        <span className="nav-icon">👥</span>
        <span className="nav-text">Peer support</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">🎯</span>
        <span className="nav-text">Reward</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">💊</span>
        <span className="nav-text">Treatment</span>
      </div>
    </nav>
  );
};

export default Navigation;
