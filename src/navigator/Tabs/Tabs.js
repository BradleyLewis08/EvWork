import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

import {
  MyChargers,
  Registration,
  ReviewPage,
} from '../../pages/MyChargers/MyChargers'
import History from '../../pages/History'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../Stacks'
import { StatsNav } from '../Stacks/Stacks'

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

const navigationProps = {
  headerShown: false,
}

const MyChargerNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="My Chargers"
        component={MyChargers}
        options={({ navigation }) => ({
          title: 'My Chargers',
        })}
      />
      <Stack.Screen
        name="Register"
        component={Registration}
        options={({ navigation }) => ({
          title: 'Register',
        })}
      />
      <Stack.Screen
        name="Review"
        component={ReviewPage}
        options={({ navigation }) => ({
          title: 'In Review',
        })}
      />
    </Stack.Navigator>
  )
}

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Search':
            return (
              <FontIcon
                name="search"
                color={focused ? '#48BB78' : colors.gray}
                size={20}
                solid
              />
            )
          case 'History':
            return (
              <FontIcon
                name="history"
                color={focused ? '#48BB78' : colors.gray}
                size={20}
                solid
              />
            )
          case 'My Charger':
            return (
              <FontIcon
                name="home"
                color={focused ? '#48BB78' : colors.gray}
                size={20}
                solid
              />
            )
          case 'Profile':
            return (
              <FontIcon
                name="user"
                color={focused ? '#48BB78' : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: '#48BB78',
      inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Search" component={HomeNavigator} />
    <Tab.Screen name="History" component={History} />
    <Tab.Screen name="My Charger" component={MyChargerNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
