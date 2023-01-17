import { ChangeEvent, FC, useState } from "react";
// import avatar from "../../../assets/avatar";
import Preloader from "../../../common/preloader/Preloader";
import { ContactsType, ProfileType } from "../../../types/types";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

type PropsType = {
  profile: ProfileType | null;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

const ProfileInfo: FC<PropsType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: ProfileType) => {
    // todo: remove then
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <h4 className={styles.info}>ProfileInfo</h4>
      <img
        className={styles.avatar}
        src={
          profile.photos.large ||
          "https://thumbs.dreamstime.com/b/businessman-avatar-line-icon-vector-illustration-design-79327237.jpg"
        }
        alt='avatar'
      />
      {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
      {editMode ? (
        <ProfileDataFormReduxForm
          initialValues={profile}
          profile={profile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          goToEditMode={() => {
            setEditMode(true);
          }}
          profile={profile}
          isOwner={isOwner}
        />
      )}
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};

type ProfileDataPropsType = {
  profile: ProfileType;
  isOwner: boolean;
  goToEditMode: () => void;
};

const ProfileData: FC<ProfileDataPropsType> = ({
  profile,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key as keyof ContactsType]}
            />
          );
        })}
      </div>
    </div>
  );
};

type ContactsPropsType = {
  contactTitle: string;
  contactValue: string;
};

const Contact: FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={styles.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
