export default function cart(state = [], action) {
    console.log(action);
    switch (action.type) {
        case '@cart/ADD_SUCESS':
            return [...state, {...action.prod}];

        case 'DELETE_PRODUCT':
            let prodIndex = state.findIndex(el => el.id === action.id);
            state.splice(prodIndex, 1);

            return [...state];

        case 'ADD_AMOUNT':
            prodIndex = state.findIndex(el => el.id === action.id);
            state[prodIndex].amount++;

            return [...state];

        case '@cart/UPDATE_SUCESS':
            prodIndex = state.findIndex(el => el.id === action.id);
            state[prodIndex] = action.amount;
            return [...state];

        case 'REDUCE_AMOUNT':
            prodIndex = state.findIndex(el => el.id === action.id);
            state[prodIndex].amount > 1 ? state[prodIndex].amount-- : state;

            return [...state];

        default:
            return state;
    }
}
