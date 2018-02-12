import { fork, all } from 'redux-saga/effects';
import watchList from 'modules/measure/sagas/list';
import watchEdit from 'modules/measure/sagas/edit';
import watchSave from 'modules/measure/sagas/save';
import watchDelete from 'modules/measure/sagas/delete';

function* rootSaga() {
  yield all([
    fork(watchList),
    fork(watchSave),
    fork(watchEdit),
    fork(watchDelete),
  ])
}

export default rootSaga;