import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AnyStyledComponent } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(75)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const Button = styled(TouchableOpacity)`
`;

export const IconBackHeader = styled(Feather as any as AnyStyledComponent)`
    position: absolute;
    right: 0;
    margin-right: 100px;
    margin-top: -10px;
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.white};
`;

export const ImageLogo = styled.Image`
    width: ${RFValue(122)}px;
    height: ${RFValue(45)}px;
`;