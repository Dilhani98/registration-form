// src/store/sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { RegistrationApi } from '../api/registartionApi';
import {
  setLoading,
  setError,
  resetForm,
} from './reducers';

function* handleRegistration() {
  try {
    yield put(setLoading(true));
    yield put(setError(null));

    // Simulate an API request for registration
    const response = yield call(RegistrationApi.register);

    console.log(response); // Log the response or perform further actions

    yield put(resetForm());
  } catch (error) {
    yield put(setError('Registration failed. Please try again.'));
  } finally {
    yield put(setLoading(false));
  }
}

function* registrationSaga() {
  yield takeLatest('registration/startRegistration', handleRegistration);
}

export default registrationSaga;
