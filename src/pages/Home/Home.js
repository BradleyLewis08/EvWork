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
import ChargerDetailsCard from '../../components/ChargerDetailsCard'
import CHARGING_LEVELS from '../../data/chargers'
import Hr from '../../components/styling/Hr'
import { CurrentRenderContext } from '@react-navigation/native'

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
    backgroundColor: 'white',
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
  foundContainer: {
    flex: 1,
    height: Dimensions.get('window').height / 2.75,
    width: Dimensions.get('window').width * 0.9,
    bottom: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  findingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  horizonalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
})

const CURRENT_ORIGIN = {
  "latitude": 42.360091,
  "longitude": -71.09416
}

function formatDuration(duration) {
  const hours = Math.floor(duration / 60)
  const minutes = Math.round(duration % 60)
  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ${minutes} minute${minutes > 1 ? 's' : ''}`
  } else {
    return `${minutes} minute${minutes > 1 ? 's' : ''}`
  }
}


function FoundView({ duration }) {
  duration = formatDuration(duration)
  return (
    <>
      <Text style={styles.title}>Navigate</Text>
      <Text>
        Time
      </Text>
      <Hr
        margins={10}
      />
      <View
        style={styles.horizonalContainer}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          2:30pm
        </Text>
        <Text>
          You are <Text style={{ fontWeight: 'bold' }}>{duration}</Text> away
        </Text>
      </View>
      <View style={styles.foundContainer}>
        <ChargerDetailsCard
          level="Level 2"
          chargerType="JuiceBox40"
        />
      </View>
    </>
  )
}

const DESTINATION = {
  "latitude": 42.360091,
  "longitude": -71.09416,
}

const Home = ({ navigation }) => {
  function DrivingView() {
    return (
      <>
        <Text style={styles.title}>You're on your way!</Text>
      </>
    )
  }
  const [destination, setDestination] = useState(null);
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
  const dispatch = useDispatch()
  const [location, setLocation] = useState(CURRENT_ORIGIN)
  const [finding, setFinding] = useState(false)
  const [found, setFound] = useState(false)
  const [duration, setDuration] = useState(0)
  const [driving, setDriving] = useState(false)
  const logout = () => {
    console.log(curr_user)
    dispatch(authenticate({ loggedIn: false, checked: true }))
    dispatch(saveUser({ user: {} }))
    finishCharge(curr_user.user_data.charges[0])
  }
  return (
    <View style={styles.root}>
      <Map
        currentLocation={location}
        found={found}
        setDuration={setDuration}
      />
      <View
        style={styles.bottomContainer}
      >
        {!found ? (
          <>
            <Text
              style={styles.title}
            >
              Let's charge.
            </Text>
            <GoogleAutoComplete
              setLocation={setLocation}
            />
            {finding ? (
              <FindingView />
            )
              :
              CHARGING_LEVELS.map((level, index) => (
                <ChargerCard
                  key={index}
                  level={level.level}
                  amps={level.amps}
                  chargingTime={level.chargingTime}
                  numAvailable={level.numAvailable}
                  price={level.price}
                  setFinding={() => {
                    setFinding(true)
                    setTimeout(() => {
                      setFinding(false)
                      setFound(true)
                      setDestination(DESTINATION)
                    }, 4000)
                  }}
                />
              ))
            }
          </>
        ) : driving ? (
          <>
            <DrivingView />
            <Button>
              I've Arrived
            </Button>
          </>
        ) :
          (
            <>
              <FoundView
                duration={duration}
              />
              <Button
                onPress={() => {
                  console.log('clicked')
                  setDriving(true)
                }}
              >
                Navigate
              </Button>
            </>
          )
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
