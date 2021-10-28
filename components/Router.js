import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import { NavigationContainer } from '@react-navigation/native';
import Header from './Header';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Router = () => {
    const Tab = createBottomTabNavigator();

    const HomeIcon = () => <MaterialCommunityIcons size={20} name="home"/>
    const LoginIcon = () => <MaterialCommunityIcons size={20} name="login"/>
    const SignupIcon = () => <MaterialCommunityIcons size={20} name="account-plus"/>
    const ProfileIcon = () => <MaterialCommunityIcons size={20} name="account"/>
    
    return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen options={{header: Header,headerShown: true, tabBarIcon: HomeIcon}}  name="Home" component={Home} />
      <Tab.Screen name="Login" component={Login} options={{tabBarIcon: LoginIcon}} />
      <Tab.Screen options={{header: Header,headerShown: true, tabBarIcon: SignupIcon}} name="Profile" component={Profile} />
      <Tab.Screen name="Signup" component={Signup} options={{tabBarIcon: ProfileIcon}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;