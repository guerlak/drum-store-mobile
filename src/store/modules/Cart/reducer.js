import {formatPrice} from '../../../util/format';

export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const product = action.prod;
            let prodIndex = state.findIndex(p => p.id === product.id);

            if (prodIndex !== -1 || prodIndex > 0) {
                return state;
            } else {
                return [...state, {...product, amount: 1}];
            }
        case 'DELETE_PRODUCT':
            prodIndex = state.findIndex(el => el.id === action.id);
            state.splice(prodIndex, 1);

            return [...state];

        case 'ADD_AMOUNT':
            prodIndex = state.findIndex(el => el.id === action.id);
            state[prodIndex].amount++;

            return [...state];

        case 'REDUCE_AMOUNT':
            prodIndex = state.findIndex(el => el.id === action.id);
            state[prodIndex].amount > 1 ? state[prodIndex].amount-- : state;

            return [...state];

        default:
            return state;
    }
}
