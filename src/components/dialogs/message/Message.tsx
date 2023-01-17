import { FC } from "react";
import styles from "./Message.module.css";

type PropsType = {
  textMessage: string;
};

const Message: FC<PropsType> = ({ textMessage }) => {
  return <div className={styles.message}>{textMessage}</div>;
};

export default Message;
