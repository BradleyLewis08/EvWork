import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Button from 'components/Button'
import { colors } from 'theme'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import Map from 'components/Map'
import GoogleAutoComplete from '../../components/GoogleAutocomplete'
import ChargerCard from '../../components/ChargerCard'
import CHARGING_LEVELS from '../../data/chargers'

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    height: Dimensions.get('window').height / 2.2,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    backgroundColor: 'white'
  },
  findingContainer: {
    flex: 1,
    position: 'absolute',
    height: Dimensions.get('window').height / 2.75,
    width: Dimensions.get('window').width,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  findingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

})

function FindingView() {
  return (
    <View style={styles.findingContainer}>
      <ActivityIndicator size="large" color="#48BB78" style={{
        marginBottom: 20,
      }} />
      <Text style={styles.findingText}>Finding you a charger...</Text>
    </View>
  )
}

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [coords, setCoords] = useState([])
  const [finding, setFinding] = useState(false)
  const logout = () => {
    console.log(curr_user)
    dispatch(authenticate({ loggedIn: false, checked: true }))
    dispatch(saveUser({ user: {} }))
    finishCharge(curr_user.user_data.charges[0])
  }
  return (
    <View style={styles.root}>
      <Map />
      <View
        style={styles.bottomContainer}
      >
        <Text
          style={styles.title}
        >
          Let's charge.
        </Text>
        <GoogleAutoComplete />
        {
          finding ? (
            <FindingView />
          ) :
            CHARGING_LEVELS.map((level, index) => (
              <ChargerCard
                key={index}
                level={level.level}
                amps={level.amps}
                chargingTime={level.chargingTime}
                numAvailable={level.numAvailable}
                price={level.price}
                setFinding={setFinding}
              />
            ))
        }
      </View>
      {/* <Button
        onPress={logout}
      >

        <Text>Logout</Text>
      </Button> */}
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
