import { StyleSheet, Text, View, Image } from 'react-native'
import Hr from './styling/Hr'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // Shadow
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
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#8DA697',
  },
  cost: {
    marginTop: 12,
    fontSize: 14,
    color: '#8DA697',
    fontWeight: '300',
  },
  location: {
    fontSize: 14,
    color: '#8DA697',
    marginTop: 8,
  },
  info: {
    fontSize: 12,
    marginBottom: 1,
  },
})

export default function ChargerDetailsCard({ level, chargerType }) {
  return (
    <View style={styles.container} onPress={() => setFinding()}>
      <Image
        source={require('./JuiceBox.jpeg')}
        style={{ width: 103, height: 155 }}
      />
      <View
        style={{
          flexDirection: 'column',
          height: '100%',
          width: 220,
          marginLeft: 5,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.title}>{level}</Text>
            <Text style={styles.subtitle}>{chargerType}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Text style={styles.cost}>$0.31 kWh</Text>
          </View>
        </View>
        <Text style={styles.location}>Location</Text>
        <Hr />
        <Image
          source={require('./Location.png')}
          style={{ width: 220, height: 41 }}
        />
        <Text style={{ color: '#1C4532', marginTop: 8, fontSize: 14 }}>
          14 Bennett Street
        </Text>
        <Text style={{ color: '#8DA697', fontSize: 14, fontWeight: '300' }}>
          Cambridge, MA
        </Text>
      </View>
    </View>
  )
}
