import { takeLatest, call, put } from 'redux-saga/effects';
import { showListElements, actionTypes } from '.././actions';
import { ELEMENT_TABLE } from 'configs/firebase';

function* listElementSuccessfull() {
    const elements = yield window.firebase.database().ref(ELEMENT_TABLE);
    const payload = yield call(fetchList, elements);
    let list = Object.keys(payload || {}).map((k) => ({...payload[k], key: k}));
    
    yield put(showListElements(list));
}

const fetchList = (ref) => {
    return new Promise((resolve, reject) => {
        ref.on('value', data => {
            console.log('fetchList ---> ', data.val())
            resolve(data.val())
        });
    });
};

export default function* watchList() {
    console.log('watchList ---> ', actionTypes.LOAD_LIST)
    yield takeLatest(actionTypes.LOAD_LIST , listElementSuccessfull);
  }