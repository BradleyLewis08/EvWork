import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		borderRadius: 100,
		backgroundColor: '#4299E1',
		padding: 10,
		borderWidth: 5,
		borderColor: '#fff'
	}
})

export default function YouIcon() {
	return (
		<View style={styles.container} />
	)
}