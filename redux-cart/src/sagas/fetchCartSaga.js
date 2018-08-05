import fetch from 'isomorphic-fetch'
import {take, put} from 'redux-saga/effects'

import {
    setCartItems,
    SET_CURRENT_USER,
} from './../actions';

export function* fetchCartSaga (){
    const {user} = yield take(SET_CURRENT_USER);
    const {id} = user;
    const response = yield fetch(`http://localhost:8081/cart/${id}`);
    const {items} = yield response.json();
    yield put(setCartItems(items));
    console.info("set cart items", items);
}
