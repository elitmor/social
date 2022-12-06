import { createRef } from "react";
import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css";

const MyPosts = ({ postsData }) => {
  const items = postsData.map((item) => (
    <MyPost key={item.id} message={item.message} likesCount={item.likesCount} />
  ));

  const newPostElement = createRef();

  const onAddPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <textarea ref={newPostElement} className={styles.textarea}></textarea>
      <button onClick={onAddPost} className={styles.btn}>
        Add post
      </button>
      {items}
    </div>
  );
};

export default MyPosts;
