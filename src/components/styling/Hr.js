import { View, StyleSheet } from 'react-native'


export default function Hr({ margins = 5 }) {
	return (
		<View
			style={{
				marginTop: margins,
				marginBottom: margins,
				borderBottomColor: 'lightgrey',
				borderBottomWidth: StyleSheet.hairlineWidth,
			}}
		/>
	)
}