import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Cart, Container, TitleLogo, Number} from './style';

// function handlePress(props) {
//     console.log(props);
// }

function Header({cart}) {
    return (
        <Container>
            <TitleLogo>DrumStore</TitleLogo>
            <Cart>
                <Number>{String(cart.length)}</Number>
                <Icon
                    name="shopping-cart"
                    color={'#fff'}
                    size={25}
                    // onPress={() => handlePress(cart)}
                />
            </Cart>
        </Container>
    );
}

const mapStateToProps = function(state) {
    return {cart: state.cart};
};

export default connect(mapStateToProps)(Header);
