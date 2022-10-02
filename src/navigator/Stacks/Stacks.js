import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Details from 'pages/Details'
import Nav from 'pages/Nav'
import MyChargers from 'pages/MyChargers'
import LoginScreen from '../../pages/Auth/LoginScreen'
import SignupScreen from '../../pages/Auth/SignupScreen'
import Charging from '../../pages/Charging'
import Loading from '../../pages/Loading'
import Receipt from '../../pages/Receipt'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import { Text } from 'react-native'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  // headerTintColor: 'white',
  // headerStyle: { backgroundColor: colors.darkPurple },
  // headerTitleStyle: { fontSize: 18 },
  headerShown: false,
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />

    <Stack.Screen
      name="Charging"
      component={Charging}
      options={({ navigation }) => ({
        title: 'Charging',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Loading"
      component={Loading}
      options={({ navigation }) => ({
        title: 'Loading',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Receipt"
      component={Receipt}
      options={({ navigation }) => ({
        title: 'Receipt',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const StatsNav = () => (
  <Stack.Navigator
    initialRouteName="Nav"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Nav"
      component={Nav}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

const L = () => <Text>Login</Text>

export const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Auth" screenOptions={navigationProps}>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        title: 'Auth',
        animationTypeForReplace: 'pop',
      }}
    />
    <Stack.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{
        title: 'Auth',
        animationTypeForReplace: 'push',
      }}
    />
  </Stack.Navigator>
)
