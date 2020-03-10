import React, {Component} from 'react';
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
            const response = await api.get('');

            // To avoid run the function formatPrice inside component rendering
            const data = response.data.products.map(prod => ({
                ...prod,
                formatedPrice: formatPrice(prod.price),
            }));

            this.setState({products: data});
        } catch (e) {
            console.log(e.message);
        }
        console.log(this.state);
    }

    handleAddProduct = user => {
        // const {addItemRequest} = this.props;
        // addItemRequest(id);
        console.log(user);
        const {navigation} = this.props;
        navigation.navigate('Cart', user);
    };

    render() {
        const {products} = this.state;
        const {amount} = this.props;
        return (
            <Container>
                <ProductsList
                    horizontal={true}
                    data={products}
                    keyExtractor={user => user.login}
                    renderItem={({item}) => (
                        <Product>
                            <ProdImage source={{uri: item.image}} />
                            <Text>{item.title}</Text>
                            <Text>{item.priceFormated}</Text>
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

export default Home;
