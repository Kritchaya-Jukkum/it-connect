import { useState } from "react"
import { useEffect } from "react"

import { db } from "../firebase/firebase"

import {
  collection,
  onSnapshot
} from "firebase/firestore"
import { PostContext } from "./posts"

function PostProvider({ children }) {

const [posts, setPosts] = useState([])
useEffect(() => {

  const unsubscribe = onSnapshot(

    collection(db, "posts"),

    (snapshot) => {

      const postData = snapshot.docs.map((doc) => ({

        id: doc.id,

        ...doc.data()

      }))

      setPosts(postData)

    }

  )

  return () => unsubscribe()

}, [])

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}

export default PostProvider
