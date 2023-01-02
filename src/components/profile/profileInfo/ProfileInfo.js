import Preloader from "../../../common/preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <h4 className={styles.info}>ProfileInfo</h4>
      <p>{profile.fullName}</p>
      <img src={profile.photos.large} alt='avatar' />
      <p>{profile.contacts.github}</p>
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
