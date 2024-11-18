import React from "react";
import "../styles/4_Treatment.css";

const Treatment = () => {
  const medications = [
    {
      name: "Medication 1",
      schedule: "4 times daily —08:00,12:00,16:00 and 20:00",
    },
  ];

  return (
    <div className="treatment-container">
      <div className="treatment-header">
        <span className="time">9:41</span>
        <button className="add-button">+</button>
      </div>

      <div className="medications-list">
        {medications.map((medication, index) => (
          <div key={index} className="medication-card">
            <div className="medication-info">
              <div className="medication-title">
                <span className="pill-icon">💊</span>
                <span className="medication-name">{medication.name}</span>
              </div>
              <span className="medication-schedule">{medication.schedule}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatment;
