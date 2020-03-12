export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const product = action.prod;
            return [...state, product];
        default:
            return state;
    }
}
