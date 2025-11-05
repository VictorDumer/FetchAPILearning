import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersListScreen from './src/Views/CharactersListScreen';
import CharactersDatailScreen from './src/Views/CharacterDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagens">
        <Stack.Screen name="Personagens" component={CharactersListScreen} options={{ title: 'Informação geral dos personagens' }}/>
        <Stack.Screen name="Detalhes" component={CharactersDatailScreen} options={{ title: 'Informação detalhada dos dos personagens' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

