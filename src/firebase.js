
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({
        apiKey: "AIzaSyCdklOqU0EcjNEWy8Cvv1KVIKyYAL-SsU0",
        authDomain: "admina-8e76b.firebaseapp.com",
        databaseURL: "https://admina-8e76b.firebaseio.com",
        projectId: "admina-8e76b",
        storageBucket: "admina-8e76b.appspot.com",
        messagingSenderId: "526293543996",
        appId: "1:526293543996:web:49fa7d8135faa957212739"
    })
    .database()

