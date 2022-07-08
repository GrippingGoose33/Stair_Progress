import React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';

import ProgressBar from './ProgressBar';

import styles from './styles';

const Stack = createNativeStackNavigator();

const router = [
  {name: "First", component: First},
  {name: "Second", component: Second},
  {name: "Third", component: Third},
  {name: "Fourth", component: Fourth}, 
]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route, navigation}) => {
          const currentRouteIndex = router.map((r) => r.name)
        }}
      >
        {
          router.map((routerProps, index) => (
            <Stack.Screen 
            key= {routerProps.name}
            {...routerProps} 
            initialParams={{}}
            />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}