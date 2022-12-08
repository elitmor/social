import styles from "./Message.module.css";

const Message = ({ textMessage }) => {
  return <div className={styles.message}>{textMessage}</div>;
};

export default Message;
