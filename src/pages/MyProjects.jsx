import { useContext } from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import { PostContext } from "../context/posts"
import { AuthContext } from "../context/auth"

function MyProjects() {

  const { posts } = useContext(PostContext)
  const { user } = useContext(AuthContext)

  const myPosts = posts.filter(
    (post) => post.ownerId === user?.uid
  )

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto p-8">

        <h1 className="text-5xl font-bold mb-8">
          My Projects
        </h1>

        {myPosts.map((post) => (

          <div
            key={post.id}
            className="p-6 mb-4 rounded-3xl bg-zinc-900"
          >

            <h2 className="text-2xl font-bold">
              {post.projectName}
            </h2>

            <p
  className={
    post.status === "approved"
      ? "text-green-400"
      : post.status === "rejected"
      ? "text-red-400"
      : "text-yellow-400"
  }
>
  สถานะ: {post.status}
</p>
{post.status === "rejected" && (

  <div className="mt-3">

    <p className="text-red-400 font-bold">
      เหตุผลที่ไม่ผ่าน
    </p>

    <p className="text-zinc-400">
      {post.rejectReason}
    </p>

  </div>

)}
            <Link to={`/edit/${post.id}`}>
              <button className="mt-4 px-4 py-2 bg-yellow-600 rounded-xl">
                แก้ไข
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default MyProjects