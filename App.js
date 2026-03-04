import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#D84315' }, // Darker orange as seen in images
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Hatırlatmalar' }} />
        <Stack.Screen name="Add" component={AddScreen} options={{ title: 'Hatırlatma Ekle' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detaylar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
