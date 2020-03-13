exports.addToCartRequest = id => {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    };
};
exports.addToCartSuccess = prod => {
    console.log('suuucesooo');
    return {
        type: '@cart/ADD_SUCCESS',
        prod,
    };
};
exports.updateAmountRequest = (id, amount) => {
    return {
        type: '@cart/UPDATE_AMOUNT_REQUEST',
        amount,
        id,
    };
};

exports.updateAmountSuccess = (id, amount) => {
    return {
        type: '@cart/UPDATE_AMOUNT_SUCCESS',
        amount,
        id,
    };
};

exports.deleteFromCart = id => {
    return {
        type: '@cart/DELETE_PRODUCT',
        id,
    };
};
