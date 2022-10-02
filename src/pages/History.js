import { useState, useEffect } from 'react'
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#48BB78',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 1,
		color: 'white'
	}
})

function HistoryCard() {
	return (
		<>
			<View
				style={{
					marginLeft: 10
				}}
			>
				<Text style={styles.title}>August 21, 2022</Text>


			</View>
			<View
				style={{
					marginTop: 15
				}}
			>

			</View>
			<View
				style={{
					marginTop: 15,
					flexDirection: 'row',
					alignItems: 'center'
				}}
			>
				<MaterialIcons name="bolt" size={40} color='white' />
				<View
					style={{
						marginLeft: 10
					}}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: 'bold',
							color: 'white'
						}}
					>
						
					</Text>
				</View>
			</View>
		</>
	)
}

export default function History() {
	const [animateNumber, setAnimateTo] = useState(0)
	useEffect(() => {
		setAnimateTo(2800)
	}, [])

	return (
		<SafeAreaView style={styles.root}>
			<Text
				style={{
					fontSize: 28,
					alignSelf: 'center',
					marginTop: 20,
					color: 'white',
					fontWeight: 'bold',
				}}
			>
				Charge History
			</Text>
			<View
				style={{
					padding: 20,
					marginTop: 20,
				}}
			>
				<HistoryCard />
			</View>
		</SafeAreaView>
	)
}