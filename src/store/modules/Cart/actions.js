exports.deleteFromCart = id => {
    return {
        type: 'DELETE_PRODUCT',
        id,
    };
};

exports.addToCart = prod => {
    return {
        type: 'ADD_PRODUCT',
        prod,
    };
};
exports.addAmount = id => {
    return {
        type: 'ADD_AMOUNT',
        id,
    };
};
exports.reduceAmount = id => {
    return {
        type: 'REDUCE_AMOUNT',
        id,
    };
};
