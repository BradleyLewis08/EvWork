import { collection, getDoc } from 'firebase/firestore'
import { db } from './db'

async function findUser(user_id) {
    const usersCol = collection(db, "Users")
    const usersSnapshot = await getDoc(usersCol)
    for (const userDoc of usersSnapshot.doc) {
        if (userDoc.id == user_id) {
            return userDoc
        }
    }
}

export { findUser }

// const { curr_user } = useSelector((state) => state.app)
//   const [users, setUsers] = useState()

// useEffect(() => {
//     setUsers(curr_user)
//     console.log(curr_user)
//     if (curr_user) {
//       createNewChargingPoint(curr_user)
//     }
//   }, [curr_user])

// createCharge({ chargepoint_id: "test", time_started: new Date.getTime(), time_ended: new Date.getTime + 10 * 60000, charge: 100 }, curr_user)

// export const StatsNav = () => (
//     <Stack.Navigator
//       initialRouteName="Nav"
//       headerMode="screen"
//       screenOptions={navigationProps}
//     >
//       <Stack.Screen
//         name="Nav"
//         component={Nav}
//         options={({ navigation }) => ({
//           title: 'Home',
//           headerLeft: () => <HeaderLeft navigation={navigation} />,
//           headerTitle: () => <HeaderTitle />,
//         })}
//       />
//     </Stack.Navigator>
//   )