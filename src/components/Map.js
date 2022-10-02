import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, GOOGLE } from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MapViewDirections from 'react-native-maps-directions'
import { images } from 'theme'
import { LOCATIONS } from '../data/locations'

const API_KEY = 'AIzaSyAGpu98_X7yyeg2DqxgnyJP-A3rgKB8zMk'
const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.02
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const INITIAL_REGION = {
	"latitude": 42.360091,
	"longitude": -71.09416,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
}

const ORIGIN = {
	"latitude": 42.360091,
	"longitude": -71.09416
}

const FINAL_REGION = {
	latitude: 37.78824,
	latitude: -122.4323,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height / 2,
	},
})


// function handleNavigate() {
// 		onPress={(_, details) => {
// 			const position = {
// 				latitude: details.geometry.location.lat,
// 				longitude: details.geometry.location.lng,
// 			}
// 			setDestination(position)
// 			MoveCamera(position)
// 			setReadyToFind(true)
// 		}}
// }


export default function Map({ setReadyToFind }) {
	const ref = useRef(null)
	const [destination, setDestination] = useState(null)
	const [duration, setDuration] = useState(0)
	const [distance, setDistance] = useState(0)

	const directionsReady = (result) => {
		if (result) {
			setDuration(result.duration)
			setDistance(result.distance)
		}
	}

	useFocusEffect(
		React.useCallback(() => {
			ref?.current?.fitToCoordinates(LOCATIONS, {
				edgePadding: {
					top: 50,
					right: 50,
					bottom: 50,
					left: 50,
				},
			})
		}, [])
	)

	const MoveCamera = async (position) => {
		ref?.current?.getCamera().then((camera) => {
			ref?.current?.fitToCoordinates([position], {
				edgePadding: {
					top: 50,
					right: 50,
					bottom: 50,
					left: 50,
				},
			})
		}).catch((error) => {
			console.log(error)
		})
	}
	return (
		<MapView
			ref={ref}
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			initialRegion={INITIAL_REGION}
		>
			{
				destination && (
					<Marker
						coordinate={destination}
						title="Destination"
						description="This is the destination"
					/>
				)
			}
			<MapViewDirections
				origin={ORIGIN}
				destination={destination}
				apikey={API_KEY}
				strokeWidth={5}
				strokeColor="hotpink"
				onReady={directionsReady}
			/>
		</MapView>
	)
}


