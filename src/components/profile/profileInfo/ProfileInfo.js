import avatar from "../../../assets/avatar.svg";
import Preloader from "../../../common/preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <h4 className={styles.info}>ProfileInfo</h4>
      <p>{profile.fullName}</p>
      <p>{profile.contacts.github}</p>
      <img
        className={styles.avatar}
        src={profile.photos.large || avatar}
        alt='avatar'
      />
      {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
