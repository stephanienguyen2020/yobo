import { useState } from "react";
import "../styles/1_Home.css";
import ProfileHeader from "./home/ProfileHeader";
import CalendarStrip from "./home/CalendarStrip";
import MedicationList from "./home/MedicationList";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [medications] = useState([
    { time: "8:00", name: "Medication 1", pills: 1 },
    { time: "12:00", name: "Medication 1", pills: 1 },
    { time: "16:00", name: "Medication 1", pills: 1 },
    { time: "20:00", name: "Medication 1", pills: 1 },
  ]);

  const formatDateHeader = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="home-container">
      <ProfileHeader name="Ash" />
      <CalendarStrip
        currentDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
      <div className="date-header">Today, {formatDateHeader(selectedDate)}</div>
      <MedicationList medications={medications} />
    </div>
  );
};

export default Home;
