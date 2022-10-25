import React from 'react';
import { TextInputProps, TouchableOpacityProps } from 'react-native';
import * as S from './styles';

export type Props = TextInputProps & TouchableOpacityProps & {
    value?: string;
    onBlur?: () => void;
    onChangeText?: (text: string) => void;
    onPress?: () => void;
};

export function Input({ value, onBlur, onChangeText, onPress, ...rest }: Props) {

    function handleOnChangeText(text = '') {
        onChangeText(text);
    }

    return (
        <S.Container>
            <S.InputSearch
                {...rest}
                autoCapitalize="none"
                returnKeyType="search"
                value={value}
                onChangeText={handleOnChangeText}
                selectTextOnFocus
                onBlur={onBlur}
            />
            <S.IconSearch name="search" />
            <S.ButtonSearchGo {...rest} onPress={onPress}>
                <S.IconSearchGo name="arrow-right-bold-circle" />
            </S.ButtonSearchGo>
        </S.Container>

    );
}
