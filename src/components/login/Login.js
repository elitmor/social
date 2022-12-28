import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/formsControls/formsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name='login'
          type='text'
          placeholder='Login'
          validate={[required]}
        />
      </div>
      <div>
        <Field
          component={Input}
          name='password'
          type='password'
          placeholder='Password'
          validate={[required]}
        />
      </div>
      <div>
        <label>
          <Field component={Input} name='rememberMe' type='checkbox' />
          Remember me
        </label>
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
