import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'

import DrawerNavigator from './Drawer'
import { AuthNavigator } from './Stacks'

const Navigator = () => {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: false, checked: true }))
  }, [])

  const Router = loggedIn ? DrawerNavigator : AuthNavigator

  return checked ? (
    <NavigationContainer>
      {/* <Text>Loading...</Text> */}
      <Router />
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  )
}

export default Navigator
