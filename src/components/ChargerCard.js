import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Hr from './styling/Hr'
import { Chip } from 'react-native-paper'
import LightingIcon from './Vector.svg'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  info: {
    fontSize: 12,
    marginTop: 1,
    marginBottom: 1,
    fontWeight: '300',
  },
})

export default function ChargerCard({
  level,
  amps,
  chargingTime,
  numAvailable,
  price,
  setFinding,
  openModal,
}) {
  const [visible, setVisible] = React.useState(false)
  return (
    <TouchableOpacity style={styles.container} onPress={() => openModal()}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}
      >
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.title}>{level}</Text>
          <Text style={{ fontSize: 14, fontWeight: '300' }}>
            <LightingIcon height={11} width={11} /> {amps} Amps
          </Text>
        </View>
        <View>
          {level == 'Level 2' ? (
            <Chip
              children="4-10 Hours"
              textStyle={{ color: 'white', fontWeight: '500' }}
              style={{ backgroundColor: '#ED8936' }}
            />
          ) : (
            <Chip
              children="1 Hour"
              textStyle={{ color: 'white', fontWeight: '500' }}
              style={{ backgroundColor: '#4299E1' }}
            />
          )}
        </View>
      </View>
      <Hr style={{}} />
      <Text style={{ ...styles.info, marginTop: 5 }}>
        {numAvailable} Available Charger{numAvailable > 1 ? 's' : ''}
      </Text>
      <Text style={styles.info}>{`$${price.toFixed(2)}/kWh`}</Text>
    </TouchableOpacity>
  )
}
