import avatar from "../../../../assets/avatar.svg";
import styles from "./MyPost.module.css";

const MyPost = ({ message, likesCount }) => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt='avatar' />
      <p className={styles.text}>{message}</p>
      <div className='count'>{likesCount}</div>
    </div>
  );
};

export default MyPost;
