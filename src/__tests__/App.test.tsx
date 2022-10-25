import React from 'react';
import { render } from '@testing-library/react-native';
import App from './../App';
import { NavigationContainer } from '@react-navigation/native';

describe('App', () => {
    it('should render correctly', () => {
        const { toJSON } = render(
            <NavigationContainer>
                <App />
            </NavigationContainer>
        );
        expect(toJSON()).toMatchSnapshot();
    });
});
