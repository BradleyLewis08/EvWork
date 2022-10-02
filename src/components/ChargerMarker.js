import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 5,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20,
		backgroundColor: '#48BB78',
		borderWidth: 3,
		borderColor: '#fff'
	},
	text: {
		color: '#fff',
		fontSize: 14,
		fontWeight: 'bold'
	}
})

export default function ChargerMarker({ chargers }) {
	return (
		<View style={styles.container} >
			<Text style={styles.text}>{`${chargers} chargers`}</Text>
		</View>
	)
}