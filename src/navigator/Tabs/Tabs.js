import { React, useState, useEffect } from 'react'
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

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../Stacks'
import Nav from 'pages/Nav'
import { StatsNav } from '../Stacks/Stacks'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()

const Stack = createStackNavigator()

const navigationProps = {
  headerShown: false,
}

const MyChargerNavigator = () => {
  const { curr_user } = useSelector((state) => state.app)
  console.log(curr_user.user_data.cp_registered)
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={navigationProps}
    >
      {curr_user.user_data.cp_registered === "none" &&
        <>
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
        </>
      }
      {!(curr_user.user_data.cp_registered === "verified") && <Stack.Screen
        name="Review"
        component={ReviewPage}
        options={({ navigation }) => ({
          title: 'In Review',
        })}
      />}
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
    <Tab.Screen name="History" component={StatsNav} />
    <Tab.Screen name="My Charger" component={MyChargerNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
