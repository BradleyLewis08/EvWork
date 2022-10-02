import { doc, collection, getDocs, addDoc, setDoc, arrayUnion, updateDoc, getDoc } from 'firebase/firestore'

import { db } from './db'

async function login(email, password) {
  const usersCol = collection(db, 'Users')
  const usersSnapshot = await getDocs(usersCol)
  for (const userDoc of usersSnapshot.docs) {
    if (userDoc.data().password === password.value && userDoc.data().email === email.value) {
      console.log("Logged into user with id %s", userDoc.id)
      return { id: userDoc.id, user_data: userDoc.data() }
    }
  }
  console.log("User not found")
  return null
}

async function signup(data) {
  const usersCol = collection(db, "Users")
  const new_doc = await addDoc(usersCol, {
    email: data.email,
    name: data.name,
    password: data.password,
    charging_points: [],
    charges: [],
  })
  console.log("Added user with ID: ", new_doc.id)
  const doc_snap = await getDoc(new_doc)
  return { id: new_doc.id, user_data: doc_snap.data() }
}


async function createNewChargingPoint(curr_user_doc) {
  const cpCol = collection(db, "ChargingPoints")
  const new_doc = await addDoc(cpCol, {
    unlocked: false,
    active: false,
    charge: null,
    owner_id: curr_user_doc.id,
  })
  const arr_copy = [...curr_user_doc.user_data.chargingPoints]
  arr_copy.push("hello")
  const user_ref = doc(db, "Users", curr_user_doc.id)
  await updateDoc(user_ref, { charging_points: arrayUnion(new_doc.id) })
  console.log("Added charging point with ID: ", new_doc.id)
  return new_doc.get().data()
}

async function createCharge(charge_data, curr_user_doc) {
  const chargeCol = collection(db, "Charges")
  const new_doc = await addDoc(chargeCol, {
    chargepoint_id: charge_data.chargepoint_id,
    time_started: charge_data.time_started,
    time_ended: charge_data.time_ended,
    active: true,
    charge: charge_data.charge,
  })
  const user_ref = doc(db, "Users", curr_user_doc.id)
  await updateDoc(user_ref, { charges: arrayUnion(new_doc.id) })
  const cp_ref = doc(db, "ChargingPoints", charge_data.chargepoint_id)
  await updateDoc(cp_ref, { charge: new_doc.id, active: true })
  console.log("Added charge with ID: ", new_doc.id)
  return new_doc.get().data()
}

async function finishCharge(charge_id) {
  const charge_ref = doc(db, "Charges", charge_id)
  await updateDoc(charge_ref, { active: false })
  const cp_ref = doc(db, "ChargingPoints", charge_ref.data().chargepoint_id)
  await updateDoc(cp_ref, { charge: null, active: false })
  console.log("Charge with id ", charge_id, "completed")
  return true
}

export { login, signup, createNewChargingPoint, createCharge, finishCharge }
