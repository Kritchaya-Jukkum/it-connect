import { useEffect, useState } from "react"

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

import { auth, db } from "../firebase/firebase"

import {
  doc,
  getDoc,
  setDoc
} from "firebase/firestore"


import { AuthContext } from "./auth"

function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  const provider = new GoogleAuthProvider()

async function login() {

  try {

    const result = await signInWithPopup(
      auth,
      provider
    )

    const user = result.user

    const userRef = doc(
      db,
      "users",
      user.uid
    )

    const userSnap = await getDoc(userRef)

    if (!userSnap.exists()) {

      await setDoc(userRef, {

        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,

        role: "student"

      })

    }

  } catch (error) {

    console.log(error)

  }

}

  async function logout() {

    await signOut(auth)

  }

useEffect(() => {

  const unsubscribe = onAuthStateChanged(
    auth,
    async (currentUser) => {

      if (!currentUser) {

        setUser(null)
        return

      }

      const userRef = doc(
        db,
        "users",
        currentUser.uid
      )

      const userSnap = await getDoc(userRef)

      const userData = userSnap.data()

      setUser({

        ...currentUser,

        role: userData?.role || "student"

      })

    }
  )

  return () => unsubscribe()

}, [])

  return (

    <AuthContext.Provider value={{
      user,
      login,
      logout
    }}>

      {children}

    </AuthContext.Provider>

  )
}

export default AuthProvider
