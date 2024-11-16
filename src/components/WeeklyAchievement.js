import "../styles/WeeklyAchievement.css";

const WeeklyAchievement = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="achievement-card">
      <div className="percentage">0%</div>
      <div className="week-days">
        {days.map((day) => (
          <div key={day} className="day-indicator">
            <div className="day-dot"></div>
            <span className="day-label">{day}</span>
          </div>
        ))}
      </div>
      <div className="title">Weekly Achievement</div>
    </div>
  );
};

export default WeeklyAchievement;
