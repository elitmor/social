import styles from "./Dialog.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const Dialog = ({ dialogsData, messagesData }) => {
  const dialogs = dialogsData.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messages = messagesData.map((message) => (
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
