import MyPostsContainer from "./myPosts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
