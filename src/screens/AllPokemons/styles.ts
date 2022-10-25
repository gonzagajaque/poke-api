import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Pokemon } from '../../types/pokemon';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.View`
    flex: 1;
    margin: 10px;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
`;

export const ErrorText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.attention};
    margin: 10px;
`;

export const PokemonsList = styled.FlatList<Pokemon>`
  flex: 1;
  margin-top: 20px;
`;