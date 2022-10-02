import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

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
})

const MyChargers = ({ route, navigation }) => {
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
            fontFamily: 'Lato',
            fontWeight: '800',
            color: 'white',
          }}
        >
          Add a charger.
        </Text>
      </View>
      {/* <Text style={styles.title}>{`Details (from ${from})`}</Text> */}
    </View>
  )
}

/* Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
} */

export default MyChargers
