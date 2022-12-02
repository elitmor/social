import styles from "./Dialog.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialog = () => {
  return (
    <div className={styles.dialog}>
      <div className={styles.items}>
        <DialogItem name='Alex' id='1' />
        <DialogItem name='Ksy' id='2' />
        <DialogItem name='Liza' id='3' />
        <DialogItem name='John' id='4' />
        <DialogItem name='Victor' id='5' />
        <DialogItem name='Alexis' id='6' />
      </div>
      <div className={styles.messages}>
        <Message textMessage='Hi' />
        <Message textMessage='Hello' />
        <Message textMessage='You' />
      </div>
    </div>
  );
};

export default Dialog;
