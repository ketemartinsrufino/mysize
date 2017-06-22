import { takeLatest, call, put } from 'redux-saga/effects';

function* saveSuccessfull({ payload }) {

    const measures = window.firebase.database().ref("measures/");
    measures.push(payload);

    yield put({ type: 'successfull', payload: {} });

}

export default  function* watchSave() {
    yield takeLatest('Salvar' , saveSuccessfull);
};