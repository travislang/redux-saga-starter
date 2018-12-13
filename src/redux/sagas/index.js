import elementSagas from './elementsSaga';
import { all } from 'redux-saga/effects';

function* rootSaga() {
    yield all([
        elementSagas()
    ]);
}

export default rootSaga;