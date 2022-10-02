import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import { images } from '../../theme'
import { useNavigation } from '@react-navigation/native'
import { useStopwatch } from 'react-timer-hook'
import Button from '../../components/Button'
import { resetWarningCache } from 'prop-types'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'

const formatTimestring = (minutes, seconds) => {
	return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
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

	const progress = useDerivedValue(() => {
		return withTiming(isRunning ? 1 : 0)
	})

	const rStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[0, 1],
			['white', '#48BB78']
		)
		return {
			backgroundColor
		};
	});

	const marginStyle = useAnimatedStyle(() => {
		return {
			marginLeft: withTiming(isRunning ? 5 : 0)
		}
	})

	return (
		<Animated.View
			style={[styles.root, rStyle]}
		>
			<Text
				style={{
					fontSize: 24,
					marginBottom: 10,
					marginLeft: 20,
					marginTop: 80,
					color: isRunning ? 'white' : 'black',
					fontWeight: 'bold',
				}}

			>
				Your Charging Session
			</Text>
			<View style={{
				marginLeft: 20,
				flexDirection: 'row',
				alignItems: 'center',
			}}>
				<Text>
					<Ionicons name={isRunning ? "ios-battery-charging-sharp" : "ios-battery-half-sharp"} size={40} color={isRunning ? 'white' : 'black'} />
					{isRunning && <MaterialIcons name="bolt" size={30} color={isRunning ? 'white' : 'black'} />}
				</Text>
				<Animated.View
					style={[marginStyle]}
				>
					<Text
						style={{
							fontSize: 18,
							fontWeight: 'bold',
							marginLeft: isRunning ? 0 : 10,
							color: isRunning ? 'white' : 'black',
						}}
					>
						60%
					</Text>
				</Animated.View>
			</View>
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
							style={{
								fontSize: 24,
								fontWeight: 'bold',
								color: isRunning ? 'white' : 'black',
							}}
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
							style={{
								fontSize: 24,
								fontWeight: 'bold',
								color: isRunning ? 'white' : 'black',
							}}
						>
							{isRunning ? '0.5' : '0.0'} kWh
						</Text>
					</View>
					{
						isRunning ? (
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									width: '50%',
								}}
							>
								<Button
									onPress={() => {
										pause()
										// reset()
										// navigation.navigate("Loading")
									}}
									style={{
										backgroundColor: 'transparent',
										width: "60%",
									}}
								>
									<Text
										style={{
											fontWeight: 'bold',
										}}
									>
										Pause
									</Text>
								</Button>
								<Button
									onPress={() => {
										pause()
										reset()
										navigation.navigate("Loading")
									}}
									style={{
										backgroundColor: 'transparent',
										width: "60%",
									}}
								>
									<Text
										style={{
											fontWeight: 'bold',
										}}
									>
										Finish
									</Text>
								</Button>
							</View>
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
		</Animated.View >
	)
}