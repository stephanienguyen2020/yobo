import { useState } from "react";
import "../styles/ReminderModal.css";
import CameraView from "./CameraView";

const ReminderModal = ({ isOpen, onClose, reminder }) => {
  const [showCamera, setShowCamera] = useState(false);

  if (!isOpen) return null;

  const handleCheckIn = () => {
    setShowCamera(true);
  };

  if (showCamera) {
    return (
      <CameraView
        onClose={() => {
          setShowCamera(false);
          onClose();
        }}
      />
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="reminder-header">
          <div className="user-avatar"></div>
          <span className="reminder-title">Remind from Aya</span>
        </div>

        <p className="reminder-message">
          Hi Ash, it's time to take your first medication for today!
        </p>

        <button className="check-in-button" onClick={handleCheckIn}>
          Check in
        </button>
      </div>
    </div>
  );
};

export default ReminderModal;
