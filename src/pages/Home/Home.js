import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Dimensions,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import Map from 'components/Map'
import { createCharge, createNewChargingPoint, finishCharge } from '../../functions'
import { saveUser } from '../../slices/app.slice'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  }
})


const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [coords, setCoords] = useState([])
  const logout = () => {
    console.log(curr_user)
    dispatch(authenticate({ loggedIn: false, checked: true }))
    dispatch(saveUser({ user: {} }))
    finishCharge(curr_user.user_data.charges[0])
  }
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Home</Text>
      <Map />
      <Button
        onPress={logout}
      >

        <Text>Logout</Text>
      </Button>
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
