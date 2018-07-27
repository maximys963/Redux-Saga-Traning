import {delay} from 'redux-saga'
import {put, takeEvery, all} from 'redux-saga/effects'


export function* incrementAsync(){
    yield delay(1000)
    yield put({ type: 'INCREMENT'})
}

export function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* HelloSaga () {
console.log("hello sagas")
}


export default function* rootSaga () {
    yield all([
        HelloSaga(),
        watchIncrementAsync()
    ])
}