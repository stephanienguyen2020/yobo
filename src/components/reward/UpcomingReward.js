import "../../styles/reward/UpcomingReward.css";

const UpcomingReward = ({ upcomingReward, monthlyProgress, monthlyGoal }) => {
  const calculateProgressPercentage = () => {
    return (monthlyProgress / monthlyGoal) * 100;
  };

  return (
    <div className="reward-card upcoming-card">
      <h2>Upcoming reward</h2>
      <div className="points-display">
        <span className="points">{upcomingReward.toLocaleString()}</span>
        <span className="pts">pts</span>
      </div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${calculateProgressPercentage()}%` }}
        ></div>
      </div>
      <div className="progress-label">
        Monthly Progress {monthlyProgress.toLocaleString()} /
        {monthlyGoal.toLocaleString()}
      </div>
    </div>
  );
};

export default UpcomingReward;
