import { fork } from 'redux-saga/effects';
import watchList from './list';
import watchEdit from './edit';
import watchSave from './save';
import watchDelete from './delete';

export const elementsSagas = [
  fork(watchList),
  fork(watchSave),
  fork(watchEdit),
  fork(watchDelete),
];;