export default function cart(state = [], action) {
    console.log(action);
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return [...state, {...action.prod}];
        case '@cart/UPDATE_AMOUNT_SUCCESS':
            const index = state.findIndex(el => el.id === action.id);
            state[index].amount = action.amount;
            return [...state];
        case '@cart/DELETE_PRODUCT':
            let prodIndex = state.findIndex(el => el.id === action.id);
            state.splice(prodIndex, 1);
            return [...state];
        default:
            return state;
    }
}
