import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as S from './styles';

export type Props = TouchableOpacityProps & {
    hasBackButton?: true;
};

export function Header({ hasBackButton, ...rest }: Props) {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <S.Container>
            <S.Button onPress={goBack} {...rest}>
                {!hasBackButton && <S.IconBackHeader name='arrow-left' />}
            </S.Button>
            <S.ImageLogo source={require('../../assets/images/logo.png')} />
        </S.Container>
    )
}
    