import {takeLatest,put} from 'redux-saga/effects';
import { actionTypes } from 'modules/measure/redux/actions';
import { loadItems } from 'modules/measure/redux/actions';

function* deleteSuccessfull(action) {
    console.log('--- deleteSuccessfull, action=', action);
    window.firebase.database().ref('measures').child(action.key).remove();
    yield put(loadItems());
}

export default function* watchDelete() {
    yield takeLatest(actionTypes.DELETE , deleteSuccessfull);
};