import {takeLatest, put} from 'redux-saga/effects';
import {loadItems, clearForm, actionTypes} from '.././actions';
import { ELEMENT_TABLE } from 'configs/firebase';

function * saveSuccessfull({item}) {
    if (item.key) {
        update(item);
    } else {
        delete item.key;
        create(item);
    }
    yield put(clearForm());
    yield put(loadItems());
}

const create = (data, onComplete) => {
    const measures = window
        .firebase
        .database()
        .ref(ELEMENT_TABLE);
    measures.push(data, onComplete);

}
const update = (data) => {
    const measures = window
        .firebase
        .database()
        .ref(`${ELEMENT_TABLE}/${data.key}`);
    measures.update(data);
}

export default function * watchSave() {
    yield takeLatest(actionTypes.SAVE, saveSuccessfull);
};