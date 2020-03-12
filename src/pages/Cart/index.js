import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Cart({cart}) {
    // const {title, image, formatedPrice} = props.route.params;

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
                            <Icon name="add-circle-outline" size={25} />
                            <Input value="32" />
                            <Icon name="remove-circle-outline" size={25} />
                            <TotalItem>R$ 1.928,00</TotalItem>
                        </AmountHandler>
                        <Delete>
                            <Icon name="delete" size={25} color="#ccc" />
                        </Delete>
                    </Product>
                )}
            />
            <Footer>
                <Total>Total: R$ 1.200,00</Total>
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
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Cart);
