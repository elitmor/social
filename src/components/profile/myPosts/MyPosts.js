import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css";

const postsData = [
  { id: 1, message: "Hi, how are you?", likesCount: 10 },
  { id: 2, message: "It's my first post", likesCount: 25 },
  { id: 3, message: "Easy", likesCount: 100 },
];

const MyPosts = () => {
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
