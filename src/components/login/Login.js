import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/formsControls/formsControls";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import styles from "./../../common/formsControls/formsControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name='email'
          type='text'
          placeholder='Email'
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
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to='/profile' />;
  }

  return (
    <div>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
