import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import NavigationService from './NavigationService';
import DrawerNavigator from './DrawerNavigator';

//import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createNativeStackNavigator();
//const AppStack = createSharedElementStackNavigator();

const MainNavigator = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log('isLoggedIn:', isLoggedIn);

  // ============================================================================================

  // ============================================================================================
  return (
    <NavigationContainer
      ref={ref => NavigationService.setTopLevelNavigator(ref)}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="MainRoute"
          component={isLoggedIn ? DrawerNavigator : AuthNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
