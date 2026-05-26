import { createContext, useEffect, useState } from "react"

import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth"

import { auth } from "../firebase/firebase"

export const AuthContext = createContext()

function AuthProvider({ children }) {

  const [user, setUser] = useState(null)

  const provider = new GoogleAuthProvider()

  async function login() {

    try {

      await signInWithPopup(auth, provider)

    } catch (error) {

      console.log(error)

    }

  }

  async function logout() {

    await signOut(auth)

  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser)

    })

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