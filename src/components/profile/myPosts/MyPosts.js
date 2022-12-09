import { createRef } from "react";
import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
  const items = props.posts.map((item) => (
    <MyPost key={item.id} message={item.message} likesCount={item.likesCount} />
  ));

  const newPostElement = createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className={styles.textarea}
        value={props.newPostText}
      />
      <button onClick={onAddPost} className={styles.btn}>
        Add post
      </button>
      {items}
    </div>
  );
};

export default MyPosts;
