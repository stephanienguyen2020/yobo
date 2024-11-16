import "../styles/CheckInSection.css";
import { useState, useEffect } from "react";
import ReminderModal from "./ReminderModal";

const CheckInSection = ({ checks, onCheckClick, onRemindClick }) => {
  const users = [
    { name: "You", displayName: "You", likes: 1 },
    { name: "Aya", displayName: "Aya", remind: true },
    { name: "Lisa", displayName: "Lisa", remind: true },
  ];

  const [likes, setLikes] = useState({
    You: [false, false, false],
    Aya: [false, false, false],
    Lisa: [false, false, false],
  });

  const [showLikePopup, setShowLikePopup] = useState(false);
  const [likePoints, setLikePoints] = useState(0);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [remindedUsers, setRemindedUsers] = useState({
    Aya: false,
    Lisa: false,
  });
  const [showRemindPopup, setShowRemindPopup] = useState(false);

  // Check if first medication is taken
  useEffect(() => {
    const isFirstCheckMissing = !checks["You"][0];
    if (isFirstCheckMissing) {
      setShowReminderModal(true);
      setSelectedUser("You");
    }
  }, [checks]);

  const handleHeartClick = (userName, position) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[userName] = [...prevLikes[userName]];
      newLikes[userName][position] = !newLikes[userName][position];

      if (newLikes[userName][position]) {
        setLikePoints((prev) => prev + 50);
        setShowLikePopup(true);
        setTimeout(() => {
          setShowLikePopup(false);
        }, 3000);
      }

      return newLikes;
    });
  };

  const handleRemindClick = (user) => {
    setSelectedUser(user);
    setRemindedUsers((prev) => ({
      ...prev,
      [user.name]: true,
    }));
    setShowRemindPopup(true);
    setTimeout(() => {
      setShowRemindPopup(false);
    }, 3000);
  };

  const handleVerification = () => {
    // Mark the first medication as taken for "You"
    onCheckClick("You", 0);
  };

  return (
    <div className="check-in-section">
      <div className="header">
        <span className="clock-icon">🕐</span>
        <h1 className="header-text">Check in</h1>
      </div>

      <div className="checkin-grid">
        <div className="checkin-header">
          <div className="left-space"></div>
          <div className="checkin-columns">
            <div className="time-slot">1st</div>
            <div className="time-slot">2nd</div>
            <div className="time-slot">3rd</div>
          </div>
        </div>

        <div className="user-list">
          {users.map((user) => (
            <div key={user.name} className="user-row">
              <div className="left-section">
                <div className="user-profile">
                  <div className="user-avatar"></div>
                  <span className="user-display-name">{user.displayName}</span>
                </div>
                {user.name === "You" ? (
                  <div className="like-container">
                    <span>Got</span>
                    <div className="like-heart">
                      <span className="like-number">{user.likes}</span>
                    </div>
                    <span>Likes</span>
                  </div>
                ) : (
                  <button
                    className={`remind-button ${
                      remindedUsers[user.name] ? "reminded" : ""
                    }`}
                    onClick={() => handleRemindClick(user)}
                    disabled={remindedUsers[user.name]}
                  >
                    Remind
                  </button>
                )}
              </div>
              <div className="checkin-column">
                {[0, 1, 2].map((position) => (
                  <div key={position} className="checkin-item">
                    <button
                      className={`status-indicator circle ${
                        checks[user.name][position] ? "checked" : ""
                      } ${user.name === "You" ? "you" : "other"}`}
                      onClick={() => {
                        console.log("Circle clicked:", user.name, position);
                        onCheckClick(user.name, position);
                      }}
                    >
                      {checks[user.name][position] && "✓"}
                    </button>
                    {user.name !== "You" && (
                      <button
                        className={`like-heart-button ${
                          likes[user.name][position] ? "active" : ""
                        }`}
                        onClick={() => handleHeartClick(user.name, position)}
                      >
                        ♥
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showLikePopup && (
        <div className="popup-overlay">
          <div className="like-popup">
            <button
              className="close-button"
              onClick={() => setShowLikePopup(false)}
            >
              ✕
            </button>
            <div className="popup-content">
              <h2>50</h2>
              <p>"Likes" points!</p>
              <div className="popup-icon">🎉</div>
              <p>Thanks for supporting your team!</p>
            </div>
          </div>
        </div>
      )}

      {showReminderModal && (
        <ReminderModal
          isOpen={showReminderModal}
          onClose={() => setShowReminderModal(false)}
          user={selectedUser}
          onVerify={handleVerification}
        />
      )}

      {showRemindPopup && (
        <div className="popup-overlay">
          <div className="like-popup">
            <button
              className="close-button"
              onClick={() => setShowRemindPopup(false)}
            >
              ✕
            </button>
            <div className="popup-content">
              <h2>50</h2>
              <p>"Remind" points!</p>
              <div className="popup-icon">🎉</div>
              <p>Thanks for supporting your team!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckInSection;
