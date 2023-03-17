import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './screen/Index.js';
import Jadwal_pesawat from './screen/Jadwal_pesawat.js';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
        <Stack.Screen name="Jadwal_pesawat" component={Jadwal_pesawat} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}