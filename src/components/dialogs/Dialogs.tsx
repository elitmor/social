// import { Field, reduxForm } from "redux-form";
import { FC } from "react";
import { InitialStateType } from "../../redux/dialogs-reducer";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import DialogItem from "./dialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./message/Message";

type PropsType = {
  dialogsPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};

export type NewMessageFormValuesType = {
  newMessageBody: string;
};
const Dialogs: FC<PropsType> = (props) => {
  const state = props.dialogsPage;
  const dialogs = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messages = state.messages.map((message) => (
    <Message key={message.id} textMessage={message.textMessage} />
  ));

  const addNewMessage = (value: NewMessageFormValuesType) => {
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
