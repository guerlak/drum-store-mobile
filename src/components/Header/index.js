import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Cart, Container, TitleLogo, Number} from './style';

function Header({cart}) {
    return (
        <Container>
            <TitleLogo>DrumStore</TitleLogo>
            <Cart>
                <Number color={'#fff'}>{String(cart.length)}</Number>
                <Icon name="shopping-cart" color={'#fff'} size={20} />
            </Cart>
        </Container>
    );
}

const mapStateToProps = function(state) {
    return {cart: state.cart};
};

export default connect(mapStateToProps)(Header);
