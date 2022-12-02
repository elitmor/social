import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <textarea className={styles.textarea}></textarea>
      <button className={styles.btn}>Add post</button>
      <MyPost message='Hi, how are you?' likesCount='10' />
      <MyPost message="It's my first post" likesCount='25' />
    </div>
  );
};

export default MyPosts;
