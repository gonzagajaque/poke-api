import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import theme from './global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/app.routes';
import { Provider } from "./context/Provider";

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <StatusBar barStyle="light-content" />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}