import {takeLatest,put, call} from 'redux-saga/effects';
import { showItem, actionTypes } from '.././actions';
import { ELEMENT_TABLE } from 'configs/firebase';

function* getItem(action) {
    console.log('--- action', action)
    const measures = window.firebase.database().ref(ELEMENT_TABLE).child(action.id);
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