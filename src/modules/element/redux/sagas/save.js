import {takeLatest, put} from 'redux-saga/effects';
import {loadElements, clearForm, actionTypes} from '.././actions';
import { ELEMENT_TABLE } from 'configs/firebase';

function * saveSuccessfull({item}) {
    if (item.id) {
        update(item);
    } else {
        delete item.id;
        item.key = item.description.toLowerCase();
        create(item);
    }
    yield put(clearForm());
    yield put(loadElements());
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
        .ref(`${ELEMENT_TABLE}/${data.id}`);
    measures.update(data);
}

export default function * watchSave() {
    yield takeLatest(actionTypes.SAVE, saveSuccessfull);
};