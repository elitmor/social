import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = ({ state }) => {
  return (
    <div className='profile'>
      <ProfileInfo />
      <MyPosts postsData={state.posts} />
    </div>
  );
};

export default Profile;
