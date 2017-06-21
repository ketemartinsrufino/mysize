import { fork, takeLatest, call, put } from 'redux-saga/effects';

const fetchList = (ref) => {
  return new Promise((resolve, reject) => {
    ref.on('value', data => {
      resolve(data.val())
    });
  });
};

function* listSuccessfull() {

  const measures = yield window.firebase.database().ref("measures/");
  const payload = yield call(fetchList, measures);
  let list = Object.keys(payload).map((k) => ({...payload[k], key: k}));

  yield put({ type: 'successfull', payload: list });
}

function* watchList() {
  yield takeLatest('Listar' , listSuccessfull);
}

function* rootSaga() {
  yield fork(watchList);
}

export default rootSaga;