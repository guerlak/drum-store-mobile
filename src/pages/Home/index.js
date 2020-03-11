import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import api from '../../services/api';
import {formatPrice} from '../../util/format';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Product, ProductsList, ProdImage, ProdButton} from './style';

class Home extends Component {
    state = {
        products: [],
    };

    async componentDidMount() {
        try {
            const response = await api.get('/5e67121dff85de370f672ccd');

            // To avoid run the function formatPrice inside component rendering
            const data = response.data.products.map(prod => ({
                ...prod,
                formatedPrice: formatPrice(prod.price),
            }));
            this.setState({products: data});
        } catch (e) {
            console.log('Error: ' + e.message);
        }
    }

    handleAddProduct = prod => {
        const {dispatch} = this.props;
        // navigation.navigate('Cart', prod);

        dispatch({
            type: 'ADD_PRODUCT',
            prod,
        });
    };

    render() {
        const {products} = this.state;
        const {amount} = this.props;
        // console.log(products);

        return (
            <Container>
                <ProductsList
                    horizontal={true}
                    data={products}
                    keyExtractor={prod => String(prod.id)}
                    renderItem={({item}) => (
                        <Product>
                            <ProdImage source={{uri: item.image}} />
                            <Text>{item.title}</Text>
                            <Text>{item.formatedPrice}</Text>
                            <ProdButton
                                onPress={() => this.handleAddProduct(item)}>
                                <Icon name="add" size={20} color="#fff" />
                                {/* {amount[item.id] || 0} */}
                                <Text style={{color: '#fff'}}>
                                    Adicionar ao carrinho
                                </Text>
                            </ProdButton>
                        </Product>
                    )}
                />
            </Container>
        );
    }
}

export default connect()(Home);
