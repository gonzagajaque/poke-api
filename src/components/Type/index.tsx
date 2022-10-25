import React from "react";
import { PokemonType } from "../../types/pokemon";
import { Container, PokemonTypeName } from "./styles";

export function Type({ types }: { types: PokemonType[] }) {
    return (
        <Container>
            {types.map(({ name }) => (
                <PokemonTypeName key={name}>
                    {name.toUpperCase()}
                </PokemonTypeName>
            ))}
        </Container>
    );
}