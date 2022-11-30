// import styles from "./MyPosts.module.css";

import MyPost from "./MyPost/MyPost";

const MyPosts = () => {
  return (
    <div>
      <MyPost message='Hi, how are you?' likesCount='10' />
      <MyPost message="It's my first post" likesCount='25' />
    </div>
  );
};

export default MyPosts;
