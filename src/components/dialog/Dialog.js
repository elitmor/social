import styles from "./Dialog.module.css";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

const dialogsData = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Ksy" },
  { id: 3, name: "Liza" },
  { id: 4, name: "John" },
  { id: 5, name: "Victor" },
  { id: 6, name: "Alexis" },
];

const messagesData = [
  { id: 1, textMessage: "Hi" },
  { id: 2, textMessage: "Hello" },
  { id: 3, textMessage: "You" },
];

const Dialog = () => {
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
