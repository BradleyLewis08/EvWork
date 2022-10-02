import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { ActivityIndicator } from "react-native-paper";

const styles = StyleSheet.create({
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 1,
		marginTop: 20
	}
})

export default function Loading() {
	const navigation = useNavigation()
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Receipt')
		}, 2000)
	}, [])
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
			<ActivityIndicator size="large" color="#48BB78" />
			<Text
				style={styles.title}
			>
				Just a sec!
			</Text>
		</View>
	)
}