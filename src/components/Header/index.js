import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Cart, Container, TitleLogo} from './style';

function Header() {
    return (
        <Container>
            <TitleLogo>DrumStore</TitleLogo>
            <Cart>
                <Icon name="shopping-cart" color={'#fff'} size={20} />
            </Cart>
        </Container>
    );
}

export default Header;
