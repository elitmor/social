import { FormAction, stopSubmit } from "redux-form";
import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "../api/api";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionsTypes } from "./store";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

const authReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/AUTH/SET_USER_DATA":
    case "SN/AUTH/GET_CAPTCHA_URL_SUCCESS": {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SN/AUTH/SET_USER_DATA",
      payload: { userId, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: "SN/AUTH/GET_CAPTCHA_URL_SUCCESS",
      payload: { captchaUrl },
    } as const),
};

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    const { id, email, login } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean): ThunkType =>
  async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData());
    } else {
      if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      const message =
        data.messages.length > 0 ? data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;
