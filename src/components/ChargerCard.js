import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Hr from './styling/Hr'

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 1
	},
	info: {
		fontSize: 12,
		marginBottom: 1
	},
})


export default function ChargerCard({ level, amps, chargingTime, numAvailable, price, setFinding }) {
	return (
		<TouchableOpacity style={styles.container}
			onPress={() => setFinding(true)}
		>
			<Text
				style={styles.title}
			>
				{level}
			</Text>
			<Text
				style={styles.info}
			>
				{amps} Amps
			</Text>
			<Hr />
			<Text
				style={styles.info}
			>
				{numAvailable} Available Charger{numAvailable > 1 ? 's' : ''}
			</Text>
			<Text
				style={styles.info}
			>
				{`$${price.toFixed(2)}/kWh`}
			</Text>
		</TouchableOpacity>
	)
}
