import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    ProdImage,
    Header,
    InfoHeader,
    OrderBtn,
    Total,
    Quantity,
    TextBtn,
} from './style';

function Cart(props) {
    const {title, image, formatedPrice} = props.route.params;
    console.log(image);
    return (
        <Container>
            <Header>
                <ProdImage source={{uri: image}} />
                <InfoHeader>
                    <Text> {title}</Text>
                    <Text> {formatedPrice}</Text>
                </InfoHeader>
                <Icon name="delete" size={20} />
            </Header>
            <Quantity></Quantity>
            <Total></Total>
            <OrderBtn>
                <TextBtn>Finalizar Pedido</TextBtn>
            </OrderBtn>
        </Container>
    );
}

export default Cart;
