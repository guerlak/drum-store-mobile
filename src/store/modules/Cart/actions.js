exports.addToCartRequest = id => {
    return {
        type: '@cart/ADD_REQUEST',
        id,
    };
};
exports.addToCartSucess = prod => {
    console.log('suuucesooo');
    return {
        type: '@cart/ADD_SUCESS',
        prod,
    };
};
exports.updateAmount = (id, amount) => {
    return {
        type: '@cart/UPDATE_AMOUNT',
        amount,
        id,
    };
};
exports.reduceAmount = id => {
    return {
        type: 'REDUCE_AMOUNT',
        id,
    };
};

exports.deleteFromCart = id => {
    return {
        type: 'DELETE_PRODUCT',
        id,
    };
};
