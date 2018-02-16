import {takeLatest,put} from 'redux-saga/effects';
import { actionTypes, loadElements } from '.././actions';
import { ELEMENT_TABLE } from 'configs/firebase';

function* deleteSuccessfull(action) {
    window.firebase.database().ref(ELEMENT_TABLE).child(action.key).remove();
    yield put(loadElements());
}

export default function* watchDelete() {
    yield takeLatest(actionTypes.DELETE , deleteSuccessfull);
};