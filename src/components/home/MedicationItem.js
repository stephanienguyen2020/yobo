import { useState } from "react";
import "../../styles/home/MedicationItem.css";
import CameraView from "../peerSupport/CameraView";

const MedicationItem = ({ medication }) => {
  const [showCamera, setShowCamera] = useState(false);
  const [status, setStatus] = useState("pending"); // 'pending', 'taken', 'skipped'

  const handleCheckIn = () => {
    setShowCamera(true);
  };

  const handleClose = () => {
    setShowCamera(false);
  };

  const handleVerify = () => {
    setStatus("taken");
    setShowCamera(false);
  };

  const getStatusButton = () => {
    switch (status) {
      case "taken":
        return <span className="status-taken">Taken</span>;
      case "skipped":
        return <span className="status-skipped">Skipped</span>;
      default:
        return (
          <button className="check-in-button" onClick={handleCheckIn}>
            Check in
          </button>
        );
    }
  };

  return (
    <>
      <div className={`medication-item ${status}`}>
        <div className="time-indicator">
          <span className="time">{medication.time}</span>
        </div>
        <div className={`medication-card ${status}`}>
          <div className="medication-info">
            <span className="medication-name">{medication.name}</span>
            <div className="pill-info">
              <span className="pill-icon">💊</span>
              <span className="pill-count">{medication.pills} pill(s)</span>
            </div>
          </div>
          {getStatusButton()}
        </div>
      </div>

      {showCamera && (
        <CameraView onClose={handleClose} onVerify={handleVerify} />
      )}
    </>
  );
};

export default MedicationItem;
