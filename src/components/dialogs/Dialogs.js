import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import DialogItem from "./dialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./message/Message";

const Dialog = (props) => {
  const dialogs = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messages = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} textMessage={message.textMessage} />
  ));

  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

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

export default Dialog;
