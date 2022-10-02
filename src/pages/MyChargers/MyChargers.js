import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
} from 'react-native'
import { RadioButton } from 'react-native-paper'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[styles.button, style]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

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
    fontSize: 24,
    marginBottom: 20,
  },
  body: {
    color: 'white',
    textAlign: 'justify',
  },
  input: {
    height: 35,
    backgroundColor: 'rgba(248, 250, 249, 0.2)',
    borderRadius: 10,
    paddingLeft: 20,
    color: 'white',
    marginBottom: 10,
  },
  formTitle: {
    color: '#F8FAF9',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '600',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#48BB78',
  },
  text: {
    color: '#48BB78'
  }
})

export const MyChargers = ({ route, navigation }) => {
  const from = route?.params?.from
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('./frontpic.png')}
        style={{ width: 351, height: 231 }}
      />
      <View style={{ width: '80%' }}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 36,
            fontWeight: '800',
            color: 'white',
          }}
        >
          Add a charger
        </Text>
        <Text style={styles.body}>
          Add your electric vehicle charger to our network. Instead of leaving
          your charger unused at home, you can help accelerate adoption of
          electric vehicles and make money at the same time. {'\n'}
        </Text>
        <Text style={styles.body}>It’s that easy.</Text>
        <Button
          children="Get Started"
          style={{
            marginTop: 20,
            width: '60%',
            backgroundColor: 'white',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
          }}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  )
}

export const Registration = ({ route, navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={{ width: '80%' }}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 36,
            fontWeight: '800',
            color: 'white',
          }}
        >
          Connect your device.
        </Text>
        <View
          style={{
            height: 3,
            borderRadius: 3,
            backgroundColor: 'white',
            width: 36,
            marginTop: 15,
            marginBottom: 15,
          }}
        />
        <Text style={styles.formTitle}>Device Model</Text>
        <TextInput
          placeholder="Device Model (ex. JuiceBox 40)"
          style={styles.input}
        />
        <Text style={styles.formTitle}>Charger Level</Text>
        <TextInput placeholder="Level 2 or Level 3" style={styles.input} />
        <Text style={styles.formTitle}>Address</Text>
        <TextInput placeholder="Street, City, State Zip" style={styles.input} />
        <Button
          children="Link Device"
          style={{
            marginTop: 10,
            width: '50%',
            backgroundColor: '#BEE3F8',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
          }}
        />
        <Button
          color="#2F855A"
          children="Get Started"
          style={{
            marginTop: 20,
            width: '60%',
            backgroundColor: 'white',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
          }}
          onPress={() => navigation.navigate('Review')}
        />
      </View>
    </View>
  )
}

export const ReviewPage = ({ route, navigation }) => {
  const { navigate } = useNavigation()

  const from = route?.params?.from
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('./Review.png')}
        style={{ width: 311, height: 201 }}
      />
      <View style={{ width: '80%', marginTop: 15 }}>
        <Text
          style={{
            textAlign: 'left',
            fontSize: 36,
            fontWeight: '800',
            color: 'white',
          }}
        >
          Sit tight
        </Text>
        <Text style={styles.body}>
          We’re reviewing your request to add your charger, and will get back to
          you as soon as possible !
        </Text>
        <Button
          color="#2F855A"
          children="Return Home"
          style={{
            marginTop: 20,
            width: '60%',
            backgroundColor: 'white',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
          }}
          onPress={() => navigate('Search')}
        />
      </View>
    </View>
  )
}
