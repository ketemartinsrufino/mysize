import {takeLatest,put, call} from 'redux-saga/effects';
import { showItem, actionTypes } from 'modules/measure/redux/actions';

function* getItem(action) {
    const measures = window.firebase.database().ref(`measures`).child(action.key);
    const payload = yield call(fetchItem, measures);
    payload.id = action.id;
    yield put(showItem(payload));
}

const fetchItem = (ref) => {
    return new Promise((resolve, reject) => {
        ref.on('value', data => {
            resolve(data.val())
        });
    });
};

export default function* watchEdit() {
    yield takeLatest(actionTypes.LOAD_ITEM , getItem);
};