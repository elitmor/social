import { FC } from "react";
import avatar from "../../../../assets/avatar.svg";
import styles from "./Post.module.css";

type PropsType = {
  message: string;
  likesCount: number;
};

const Post: FC<PropsType> = ({ message, likesCount }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt='avatar'
      />
      <p className={styles.text}>{message}</p>
      <div className='count'>{likesCount}</div>
    </div>
  );
};

export default Post;
