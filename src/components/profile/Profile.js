import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = ({ postsData }) => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPosts postsData={postsData} />
    </div>
  );
};

export default Profile;
