import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  GetStringKeys,
  Input,
} from "../../common/formsControls/formsControls";
import { login } from "../../redux/auth-reducer";
import { AppDispatch, AppStateType } from "../../redux/store";
import { required } from "../../utils/validators/validators";
import styles from "./../../common/formsControls/formsControls.module.css";

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>(
        "Email",
        "email",
        [required],
        Input
      )}
      {createField<LoginFormValuesTypeKeys>(
        "Password",
        "password",
        [required],
        Input,
        { type: "password" }
      )}
      {createField<LoginFormValuesTypeKeys>(
        undefined,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl} alt='captchaUrl' />}
      {captchaUrl &&
        createField<LoginFormValuesTypeKeys>(
          "Symbols from image",
          "captcha",
          [required],
          Input,
          {}
        )}

      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);

export type LoginFormValuesType = {
  captcha: string;
  rememberMe: boolean;
  password: string;
  email: string;
};
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>;

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector(
    (state: AppStateType) => state.auth.captchaUrl
  );
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(
      login(
        formData.email,
        formData.password,
        formData.rememberMe,
        formData.captcha
      )
    );
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
