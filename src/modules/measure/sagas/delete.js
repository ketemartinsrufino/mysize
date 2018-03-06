import {takeLatest,put} from 'redux-saga/effects';
import { loadItems, actionTypes } from '.././redux/actions';
import { MEASURE_TABLE } from 'configs/firebase';

function* deleteSuccessfull(action) {
    window.firebase.database().ref(MEASURE_TABLE).child(action.id).remove();
    yield put(loadItems());
}

export default function* watchDelete() {
    yield takeLatest(actionTypes.DELETE , deleteSuccessfull);
};