export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const product = action.prod;
            const amount = state.amount !== 0 ? state.amount : 0;
            state.amount = amount;

            return [...state, product];
        default:
            return state;
    }
}
