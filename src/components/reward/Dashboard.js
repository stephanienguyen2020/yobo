import "../../styles/reward/Dashboard.css";

const Dashboard = () => {
  const dailyProgress = 100;
  const weeklyProgress = 92;

  const getProgressStyle = (percentage) => {
    // Convert percentage to degrees (92% = 331.2 degrees)
    const degrees = (percentage / 100) * 360;

    return {
      background: `conic-gradient(
        #2196f3 0deg ${degrees}deg,
        #f5f5f5 ${degrees}deg 360deg
      )`,
    };
  };

  return (
    <div className="dashboard-card">
      <h2>Dashboard</h2>
      <div className="adherence-section">
        <p className="section-title">Adherence Rate</p>
        <div className="rate-circles">
          <div className="rate-item">
            <div className="circle-progress daily">
              <span className="percentage">{dailyProgress}%</span>
            </div>
            <span className="label">Daily</span>
          </div>
          <div className="rate-item">
            <div
              className="circle-progress weekly"
              style={getProgressStyle(weeklyProgress)}
            >
              <span className="percentage">{weeklyProgress}%</span>
            </div>
            <span className="label">Weekly</span>
          </div>
        </div>
      </div>
      <div className="medication-section">
        <div className="date">
          <span className="month">Sep</span>
          <span className="day">24</span>
        </div>
        <div className="medication-info">
          <div className="count">
            <span>0</span>
            <span className="count-label">left</span>
          </div>
          <span className="subtitle">Medication</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
