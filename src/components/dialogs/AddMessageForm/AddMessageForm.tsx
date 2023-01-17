import { FC } from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  Textarea,
} from "../../../common/formsControls/formsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { NewMessageFormValuesType } from "../Dialogs";
import styles from "./AddMessageForm.module.css";

const maxLength50 = maxLengthCreator(50);

type NewMessageFormValuesKeysType = Extract<
  keyof NewMessageFormValuesType,
  string
>;
type PropsType = {};

const AddMessageForm: FC<
  InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField<NewMessageFormValuesKeysType>(
        "Enter your message",
        "newMessageBody",
        [required, maxLength50],
        Textarea
      )}

      <button className={styles.btn}>Add Message</button>
    </form>
  );
};

export default reduxForm<NewMessageFormValuesType>({
  form: "dialogAddMessageForm",
})(AddMessageForm);
