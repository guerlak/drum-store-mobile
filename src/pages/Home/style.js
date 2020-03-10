import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ProductsList = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})`
    margin-top: 20px;
`;
export const Container = styled.View``;
export const Product = styled.View`
    flex: 1;
    width: 300px;
    height: 300px;
    align-items: center;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 4px;
    margin: 5px;
`;
export const ProdImage = styled.Image`
    height: 200px;
    width: 200px;
`;

export const ProdButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: orange;
    border-radius: 4px;
    margin-left: 10px;
    padding: 12px;
    color: #fff;
`;
