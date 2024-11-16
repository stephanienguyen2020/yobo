import { useState } from "react";
import "../styles/2_PeerSupport.css";
import ReminderModal from "./ReminderModal";
import TodayProgress from "./TodayProgress";
import CheckInSection from "./CheckInSection";

const PeerSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [completedDays, setCompletedDays] = useState([]);

  const [checks, setChecks] = useState({
    You: [false, false, false],
    Aya: [false, false, false],
    Lisa: [false, false, false],
  });

  const handleCheckClick = (userName, position) => {
    setChecks((prevChecks) => {
      const newChecks = { ...prevChecks };
      newChecks[userName] = [...prevChecks[userName]];
      newChecks[userName][position] = !newChecks[userName][position];
      return newChecks;
    });
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

  const handleRemindClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="peer-support">
        <TodayProgress checks={checks} />

        <div className="weekly-section">
          <div className="weekly-header">
            <div className="percentage">0%</div>
            <div className="weekly-right">
              <div className="days-container">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div key={day} className="day-indicator">
                      <button
                        className={`day-dot ${
                          completedDays.includes(day) ? "completed" : ""
                        }`}
                        onClick={() => handleDayClick(day)}
                        aria-label={`Mark ${day} as complete`}
                      />
                      <span className="day-label">{day}</span>
                    </div>
                  )
                )}
              </div>
              <div className="title">Weekly Achievement</div>
            </div>
          </div>
        </div>

        <CheckInSection
          checks={checks}
          onCheckClick={handleCheckClick}
          onRemindClick={handleRemindClick}
        />
      </div>

      <ReminderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </>
  );
};

export default PeerSupport;
