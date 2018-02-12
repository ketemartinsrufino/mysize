import { takeLatest, call, put } from 'redux-saga/effects';
import { showList, actionTypes } from 'modules/measure/redux/actions';

function* listSuccessfull() {
    const measures = yield window.firebase.database().ref("measures/");
    const payload = yield call(fetchList, measures);
    let list = Object.keys(payload).map((k) => ({...payload[k], key: k}));
    yield put(showList(list));
}

const fetchList = (ref) => {
    return new Promise((resolve, reject) => {
        ref.on('value', data => {
            resolve(data.val())
        });
    });
};

export default function* watchList() {
    console.log('---watchList ', actionTypes.LOAD_LIST )
    yield takeLatest(actionTypes.LOAD_LIST , listSuccessfull);
  };