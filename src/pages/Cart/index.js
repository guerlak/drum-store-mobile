import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Actions from '../../store/modules/Cart/actions';
import {formatPrice} from '../../util/format';

import {
    Container,
    ProdImage,
    Product,
    ProductsList,
    Info,
    Total,
    Price,
    ProductInfo,
    AmountHandler,
    Input,
    TotalItem,
    Footer,
    Delete,
    CartEmpty,
    CartEmptyText,
} from './style';

function Cart({cart, dispatch, total}) {
    const handleDelete = id => {
        dispatch(Actions.deleteFromCart(id));
    };

    const handleAddAmount = id => {
        dispatch(Actions.addAmount(id));
    };
    const handleReduceAmount = id => {
        dispatch(Actions.reduceAmount(id));
    };

    return cart.length ? (
        <Container>
            <ProductsList
                data={cart}
                keyExtractor={prod => String(prod.id)}
                renderItem={({item}) => (
                    <Product>
                        <ProductInfo>
                            <ProdImage source={{uri: item.image}} />
                            <Info>
                                <Text>{item.title}</Text>
                                <Price>{item.formatedPrice}</Price>
                            </Info>
                        </ProductInfo>
                        <AmountHandler>
                            <Icon
                                name="remove-circle-outline"
                                size={25}
                                onPress={() => handleReduceAmount(item.id)}
                            />
                            <Input value={String(item.amount)} />
                            <Icon
                                name="add-circle-outline"
                                size={25}
                                onPress={() => handleAddAmount(item.id)}
                            />
                            <TotalItem>{item.subTotal}</TotalItem>
                        </AmountHandler>
                        <Delete>
                            <Icon
                                name="delete"
                                size={25}
                                color="#ccc"
                                onPress={() => handleDelete(item.id)}
                            />
                        </Delete>
                    </Product>
                )}
            />
            <Footer>
                <Total>Total: {total}</Total>
            </Footer>
        </Container>
    ) : (
        <CartEmpty>
            <Icon name="remove-shopping-cart" size={50} color="#ccc" />
            <CartEmptyText>No Items in the Cart</CartEmptyText>
        </CartEmpty>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart.map(prod => ({
            ...prod,
            subTotal: formatPrice(prod.price * prod.amount),
        })),
        total: formatPrice(
            state.cart.reduce((acc, current) => acc + current.price, 0),
        ),
    };
};

export default connect(mapStateToProps)(Cart);
