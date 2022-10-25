import styled from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 2px;
`;

export const InputSearch = styled(TextInput)`
    height: ${RFValue(40)}px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    border: 1px ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    padding: 0 60px;
`;

export const IconSearch = styled(Feather as any)`
    position: absolute;
    left: 20px;
    top: 12px;
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonSearchGo = styled(TouchableOpacity)`
    position: absolute;
    right: 20px;
    top: 10px;
    width: ${RFValue(25)}px;
    height: ${RFValue(25)}px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const IconSearchGo = styled(MaterialCommunityIcons  as any)`
    position: absolute;
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
`;