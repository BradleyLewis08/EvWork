import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAX5WdyOF6j5Z7BJnb1sUv72DTzwU4NsbQ',
  authDomain: 'evwork-d3d61.firebaseapp.com',
  projectId: 'evwork-d3d61',
  storageBucket: 'evwork-d3d61.appspot.com',
  messagingSenderId: '244094585908',
  appId: '1:244094585908:web:6563d0a8382df05127ce61',
  measurementId: 'G-CWSM2TCT7D',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
