import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className='profile'>
      <ProfileInfo
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
