import React from 'react';
import "react-native-gesture-handler";
import { KeyboardAvoidingView, Platform } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPreset } from '@react-navigation/stack';
import Login from "./screens/Login";
import Register from "./screens/Register";
import Splash from "./screens/Splash";
import Home from "./screens/Home";

const Stack = createStackNavigator();

export default function App() {
  const screensOptions = {
    headerShown: false, 
    ...TransitionPreset.SlideFromRightIOS,
  }

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        KeyboardVerticaçOffset={Platform.OS === "ios" ? -64 : 0}
        style={{ flex: 1 }}
      >
        <Stack.Navigator 
        initialRouteName='Splash' 
        screenOptions={screensOptions}>
        <Stack.Screen 
          name="Login" 
          component={ Login }
          options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={ Register }
          options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />
        <Stack.Screen 
          name="Splash" 
          component={ Splash }
          options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={ Home }
          options={{
            gestureEnabled: true,
            animationEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}