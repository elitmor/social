import styles from "./Dialog.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialog = ({ state }) => {
  const dialogs = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messages = state.messages.map((message) => (
    <Message key={message.id} textMessage={message.textMessage} />
  ));

  return (
    <div className={styles.dialog}>
      <div className={styles.items}>{dialogs}</div>
      <div className={styles.messages}>{messages}</div>
    </div>
  );
};

export default Dialog;
