import { collection, getDocs } from 'firebase/firestore/lite'

const db = require('./db')

interface userData {
  username: string
  password: string
  email: string
}

async function login(username: string, password: string) {
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

async function signup(data: userData) {
  const res = db.collection('Users').add(data)
  return res
}

module.exports = { login, signup }
