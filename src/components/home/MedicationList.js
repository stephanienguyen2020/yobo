import MedicationItem from "./MedicationItem";
import "../../styles/home/MedicationList.css";

const MedicationList = ({ medications }) => {
  return (
    <div className="medications-list">
      {medications.map((med, index) => (
        <MedicationItem key={index} medication={med} />
      ))}
    </div>
  );
};

export default MedicationList;
