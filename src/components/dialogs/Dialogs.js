// import { Field, reduxForm } from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
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

  const addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);
  };

  return (
    <div className={styles.dialog}>
      <div className={styles.items}>{dialogs}</div>
      <div className={styles.messages}>
        {messages}
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
