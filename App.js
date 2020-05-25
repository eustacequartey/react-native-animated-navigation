import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import ModalScreen from "./screens/ModalScreen"

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration} >
          <Stack.Navigator headerMode="none" mode="modal" screenOptions={{...opacityTransition}}>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const opacityTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'timing'
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300
      }
    }
  },
  cardStyleInterpolator: ({current}) => ({
      cardStyle: {
        opacity: current.progress
      }
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
