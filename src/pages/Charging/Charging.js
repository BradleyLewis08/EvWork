import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import { images } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import { useStopwatch } from 'react-timer-hook'
import Button from '../../components/Button'
import { resetWarningCache } from 'prop-types'

const formatTimestring = (minutes, seconds) => {
	return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
	},
	container: {
		flex: 1,
		position: 'absolute',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		marginBottom: 20,
		marginTop: 20,
		fontWeight: 'bold',
	},
	bottomContainer: {
		position: 'absolute',
		bottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		width: '100%',
	},
	statsContainer: {
		position: 'absolute',
		bottom: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 20,
		width: '100%',
	}
})

export default function Charging() {
	const {
		seconds,
		minutes,
		start,
		isRunning,
		pause,
		reset
	} = useStopwatch({ autoStart: false })
	const navigation = useNavigation()
	return (
		<SafeAreaView
			style={styles.root}
		>
			<Text
				style={styles.title}
			>
				Your Charging Session
			</Text>
			<View
				style={styles.container}
			>
				<Image
					source={images.charging}
					style={{ width: 300, height: 300 }}
				/>
				<View
					style={styles.bottomContainer}
				>
					<View
						style={styles.statsContainer}
					>

						<Text
							style={styles.title}
						>
							{formatTimestring(minutes, seconds)}
						</Text>
						<View
							style={{
								height: "100%",
								width: 1,
								backgroundColor: "black",
								marginHorizontal: 40
							}}
						>

						</View>
						<Text
							style={styles.title}
						>
							32%
						</Text>
					</View>
					{
						isRunning ? (
							<Button
								onPress={() => {
									pause()
									reset()
									navigation.navigate("Loading")
								}}
								style={{
									backgroundColor: "blue",
									width: "80%",
								}}
							>
								Finish
							</Button>
						) : (
							<Button
								onPress={start}
								style={{
									width: "80%",
								}}
							>
								Start Charging
							</Button>
						)
					}
				</View>
			</View>
		</SafeAreaView>
	)
}