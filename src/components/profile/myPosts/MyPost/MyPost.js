import avatar from "../../../../assets/avatar.svg";
import styles from "./MyPost.module.css";

const MyPost = () => {
  return (
    <div>
      <img className={styles.avatar} src={avatar} alt='avatar' />
      <p className={styles.item}>post</p>
    </div>
  );
};

export default MyPost;
