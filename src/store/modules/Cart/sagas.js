import api from '../../../services/api';
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import {addToCartSucess} from './actions';

function* addToCart({id}) {
    const prodExists = yield select(state => state.cart.find(p => p.id === id));

    if (prodExists) {
        return;
    } else {
        const response = yield call(api.get, '5e67121dff85de370f672ccd');
        const products = response.data.products;
        const index = products.findIndex(p => p.id === id);
        const product = {...products[index], amount: 1};
        yield put(addToCartSucess(product));
    }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
