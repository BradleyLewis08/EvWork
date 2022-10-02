import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'

import DrawerNavigator from './Drawer'
import { AuthNavigator } from './Stacks'

const Navigator = () => {
  const { loggedIn, curr_user } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const Router = (loggedIn && curr_user) ? DrawerNavigator : AuthNavigator

  return (
    <NavigationContainer>
      {/* <Text>Loading...</Text> */}
      <Router />
    </NavigationContainer>
  )
}

export default Navigator
