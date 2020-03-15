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
    AmountInfo,
    InputArea,
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

    function increment(id, amount) {
        amount = amount + 1;
        dispatch(Actions.updateAmountRequest(id, amount));
    }

    function decrement(id, amount) {
        amount = amount - 1;
        dispatch(Actions.updateAmountRequest(id, amount));
    }

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
                        <AmountInfo>
                            <InputArea>
                                <Icon
                                    name="remove-circle-outline"
                                    size={25}
                                    onPress={() =>
                                        decrement(item.id, item.amount)
                                    }
                                />
                                <Input value={String(item.amount)} />
                                <Icon
                                    name="add-circle-outline"
                                    size={25}
                                    onPress={() =>
                                        increment(item.id, item.amount)
                                    }
                                />
                            </InputArea>

                            <TotalItem>{item.subTotal}</TotalItem>
                        </AmountInfo>
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
            formatedPrice: formatPrice(prod.price),
        })),
        total: formatPrice(
            state.cart.reduce(
                (acc, current) => acc + current.price * current.amount,
                0,
            ),
        ),
    };
};

export default connect(mapStateToProps)(Cart);
