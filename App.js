import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharactersListScreen from './src/Views/CharactersListScreen';
import CharactersDatailScreen from './src/Views/CharacterDetailScreen';
import HomeScreen from './src/Views/HomeScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Personagens" component={CharactersListScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Detalhes" component={CharactersDatailScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

