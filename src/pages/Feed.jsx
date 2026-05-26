import { useContext, useState } from "react"

import { Link } from "react-router-dom"

import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"

import { PostContext } from "../context/PostContext"
import { AuthContext } from "../context/AuthContext"

import { db } from "../firebase/firebase"

import { collection, addDoc } from "firebase/firestore"

function Feed() {

  const { posts } = useContext(PostContext)

  const { user } = useContext(AuthContext)

  const [quickPost, setQuickPost] = useState("")

  async function handleQuickPost() {

    if (!quickPost) return

    try {

      await addDoc(collection(db, "posts"), {

        category: "Community",

        type: "POST",

        title: quickPost,

        location: "IT Connect",

        user: user?.displayName || "Anonymous",

        avatar: user?.photoURL || "",

        time: "Just now",

        image: "",

        likes: 0,

        comments: []

      })

      setQuickPost("")

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="min-h-screen bg-zinc-950 text-white flex">

      <Sidebar />

      <main className="flex-1 w-full max-w-4xl mx-auto p-3 md:p-6">

        {/* Categories */}

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">

          <button className="px-5 py-2 rounded-2xl bg-blue-600 whitespace-nowrap">
            All
          </button>

          <button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Lost & Found
          </button>

          <button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Q&A
          </button>

          <button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Tutoring
          </button>

          <button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Projects
          </button>

        </div>

        {/* Composer */}

        <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 mb-8">

          <div className="flex gap-4">

            <img
              src={user?.photoURL}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full"
            />

            <div className="flex-1">

              <textarea
                placeholder="What's happening in IT today?"
                value={quickPost}
                onChange={(e) => setQuickPost(e.target.value)}
                className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800 outline-none resize-none h-32"
              />

              <div className="flex justify-end mt-4">

                <button
                  onClick={handleQuickPost}
                  className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
                >

                  Post

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Header */}

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-3xl md:text-5xl font-bold">
            Community Feed
          </h1>

        </div>

        {/* Posts */}

        <div className="space-y-8">

          {posts.map((post) => (

            <div
              key={post.id}
              className="rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >

              {
                post.image && (

                  <img
                    src={post.image}
                    className="w-full max-h-[250px] md:max-h-[500px] object-cover"
                  />

                )
              }

              <div className="p-6">

                {/* Top */}

                <div className="flex items-center justify-between mb-6">

                  <div className="flex flex-col sm:flex-row gap-4">

                    <img
                      src={post.avatar || "https://i.pravatar.cc/100"}
                      className="w-14 h-14 rounded-full"
                    />

                    <div>

                      <h3 className="font-bold text-lg">
                        {post.user}
                      </h3>

                      <p className="text-zinc-500 text-sm">
                        {post.time}
                      </p>

                    </div>

                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold

                    ${post.category === "Lost & Found"
                      ? "bg-red-500/20 text-red-400"

                      : post.category === "Q&A"
                      ? "bg-blue-500/20 text-blue-400"

                      : post.category === "Tutoring"
                      ? "bg-purple-500/20 text-purple-400"

                      : "bg-zinc-700 text-zinc-300"
                    }
                    `}
                  >

                    {post.category}

                  </span>

                </div>

                {/* Content */}

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {post.title}
                </h2>

                <p className="text-zinc-400 mb-6">
                  📍 {post.location}
                </p>

                {/* Actions */}

                <div className="flex items-center justify-between text-zinc-400 mb-6">

                  <div className="flex items-center gap-2">
                    ❤️
                    <span>{post.likes}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    💬
                    <span>{post.comments.length}</span>
                  </div>

                </div>

                <Link to={`/post/${post.id}`}>

                  <button className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition">

                    View Details

                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </main>

      <Rightbar />

    </div>

  )
}

export default Feed