import { useState } from "react";
import TotalBalance from "./reward/TotalBalance";
import UpcomingReward from "./reward/UpcomingReward";
import Dashboard from "./reward/Dashboard";
import "../styles/3_Reward.css";

const Reward = () => {
  const [monthlyProgress, setMonthlyProgress] = useState(8000);
  const monthlyGoal = 10000;
  const totalBalance = 35450;
  const upcomingReward = 10450;

  return (
    <div className="reward-container">
      <TotalBalance balance={totalBalance} />
      <UpcomingReward
        upcomingReward={upcomingReward}
        monthlyProgress={monthlyProgress}
        monthlyGoal={monthlyGoal}
      />
      <Dashboard />
    </div>
  );
};

export default Reward;
