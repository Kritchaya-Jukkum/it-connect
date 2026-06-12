import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"

import { PostContext } from "../context/PostContext"

import { useState, useContext } from "react"

import {
  doc,
  updateDoc,
  arrayUnion
} from "firebase/firestore"

import { db } from "../firebase/firebase"

import { AuthContext } from "../context/AuthContext"
function PostDetail() {

  const { id } = useParams()

  const { posts } = useContext(PostContext)
  const { user } = useContext(AuthContext)

  const post = posts.find((p) => p.id == id)
  const [comment, setComment] = useState("")
  async function handleComment() {

  if (!comment) return

  try {

    const postRef = doc(db, "posts", post.id)

    await updateDoc(postRef, {

      comments: arrayUnion({

        user: user?.displayName || "Anonymous",

        avatar: user?.photoURL || "",

        text: comment

      })

    })

    setComment("")

  } catch (error) {

    console.log(error)

  }

}
  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Post not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto p-10">

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <img
              src={post.image}
              className="w-full h-[500px] object-cover rounded-3xl"
            />
{/* Comments */}

<div className="mt-20">

  <h2 className="text-4xl font-bold mb-8">
    Comments
  </h2>

  <div className="space-y-4">

{(post.comments || []).map((c, index) => (

  <div
    key={index}
    className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800"
  >

    <div className="flex items-start gap-4">

      <img
        src={c.avatar || "https://i.pravatar.cc/100"}
        className="w-12 h-12 rounded-full"
      />

      <div>

        <p className="font-bold mb-2">
          {c.user}
        </p>

        <p className="text-zinc-400">
          {c.text}
        </p>

      </div>

    </div>

  </div>

))}

  </div>

  {/* Add Comment */}

  <div className="mt-8 flex gap-4">

    <input
      type="text"
      placeholder="Write a comment..."
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      className="flex-1 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none"
    />

    <button
  onClick={handleComment}
  className="px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
>

      Send

    </button>

  </div>

</div>
          </div>

          <div>

            <div
              className={`inline-block px-4 py-2 rounded-full mb-6
              ${post.type === "LOST"
                  ? "bg-red-500/20 text-red-400"
                  : "bg-green-500/20 text-green-400"
                }`}
            >
             <h1 className="text-6xl font-bold mb-6">
  {post.title}
</h1>

<div className="space-y-4 text-zinc-400 text-lg">

  <p>
    👥 Members: {post.members}
  </p>

  <p>
    👨‍🏫 Advisor: {post.advisor}
  </p>

  <p>
    🛠 Technology: {post.technology}
  </p>

  <p>
    👤 Created by: {post.user}
  </p>

  <p>
    ⏰ {post.time}
  </p>

</div>

<div className="mt-10">

  <h2 className="text-3xl font-bold mb-4">
    Project Description
  </h2>

  <p className="text-zinc-400 leading-relaxed">
    {post.description}
  </p>

</div>

            <div className="mt-10">

              <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-lg">
                Contact Owner
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PostDetail