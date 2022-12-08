import { createRef } from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css";

const MyPosts = (props) => {
  const items = props.posts.map((item) => (
    <MyPost key={item.id} message={item.message} likesCount={item.likesCount} />
  ));

  const newPostElement = createRef();

  const onAddPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = updateNewPostActionCreator(text);
    props.dispatch(action);
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
