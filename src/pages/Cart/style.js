import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
    height: 500px;
    align-items: center;
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    align-items: center;
`;
export const ProdImage = styled.Image`
    height: 90px;
    width: 90px;
`;
export const InfoHeader = styled.View`
    margin-left: 10px;
`;
export const Total = styled.View`
    margin-left: 10px;
`;
export const Quantity = styled.View`
    margin-left: 10px;
`;
export const OrderBtn = styled(RectButton)`
    background-color: orange;
    flex-direction: row;
    padding: 20px;
    width: 90%;
    color: #fff;
    justify-content: center;
`;
export const TextBtn = styled.Text`
    font-weight: bold;
    color: #fff;
`;
