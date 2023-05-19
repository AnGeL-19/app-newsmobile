
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import News from './src/screens/News';
import Splash from './src/screens/Splash';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#232323',
        },
        headerTintColor: '#F23479',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" options={{ title: 'Top News' }} component={Home} />
        <Stack.Screen name="News" options={{ title: 'Notice' }} component={News} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}
export default App;
