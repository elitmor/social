import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/formsControls/formsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import MyPost from "./MyPost/MyPost";
import styles from "./MyPosts.module.css";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  const items = props.posts.map((item) => (
    <MyPost key={item.id} message={item.message} likesCount={item.likesCount} />
  ));

  const onAddPost = (value) => {
    props.addPost(value.newPostText);
  };

  return (
    <div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      {items}
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newPostText'
        placeholder='Enter your message'
        validate={[required, maxLength10]}
      />
      <button className={styles.btn}>Add post</button>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
