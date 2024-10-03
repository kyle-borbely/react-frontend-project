import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUUCESS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_TOKEN,
  FORGOT_TOKEN_SUCCESS,
  FORGOT_TOKEN_FAILUR,
  SET_NEW_PASSWORD,
  SET_NEW_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD_FAILURE,
} from "./types";

export const forgotPassword = (data, callBack) => ({
  type: FORGOT_PASSWORD,
  data,
  callBack,
});

export const forgotPasswordSuccess = (data) => ({
  type: FORGOT_PASSWORD_SUUCESS,
  data,
});

export const forgotPasswordfailure = (error) => ({
  type: FORGOT_PASSWORD_FAILURE,
  error,
});

export const forgotToken = (data, callBack) => ({
  type: FORGOT_TOKEN,
  data,
  callBack,
});

export const forgotTokenSuccess = (data) => ({
  type: FORGOT_TOKEN_SUCCESS,
  data,
});

export const forgotTokenFailure = (error) => ({
  type: FORGOT_TOKEN_FAILUR,
  error,
});

export const setNewpassword = (data, callBack) => ({
  type: SET_NEW_PASSWORD,
  data,
  callBack,
});

export const setNewpasswordSuccess = (data) => ({
  type: SET_NEW_PASSWORD_SUCCESS,
  data,
});

export const setNewpasswordFailure = (error) => ({
  type: SET_NEW_PASSWORD_FAILURE,
  error,
});
