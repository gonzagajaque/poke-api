import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllPokemons } from '../screens/AllPokemons';
import { PokemonDetails } from '../screens/PokemonDetails';

const Stack = createNativeStackNavigator();

const Routes = () => {

    const initialRouteName = 'AllPokemons';

    return (
        <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="AllPokemons" component={AllPokemons} />
            <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
        </Stack.Navigator>
    );
};

export default Routes;