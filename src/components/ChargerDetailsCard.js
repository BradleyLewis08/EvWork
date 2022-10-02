import { StyleSheet, Text, View } from 'react-native'
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

export default function ChargerDetailsCard({ level, chargerType }) {
	return (
		<View style={styles.container}
			onPress={() => setFinding()}
		>
			<Text
				style={styles.title}
			>
				{level}
			</Text>
			<Text
				style={styles.info}
			>
				{chargerType}
			</Text>
			<Hr />
		</View>
	)
}
