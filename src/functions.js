import { collection, getDocs, addDoc } from 'firebase/firestore'

import { db } from './db'


async function login(email, password) {
  const usersCol = collection(db, 'Users')
  const usersSnapshot = await getDocs(usersCol)
  for (const userDoc of usersSnapshot.docs) {
    if (userDoc.data().password === password.value && userDoc.data().email === email.value) {
      console.log("Logged into user with id %s", userDoc.id)
      return userDoc.data()
    }
  }
  console.log("User not found")
  return null
}

async function signup(data) {
  const usersCol = collection(db, "Users")
  const res = await addDoc(usersCol, data)
  console.log("Added document with ID: ", res.id)
  return res
}

export { login, signup }
