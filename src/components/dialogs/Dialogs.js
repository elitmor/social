import { Navigate } from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./message/Message";

const Dialogs = (props) => {
  const state = props.dialogsPage;
  const dialogs = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messages = state.messages.map((message) => (
    <Message key={message.id} textMessage={message.textMessage} />
  ));

  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={styles.dialog}>
      <div className={styles.items}>{dialogs}</div>
      <div className={styles.messages}>
        {messages}
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder='Enter your message'
          className={styles.textarea}
        ></textarea>
        <button onClick={onSendMessageClick} className={styles.btn}>
          Add Message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
