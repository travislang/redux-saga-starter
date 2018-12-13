import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchElements() {
    try {
        console.log('first saga triggered');
        //axios GET request
        const elementResponse = yield call(axios.get, '/api/element')
        yield put({ type: 'SET_ELEMENTS', payload: elementResponse.data })
        //send response to redux
    } catch (error) {
        console.log(error);
    }
}

function* postElement(action) {
    try {
        //trigger post
        yield call(axios.post, '/api/element', action.payload)
        //trigger get
        yield put({ type: 'FETCH_ELEMENTS' })
    } catch (err) {
        console.log(err);

    }
}

// this is the saga that will watch for actions
function* elementSagas() {
    yield takeEvery('FETCH_ELEMENTS', fetchElements)
    yield takeEvery('ADD_ELEMENT', postElement)
}

export default elementSagas;