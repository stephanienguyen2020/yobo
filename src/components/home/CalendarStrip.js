import { useState, useEffect } from "react";
import "../../styles/home/CalendarStrip.css";

const CalendarStrip = ({ currentDate, onDateSelect }) => {
  const [weekDates, setWeekDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Get dates for the current week
  const getWeekDates = (date) => {
    const curr = new Date(date);
    const week = [];

    // Get Monday of current week
    curr.setDate(
      curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1)
    );

    // Get all days of the week
    for (let i = 0; i < 7; i++) {
      const day = new Date(curr);
      week.push(day);
      curr.setDate(curr.getDate() + 1);
    }

    return week;
  };

  // Format date to display
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
  };

  // Navigate to previous week
  const previousWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    setSelectedDate(newDate);
  };

  // Navigate to next week
  const nextWeek = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    setSelectedDate(newDate);
  };

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  // Check if date is selected
  const isSelected = (date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  // Update week dates when selected date changes
  useEffect(() => {
    const dates = getWeekDates(selectedDate);
    setWeekDates(dates);
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="calendar-strip">
      <button className="nav-arrow" onClick={previousWeek}>
        ‹
      </button>
      <div className="days-container">
        {weekDates.map((date, index) => (
          <div
            key={index}
            className={`day-item ${isToday(date) ? "today" : ""} ${
              isSelected(date) ? "active" : ""
            }`}
            onClick={() => handleDateSelect(date)}
          >
            <span className="day-name">{formatDate(date)}</span>
            <span className="date-number">{date.getDate()}</span>
          </div>
        ))}
      </div>
      <button className="nav-arrow" onClick={nextWeek}>
        ›
      </button>
    </div>
  );
};

export default CalendarStrip;
