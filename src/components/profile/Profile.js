import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
