import "../../styles/peerSupport/TodayProgress.css";

const TodayProgress = ({ checks }) => {
  const calculateProgress = (userName) => {
    if (!checks || !checks[userName]) return 0;
    const checkedCount = checks[userName].filter((check) => check).length;
    return Math.round((checkedCount / 3) * 100);
  };

  const users = [
    { name: "You", displayName: "You" },
    { name: "Aya", displayName: "Aya" },
    { name: "Lisa", displayName: "Lisa" },
  ];

  return (
    <div className="progress-card">
      <h2>Today's progress</h2>
      <div className="user-progress-list">
        {users.map((user) => (
          <div key={user.name} className="user-progress">
            <div className="user-avatar"></div>
            <div className="progress-circle">
              <span>{calculateProgress(user.name)}%</span>
            </div>
            <span className="user-name">{user.displayName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayProgress;
