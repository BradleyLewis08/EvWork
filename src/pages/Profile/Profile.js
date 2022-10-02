import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Avatar, Button } from 'react-native-paper'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'
import { authenticate, saveUser } from '../../slices/app.slice'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      'linear-gradient(180deg, #48BB78 21.68%, rgba(56, 161, 105, 0.92) 100%)',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 10,
    color: '#F8FAF9',
  },
})


const Profile = ({ navigation }) => {
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(authenticate({ loggedIn: false, checked: true }))
    dispatch(saveUser({ user: {} }))
  }
  return (
    <View style={styles.root}>
      <Avatar.Image size={110} source={require('./avatar.jpg')} />
      <Text style={styles.title}>Leslie Cooper</Text>
      {/* <View style={{ height: 1, width: 350, backgroundColor: '#dae3de' }} /> */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 350,
          height: 100,
        }}
      >
        <InfoBox stat="188" text="Full Charges" />
        <View
          style={{
            height: '100%',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <View style={{ height: 30, width: 1, backgroundColor: '#dae3de' }} />
        </View>
        <InfoBox stat="2.8 Tons" text="CO2 Reduction" />
      </View>
      <View
        style={{
          width: 350,
          backgroundColor: 'white',
          display: 'flex',
          paddingHorizontal: 25,
          paddingTop: 20,
          paddingBottom: 10,
          borderRadius: 10,
          shadowColor: 'rgba(0, 0, 0, .6)',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: '600',
            color: '#1C4532',
          }}
        >
          Account
        </Text>
        <AccountBox
          type="FontAwesome"
          icon="user"
          title="Personal Information"
          subtitle="Email, Phone, Address"
        />
        <AccountBox
          type="FontAwesome"
          icon="car"
          title="Vehicle"
          subtitle="Car Model, Software Version"
        />
        <AccountBox
          type="Material"
          icon="privacy-tip"
          title="Privacy"
          subtitle="Privacy policy"
        />
        <AccountBox
          type="Material"
          icon="account-balance-wallet"
          title="Billing"
          subtitle="Billing details"
        />
      </View>
      <View
        style={{
          width: 350,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Button
          children="Logout"
          color="#a3b8ab"
          icon={() => <MaterialIcons name="logout" color="#a3b8ab" />}
          style={{
            borderRadius: 10,
            backgroundColor: '#eaefec',
            marginTop: 15,
          }}
          onPress={() => logout()}
        />
      </View>
    </View>
  )
}

const InfoBox = ({ stat, text }) => {
  return (
    <View
      style={{
        width: 126,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          height: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '700', color: '#F8FAF9' }}>
          {stat}
        </Text>
      </View>
      <View
        style={{
          height: '50%',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Text style={{ textAlign: 'center', marginTop: 2, color: '#dae3de' }}>
          {text}
        </Text>
      </View>
    </View>
  )
}

const AccountBox = ({ type, icon, title, subtitle }) => {
  return (
    <>
      <View
        style={{ height: 1, marginBottom: 10, backgroundColor: '#dae3de' }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 10,
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {type == 'FontAwesome' ? (
            <FontIcon name={icon} size={18} color="#8DA697" />
          ) : (
            <MaterialIcons name={icon} size={18} color="#8DA697" />
          )}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: '#1C4532' }}>{title}</Text>
          <Text style={{ fontSize: 14, color: '#8DA697' }}>{subtitle}</Text>
        </View>
      </View>
    </>
  )
}

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
