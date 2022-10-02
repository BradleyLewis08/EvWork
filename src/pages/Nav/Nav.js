import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { Switch } from 'react-native-paper'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightGrayPurple,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        width: 370,
        borderColor: "#EAEFEC",
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
    },
    column_container: {
        flex: 1,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: "#EAEFEC",
        flexDirection: "column"
    },
    vertical_markers: {
        flex: 1,
        paddingTop: 20,
        textAlign: 'right',
        fontSize: 12,
        color: "#8DA697",
    },
    column: {
        borderRadius: 10,
        backgroundColor: "#48BB78"
    },
    horizontal_markers: {
        flex: 1,
        textAlign: "center",
        marginRight: 20,
        color: "#8DA697",
    }
})

function StatsBar() {
    return (
        <View style={[styles.container, { marginTop: 5, paddingTop: 10 }]} >
            <View style={{ height: 30, borderBottomColor: "#EAEFEC", borderBottomWidth: 1 }}>
                <Text style={{ color: "#8DA697", fontSize: 18 }}>Charging Statistics</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                height: 140,
            }} >
                <View style={{ flex: 1, flexDirection: "column" }} >
                    <Text style={styles.vertical_markers}>15</Text>
                    <Text style={styles.vertical_markers}>10</Text>
                    <Text style={styles.vertical_markers}>5</Text>
                    <Text style={styles.vertical_markers}>0</Text>
                </View>
                <View style={[styles.column_container]} >
                    <View style={{ flex: 10 }} />
                    <View style={[styles.column, { flex: 5 }]} />
                </View>
                <View style={[styles.column_container]} >
                    <View style={{ flex: 6 }} />
                    <View style={[styles.column, { flex: 9 }]} />
                </View>
                <View style={[styles.column_container]} >
                    <View style={{ flex: 9 }} />
                    <View style={[styles.column, { flex: 6 }]} />
                </View>
                <View style={[styles.column_container]} >
                    <View style={{ flex: 2 }} />
                    <View style={[styles.column, { flex: 13 }]} />
                </View>
                <View style={[styles.column_container]} >
                    <View style={{ flex: 0 }} />
                    <View style={[styles.column, { flex: 15 }]} />
                </View>
                <View style={[styles.column_container]} >
                    <View style={{ flex: 11 }} />
                    <View style={[styles.column, { flex: 4 }]} />
                </View>
            </View>
            <View style={{ height: 30, flexDirection: "row", marginTop: 5 }}>
                <View style={{ flex: 1 }}></View>
                <Text style={styles.horizontal_markers}>7/01</Text>
                <Text style={styles.horizontal_markers}>7/08</Text>
                <Text style={styles.horizontal_markers}>7/15</Text>
                <Text style={styles.horizontal_markers}>7/22</Text>
                <Text style={styles.horizontal_markers}>7/29</Text>
                <Text style={styles.horizontal_markers}>8/06</Text>
            </View>
        </View>
    )
}

const OtherBars = (bar_props) => {
    return (
        <View style={{ flex: 1, marginVertical: 5, marginHorizontal: 2, borderRadius: 15, padding: 10, borderColor: "#EAEFEC", borderWidth: 2, backgroundColor: "#FFFFFF" }}>
            <Text style={{ fontSize: 12, color: "#8DA697", fontWeight: "400" }}>{bar_props.props.title}</Text>
            <Text style={{ fontSize: 16, color: "#1C4532", marginTop: 10, fontWeight: "500" }}>{bar_props.props.value}</Text>
        </View>
    )
}

const ChargingHistory = () => {
    return (
        <View>
            <View style={{ height: 30, borderBottomColor: "#EAEFEC", borderBottomWidth: 1 }}>
                <Text style={{ color: "#8DA697", fontSize: 16 }}>Charging History</Text>
            </View>
            <View style={{ height: 40, borderBottomColor: "#EAEFEC", borderBottomWidth: 1, paddingTop: 7 }}>
                <Text style={{ color: "#1C4532", fontSize: 14 }}>Aug 9      Tesla Model S                                        <Text style={{ color: "#48BB78" }}>$4.75</Text></Text>
            </View>
            <View style={{ height: 40, borderBottomColor: "#EAEFEC", borderBottomWidth: 1, paddingTop: 7 }}>
                <Text style={{ color: "#1C4532", fontSize: 14 }}>Aug 8      Rivian Pickup                                        <Text style={{ color: "#48BB78" }}>$15.75</Text></Text>
            </View>
            <View style={{ height: 40, borderBottomColor: "#EAEFEC", borderBottomWidth: 1, paddingTop: 7 }}>
                <Text style={{ color: "#1C4532", fontSize: 14 }}>Aug 8      Tesla Model S                                      <Text style={{ color: "#48BB78" }}>$22.00</Text></Text>
            </View>
            <View style={{ height: 40, borderBottomColor: "#EAEFEC", borderBottomWidth: 1, paddingTop: 7 }}>
                <Text style={{ color: "#1C4532", fontSize: 14 }}>Aug 8      Tesla Model S                                      <Text style={{ color: "#48BB78" }}>$22.00</Text></Text>
            </View>
        </View>
    )
}

const ChargerTop = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false)
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
    return (
        <View style={{ flex: 1, flexDirection: "row", borderColor: isSwitchOn ? colors.lightGrayPurple : "#EAEFEC", backgroundColor: isSwitchOn ? "#48BB78" : "#FFFFFF", borderWidth: 2, paddingLeft: 10, paddingTop: 5, width: 370, borderRadius: 20 }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 8 }}>
                    <Text style={{ fontSize: 14, color: isSwitchOn ? "#F8FAF9" : "#1C4532", fontWeight: "500" }}>My Charger</Text>
                    <Text style={{ fontSize: 12, color: isSwitchOn ? "#F8FAF9" : "#1C4532", fontWeight: "300", opacity: isSwitchOn ? 80 : 100 }}>JuiceBox40</Text>
                    <View style={{ flexDirection: "row", marginTop: 3 }}>
                        <Text style={{ fontSize: 6, color: isSwitchOn ? "#FFFFFF" : "#B7C8BE", marginTop: 1 }}> ⬤  </Text>
                        <Text style={{ fontSize: 10, color: isSwitchOn ? "#EAEFEC" : "#B7C8BE", fontWeight: "400" }}>{isSwitchOn ? "Active" : "Inactive"}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ height: 25, width: 50, marginLeft: 90, marginTop: 15 }}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
            </View>
        </View>
    )
}

const Nav = ({ route, navigation }) => {
    const from = route?.params?.from
    return (
        <View style={[styles.root]}>
            <StatusBar barStyle="light-content" />
            {/* <Text style={styles.title}>{`Details (from ${from})`}</Text> */}
            <View style={{ flex: 1 }}>
                <Text style={{ color: "#1C4532", fontSize: 24, fontWeight: "800", textAlign: 'center', marginTop: 60, marginBottom: 10 }}>Dashboard</Text>
                <ChargerTop />
            </View>
            <StatsBar />
            <View style={{ flex: 1, flexDirection: "row", width: 370 }}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <OtherBars props={{ title: "Avg. Charge", value: "3.4 kwH" }} />
                    <OtherBars props={{ title: "Monthly Income", value: "$103.71" }} />
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <OtherBars props={{ title: "Avg. Weekly Charges", value: "9" }} />
                    <OtherBars props={{ title: "Total Income", value: "$621.28" }} />
                </View>
            </View>
            <View style={{ flex: 1, borderColor: "#EAEFEC", borderWidth: 2, padding: 10, width: 370, borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                <ChargingHistory />
            </View>
        </View>
    )
}

/* Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
} */

export default Nav