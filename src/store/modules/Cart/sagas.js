import api from '../../../services/api';
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import {addToCartSuccess, updateAmountSuccess} from './actions';
import {Alert} from 'react-native';

function* addToCart({id}) {
    const prodExists = yield select(state => state.cart.find(p => p.id === id));

    if (prodExists) {
        return;
    } else {
        const response = yield call(api.get, '5e67121dff85de370f672ccd');
        const products = response.data.products;
        const index = products.findIndex(p => p.id === id);
        const product = {...products[index], amount: 1};
        yield put(addToCartSuccess(product));
    }
}

function* updateAmount({id, amount}) {
    if (amount <= 0) {
        return;
    }
    const response = yield call(api.get, '5e67121dff85de370f672ccd');
    const stock = response.data.stock;
    const index = stock.findIndex(p => p.id === id);
    if (stock[index].amount < amount) {
        Alert.alert(
            'Sem estoque',
            'Desculpe, não temos estoque suficientes para quantidade selecionada.',
        );
        return;
    }
    yield put(updateAmountSuccess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_REQUEST', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
