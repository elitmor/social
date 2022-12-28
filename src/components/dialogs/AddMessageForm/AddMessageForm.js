import styles from "./AddMessageForm.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/formsControls/formsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        className={styles.textarea}
        component={Textarea}
        name='newMessageBody'
        placeholder='Enter your message'
        validate={[required, maxLength50]}
      />
      <button className={styles.btn}>Add Message</button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
