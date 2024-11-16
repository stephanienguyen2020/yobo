import { useState, useEffect } from "react";
import "../styles/WeeklyAchievement.css";

const WeeklyAchievement = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [completedDays, setCompletedDays] = useState([]);
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Get current day
    const today = new Date();
    const dayName = days[today.getDay()];
    setCurrentDay(dayName);
  }, []);

  const calculatePercentage = () => {
    return Math.round((completedDays.length / 7) * 100);
  };

  const handleDayClick = (day) => {
    setCompletedDays((prev) => {
      if (prev.includes(day)) {
        return prev.filter((d) => d !== day);
      } else {
        return [...prev, day];
      }
    });
  };

  return (
    <div
      className="achievement-card"
      style={{
        "--progress-percentage": `${calculatePercentage()}%`,
      }}
    >
      <div className="weekly-header">
        <div className="percentage">{calculatePercentage()}%</div>
        <div className="weekly-right">
          <div className="days-container">
            {days.map((day) => (
              <div
                key={day}
                className={`day-indicator ${
                  day === currentDay ? "current" : ""
                }`}
              >
                <button
                  className={`day-dot ${
                    completedDays.includes(day) ? "completed" : ""
                  } ${day === currentDay ? "current" : ""}`}
                  onClick={() => handleDayClick(day)}
                  aria-label={`Mark ${day} as complete`}
                />
                <span className="day-label">{day}</span>
              </div>
            ))}
          </div>
          <div className="title">Weekly Achievement</div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyAchievement;
