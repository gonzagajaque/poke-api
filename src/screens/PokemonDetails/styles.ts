import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const BodyDetails = styled.View`
    background-color: ${({ theme }) => theme.colors.backgroundDark};
    height: ${RFValue(400)}px;
    margin: 0px 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const ResumeText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.primary};
    margin: 20px 15px;
`;