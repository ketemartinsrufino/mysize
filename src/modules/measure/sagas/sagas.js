import { fork } from 'redux-saga/effects';
import watchList from './list'
import watchSave from './save'

function* rootSaga() {
  yield fork(watchList);
  yield fork(watchSave);
}

export default rootSaga;