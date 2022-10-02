import { View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useEffect, useRef } from 'react'

const API_KEY = 'AIzaSyAGpu98_X7yyeg2DqxgnyJP-A3rgKB8zMk'

export default function GoogleAutoComplete({ setLocation, setIsFocused }) {
	const ref = useRef(null)

	useEffect(() => {
		console.log(ref.current?.isFocused())
		setIsFocused(ref.current?.isFocused())
	}, [])


	return (
		<GooglePlacesAutocomplete
			ref={ref}
			placeholder="Search"
			textInputProps={{
				onFocus: () => setIsFocused(true),
				onBlur: () => setIsFocused(false),
			}}
			query={{
				key: API_KEY,
				language: 'en',
			}}
			fetchDetails
			styles={{
				textInputContainer: {
					backgroundColor: 'rgba(0,0,0,0)',
					borderTopWidth: 0,
					borderBottomWidth: 0,
				},
				textInput: {
					marginLeft: 0,
					marginRight: 0,
					height: 45,
					color: '#5d5d5d',
					fontSize: 16,
					backgroundColor: '#EAEFEC',
					borderRadius: 10,
				},
				predefinedPlacesDescription: {
					color: '#1faadb',
				},
			}}
			onPress={(data, details = null) => {
				const coordinates = {
					latitude: details.geometry.location.lat,
					longitude: details.geometry.location.lng,
				}
				console.log(coordinates)
				setLocation(coordinates)
			}}
		/>
	)
}
