import { useState, useEffect } from 'react'
import { View, SafeAreaView, StyleSheet, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ScrollView } from 'react-native-gesture-handler'
import { CHARGES } from '../data/charges'
import AnimateNumber from 'react-native-animate-number'

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: '#48BB78',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 1,
		color: 'white'
	}
})

function HistoryCard({ location, date, charge, cost }) {
	return (
		<>
			<View
				style={{
					marginTop: 30,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<View
					style={{
						flexDirection: 'row'
					}}
				>
					<MaterialIcons name="bolt" size={45} color='white' />
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
							{location}
						</Text>
						<Text
							style={{
								fontSize: 16,
								color: 'white'
							}}
						>
							{date}
						</Text>
					</View>
				</View>
				<View
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: 'bold',
							color: 'white'
						}}
					>
						{cost}
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: 'white',
							alignSelf: 'flex-end'

						}}
					>
						{`${charge}%`}
					</Text>
				</View>
			</View>
		</>
	)
}

export default function History() {

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
			<ScrollView
				style={{
					padding: 20,
					marginTop: 20,
				}}
			>
				{
					CHARGES.map((charge, index) => (
						<>
							<HistoryCard
								key={charge.id}
								location={charge.location}
								charge={charge.charge}
								cost={charge.cost}
								date={charge.date}
							/>
						</>
					))
				}
			</ScrollView>
		</SafeAreaView>
	)
}