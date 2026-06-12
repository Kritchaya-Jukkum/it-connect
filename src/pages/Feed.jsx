import { useContext } from "react"

import { Link } from "react-router-dom"

import Sidebar from "../components/Sidebar"
import Rightbar from "../components/Rightbar"

import { PostContext } from "../context/PostContext"

function Feed() {

  const { posts } = useContext(PostContext)

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
            Web Application
          </button>

          <button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Mobile Application
          </button>

          <button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Artificial Intelligence
          </button>

          <button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Internet of Things (IoT)
          </button>
<button className="px-5 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 whitespace-nowrap">
            Game Development
          </button>
        </div>

 
        {/* Header */}

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-3xl md:text-5xl font-bold">
            Project Showcase
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

                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-500/20 text-blue-400">
  {post.category}
</span>

                </div>

                {/* Content */}

               <h2 className="text-2xl md:text-3xl font-bold mb-4">
  {post.title}
</h2>

<p className="text-zinc-400 mb-2">
  👥 {post.members}
</p>

<p className="text-zinc-400 mb-2">
  👨‍🏫 {post.advisor}
</p>

<p className="text-zinc-400 mb-4">
  🛠 {post.technology}
</p>

<p className="text-zinc-400 mb-6">
  {post.description}
</p>

                {/* Actions */}

                <div className="flex items-center justify-between text-zinc-400 mb-6">

                  <div className="flex items-center gap-2">
                    ❤️
                    <span>{post.likes || 0}</span>
                  </div>

                  <div className="flex items-center gap-2">
  💬
  {post.comments?.length || 0}
</div>

                </div>

                <Link to={`/post/${post.id}`}>

                  <button className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition">

                    Project Details

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