import {call, put, all, takeLatest} from 'redux-saga/effects';
import {FORGOT_PASSWORD, FORGOT_TOKEN, SET_NEW_PASSWORD} from './types';
import {
  forgotPasswordSuccess,
  forgotPasswordfailure,
  forgotTokenSuccess,
  forgotTokenFailure,
  setNewpasswordFailure,
} from './actions';
import {Toast} from 'react-native-toast-notifications';
import {BASE_URL} from '../../../Config/app';
import XHR from '../../../Utils/XHR';

async function ForgetPasswordApi(data) {
  const URL = `${BASE_URL}/api/v1/forgot-password/`;
  const option = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };
  return XHR(URL, option);
}

async function ForgetTokendApi(data) {
  const URL = `${BASE_URL}/api/v1/forgot-password/validate_token/`;
  const option = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };
  return XHR(URL, option);
}

async function setNewPassworddApi(data) {
  const URL = `${BASE_URL}/api/v1/forgot-password/confirm/`;
  const option = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };
  return XHR(URL, option);
}

function* ForgotPassword({data, callBack}) {
  try {
    const response = yield call(ForgetPasswordApi, data);
    yield put(forgotPasswordSuccess(response.data));
    Toast.show('code-send');
    callBack();
  } catch (e) {
    const {response} = e;
    yield put(forgotPasswordfailure(response));
    let message = 'Something went wrong, please try again later';
    if (response && response.data && response.data.email) {
      message = response?.data?.email;
    }
    Toast.show(message);
  }
}

function* ForgotToken({data, callBack}) {
  try {
    const response = yield call(ForgetTokendApi, data);
    yield put(forgotTokenSuccess(response.data));
    callBack();
  } catch (e) {
    const {response} = e;
    yield put(forgotTokenFailure(response));
    Toast.show(L('invalid_code'));
  }
}

function* SetNEwPassword({data, callBack}) {
  try {
    yield call(setNewPassworddApi, data);
    Toast.show(L('password_change'));
    callBack();
  } catch (e) {
    const {response} = e;
    yield put(setNewpasswordFailure(response));
    if (response?.data.password) {
      Toast.show(response?.data.password);
    } else {
      Toast.show(L('went_wrong'));
    }
  }
}

export default all([
  takeLatest(FORGOT_PASSWORD, ForgotPassword),
  takeLatest(FORGOT_TOKEN, ForgotToken),
  takeLatest(SET_NEW_PASSWORD, SetNEwPassword),
]);
