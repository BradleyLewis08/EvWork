import React, { useEffect, useRef, useState } from 'react'
import { Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker, GOOGLE } from 'react-native-maps'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MapViewDirections from 'react-native-maps-directions'
import { images } from 'theme'
import { HARVARD_CHARGERS } from '../data/chargers'
import ChargerMarker from './ChargerMarker'
import YouMarker from './YouMarker'
import { current } from '@reduxjs/toolkit'

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

const CURRENT_ORIGIN = {
	"latitude": 42.360091,
	"longitude": -71.09416
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height / 2.17,
	},
})

export default function Map({ found, setDuration, currentLocation, destination }) {
	const ref = useRef(null)
	const [distance, setDistance] = useState(0)
	const [chargers, setChargers] = useState([])

	const MoveCamera = async (position) => {
		ref.current.animateCamera({
			center: {
				latitude: position.latitude,
				longitude: position.longitude,
			},
			zoom: 15,
			tilt: 0,
			heading: 0,
			duration: 1000,
		})
	}

	const MoveCameraToRoute = async (position) => {
		ref?.current?.getCamera().then((camera) => {
			ref?.current?.fitToCoordinates([currentLocation, position], {
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

	useEffect(() => {
		setChargers(HARVARD_CHARGERS)
		MoveCamera(currentLocation)
	}, [currentLocation])

	const directionsReady = (result) => {
		if (result) {
			setDuration(result.duration)
			setDistance(result.distance)
		}
		MoveCameraToRoute(result.coordinates[result.coordinates.length - 1])
	}

	return (
		<MapView
			ref={ref}
			provider={PROVIDER_GOOGLE}
			style={styles.map}
			initialRegion={INITIAL_REGION}
		>
			<Marker
				coordinate={currentLocation}
				title="Destination"
				description="This is the destination"
			>
				<YouMarker />
			</Marker>
			{
				!found && chargers.map((charger, index) => {
					return (
						<Marker
							key={index}
							coordinate={charger.location}
						>
							<ChargerMarker chargers={charger.chargers} />
						</Marker>
					)
				})
			}
			{
				found && (
					<Marker
						coordinate={destination}
						title="Destination"
						description="This is the destination"
					/>
				)
			}
			{
				destination && (
					<MapViewDirections
						origin={currentLocation}
						destination={destination}
						apikey={API_KEY}
						strokeWidth={5}
						strokeColor="#48BB78"
						onReady={directionsReady}
					/>
				)
			}
		</MapView>
	)
}


