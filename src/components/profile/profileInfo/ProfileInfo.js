import Preloader from "../../../common/preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <h4 className={styles.info}>ProfileInfo</h4>
      <p>{props.profile.fullName}</p>
      <img src={props.profile.photos.large} alt='avatar' />
      <p>{props.profile.contacts.github}</p>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};

export default ProfileInfo;
