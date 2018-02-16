import {takeLatest,put} from 'redux-saga/effects';
import { actionTypes, loadItems } from '.././actions';
import { ELEMENT_TABLE } from 'configs/firebase';

function* deleteSuccessfull(action) {
    window.firebase.database().ref(ELEMENT_TABLE).child(action.key).remove();
    yield put(loadItems());
}

export default function* watchDelete() {
    yield takeLatest(actionTypes.DELETE , deleteSuccessfull);
};