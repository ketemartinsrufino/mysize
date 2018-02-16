import { fork, all } from 'redux-saga/effects';
import watchList from './list';
import watchEdit from './edit';
import watchSave from './save';
import watchDelete from './delete';

import {elementsSagas} from 'modules/element/redux/sagas/sagas';

function* rootSaga() {
  const measures = [
    fork(watchList),
    fork(watchSave),
    fork(watchEdit),
    fork(watchDelete),
  ];

  yield all(measures.concat(elementsSagas))
}

export default rootSaga;