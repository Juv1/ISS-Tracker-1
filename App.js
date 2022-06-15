import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from ".screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";

const stack=createStackNavigator()

 function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initial routeName="Home" screenOptions={{
    headersShown: false
  }}>
<Stack.screen name="Home" component={HomeScreen}/>
<Stack.screen name="IssLocation" component={IssLocationScreen}/>
<Stack.screen name="Meteor" component={MeteorScreen}/>
<Stack.screen name="Update" component={UpdateScreen}/>




