import "../../styles/reward/TotalBalance.css";

const TotalBalance = ({ balance }) => {
  return (
    <div className="reward-card balance-card">
      <h2>Total Reward Balance</h2>
      <div className="points-display">
        <span className="points">{balance.toLocaleString()}</span>
        <span className="pts">pts</span>
      </div>
      <button className="redeem-button">Redeem points</button>
    </div>
  );
};

export default TotalBalance;
