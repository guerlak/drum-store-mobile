import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View``;

export const ProductsList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
    max-height: 90%;
`;

export const ProdImage = styled.Image`
    height: 90px;
    width: 90px;
`;
export const Info = styled.View`
    margin-left: 30px;
    justify-content: center;
`;

export const Product = styled.View`
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
`;
export const ProductInfo = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
`;

export const TextBtn = styled.Text`
    font-weight: bold;
    color: #fff;
`;

export const Price = styled.Text`
    font-weight: bold;
    color: #999;
    font-size: 15px;
`;
export const TotalItem = styled.Text`
    font-weight: bold;
    color: orange;
    font-size: 15px;
    margin-left: 50px;
`;

export const AmountInfo = styled.View`
    background-color: #eee;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    justify-content: space-evenly;
`;

export const InputArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100px;
`;

export const Input = styled.TextInput`
    border: #999 solid 1px;
    width: 35px;
    text-align: center;
`;
export const Footer = styled.View`
    text-align: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #000;
    margin-top: auto;
    height: 70px;
`;
export const Delete = styled.View`
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 20px;
`;

export const Total = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: orange;
`;

export const OrderBtn = styled(RectButton)`
    background-color: orange;
    flex-direction: row;
    padding: 20px;
    color: #fff;
    justify-content: center;
`;
export const CartEmpty = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
`;
export const CartEmptyText = styled.Text`
    color: #999;
    font-size: 30px;
`;
