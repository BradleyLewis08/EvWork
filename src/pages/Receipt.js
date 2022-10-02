import { View, StyleSheet, Text, SafeAreaView, Dimensions, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { images } from '../theme'
import { Button as PaperButton } from 'react-native-paper'

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#48BB78'
	},
	container: {
		flex: 1,
		position: 'absolute',
		top: Dimensions.get('window').height / 4,
		padding: 20,
		height: '100%',
		width: '100%',
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		marginTop: 20,
		fontWeight: 'bold',
		color: 'white'
	},
	bottomContainer: {
		position: 'absolute',
		bottom: 20,
		marginBottom: 20,
		width: '100%',
		paddingHorizontal: 20
	},
	statsContainer: {
		position: 'absolute',
		bottom: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 20,
		width: '100%',
	},
	subtitle: {
		fontSize: 25,
		marginBottom: 20,
		color: 'white',
		fontWeight: 'bold'
	},
	sectionInfoText: {
		fontSize: 16,
		color: 'white',
		marginBottom: 15
	},
	sectionInfoTextBold: {
		fontSize: 16,
		color: 'white',
		marginBottom: 15,
		fontWeight: 'bold'
	},
	button: {
		width: '100%',
		borderRadius: 10,
		backgroundColor: 'white'
	},
	text: {
		fontWeight: 'bold',
		fontSize: 15,
		lineHeight: 26,
		color: '#48BB78'
	},
})

const Button = ({ mode, style, ...props }) => {
	return (
		<PaperButton
			style={[
				styles.button,
				style
			]}
			labelStyle={styles.text}
			{...props}
		/>
	)
}

export default function Receipt() {
	const navigation = useNavigation()
	return (
		<SafeAreaView
			style={styles.root}
		>
			<Text
				style={styles.title}>
				Thanks for charging!
			</Text>
			<Image
				source={images.receipt}
				style={{ width: 400, height: 300 }}
			/>
			<View
				style={styles.bottomContainer}
			>
				<Text
					style={styles.subtitle}
				>
					Your Session
				</Text>
				<View
					style={styles.sectionInfo}
				>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text
							style={styles.sectionInfoText}
						>
							Total Charge Time:
						</Text>
						<Text
							style={styles.sectionInfoTextBold}
						>
							00:06
						</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text
							style={styles.sectionInfoText}
						>
							Mileage
						</Text>
						<Text
							style={styles.sectionInfoTextBold}
						>
							+ 0.1 mi
						</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text
							style={styles.sectionInfoText}
						>
							Charging Station:
						</Text>
						<Text
							style={styles.sectionInfoTextBold}
						>
							14 Bennett Street
						</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text
							style={styles.sectionInfoText}
						>
							Grand Total:
						</Text>
						<Text
							style={styles.sectionInfoTextBold}
						>
							$0.05
						</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text
							style={styles.sectionInfoText}
						>
							Payment Method
						</Text>
						<Text
							style={styles.sectionInfoTextBold}
						>
							Visa *3918
						</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text
							style={styles.sectionInfoText}
						>
							Carbon Dioxide Emissions Saved
						</Text>
						<Text
							style={styles.sectionInfoTextBold}
						>
							0.5 lbs
						</Text>
					</View>
				</View>
				<Button
					style={{
						marginTop: 30,
						backgroundColor: 'white',
						color: 'green'
					}}
					onPress={() => navigation.navigate('Home')}
				>
					Finish
				</Button>
			</View>
		</SafeAreaView >
	)
} 