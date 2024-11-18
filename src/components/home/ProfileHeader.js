import "../../styles/home/ProfileHeader.css";

const ProfileHeader = ({ name }) => {
  return (
    <div className="profile-header">
      <div className="profile-info">
        <div className="profile-avatar"></div>
        <span className="profile-name">{name}</span>
      </div>
      <button className="add-button">+</button>
    </div>
  );
};

export default ProfileHeader;
