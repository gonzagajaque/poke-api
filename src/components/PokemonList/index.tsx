import React from "react";
import { List } from "./styles";
import { RefreshControl } from "react-native";
import { Pokemon } from "../../types/pokemon";
import PokemonCard from "../PokemonCard";
import theme from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type PokemonListProps = {
    pokemons: Pokemon[];
    refreshing?: boolean;
    onRefresh?: () => void;
}

export default function PokemonList({
    pokemons,
    refreshing,
    onRefresh,
}: PokemonListProps) {

    const navigation = useNavigation();

    return (
        <List
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    tintColor={theme.colors.primary}
                />
            }
            refreshing={refreshing}
            data={pokemons}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            //@ts-ignore
            renderItem={({ item }: { item: Pokemon }) =>
                <PokemonCard key={item.name} pokemon={item} navigation={navigation}
                />}
            onEndReachedThreshold={0.1}
            initialNumToRender={20}
        />
    );
}