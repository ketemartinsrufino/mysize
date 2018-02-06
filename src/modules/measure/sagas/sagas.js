import { fork } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import { listar } from 'modules/measure/redux/actions';

function* deleteSuccessfull({ payload }) {

    // const measures = window.firebase.database().ref("measures/");
    // measures.push(payload);

    // yield put({ type: 'successfull', payload: {} });

}
function* watchDelete() {
    yield takeLatest('DELETE' , saveSuccessfull);
};

function* listSuccessfull() {
    const measures = yield window.firebase.database().ref("measures/");
    const payload = yield call(fetchList, measures);
    let list = Object.keys(payload).map((k) => ({...payload[k], key: k}));
    yield put(listar(list));
}

const fetchList = (ref) => {
    return new Promise((resolve, reject) => {
        ref.on('value', data => {
            resolve(data.val())
        });
    });
};

function* saveSuccessfull({ payload }) {
  const measures = window.firebase.database().ref("measures/");
  measures.push(payload);
  yield put({ type: 'successfull', payload: {} });
}

function* watchList() {
  yield takeLatest('LOAD' , listSuccessfull);
};

function* watchSave() {
  yield takeLatest('SalvarSaga' , saveSuccessfull);
};

function* rootSaga() {
  yield fork(watchList);
  yield fork(watchSave);
  yield fork(watchDelete);
}

export default rootSaga;