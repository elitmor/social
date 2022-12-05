import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css";

const MyPosts = ({ postsData }) => {
  const items = postsData.map((item) => (
    <MyPost key={item.id} message={item.message} likesCount={item.likesCount} />
  ));
  return (
    <div>
      <textarea className={styles.textarea}></textarea>
      <button className={styles.btn}>Add post</button>
      {items}
    </div>
  );
};

export default MyPosts;
