import { useState } from "react";
import "../styles/2_PeerSupport.css";
import WeeklyAchievement from "./peerSupport/WeeklyAchievement";
import TodayProgress from "./peerSupport/TodayProgress";
import ReminderModal from "./peerSupport/ReminderModal";
import CheckInSection from "./peerSupport/CheckInSection";

const PeerSupport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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

  const handleRemindClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="peer-support">
        <TodayProgress checks={checks} />
        <WeeklyAchievement />
        <CheckInSection
          checks={checks}
          onCheckClick={handleCheckClick}
          onRemindClick={handleRemindClick}
        />
      </div>
    </>
  );
};

export default PeerSupport;
