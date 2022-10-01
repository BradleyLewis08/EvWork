import { collection, getDocs } from 'firebase/firestore/lite'

const db = require('./db')


async function login(username, password) {
  const usersCol = collection(db, 'Users')
  const usersSnapshot = await getDocs(usersCol)
  const usersList = usersSnapshot.docs.map((doc) => doc.data())
  usersList.forEach((user) => {
    if (user.password === password && user.username === username) {
      return user
    }
  })

  return null
}

async function signup(data) {
  const res = db.collection('Users').add(data)
  return res
}

module.exports = { login, signup }
