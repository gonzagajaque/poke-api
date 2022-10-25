import React from "react";
import { PokemonItemProps } from "../../types/pokemon";
import * as S from './styles';
import { Type } from "../Type";
import { useNavigation } from "@react-navigation/native";

const PokemonCard: React.FC<PokemonItemProps> = ({ pokemon }) => {

  const navigation = useNavigation();

  const handlePress = () => {
    //@ts-ignore
    navigation.navigate('PokemonDetails', { pokemon });
  };

  return (
    <S.Container pokemon={pokemon} onPress={handlePress}>
      <S.WrapperCenterID>
        <S.PokemonID>#{String(pokemon.id).padStart(3, "0")}</S.PokemonID>
      </S.WrapperCenterID>
      <S.Shadow />
      <S.PokemonImage source={{ uri: pokemon.image }} />
      <S.PokemonName>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</S.PokemonName>
      <Type types={pokemon.types} />
    </S.Container>
  );
};

export default React.memo(PokemonCard);

