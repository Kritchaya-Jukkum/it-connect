import { useContext } from "react"

import Rightbar from "../components/Rightbar"
import Sidebar from "../components/Sidebar"
import { AuthContext } from "../context/auth"
import { PostContext } from "../context/posts"

function Profile() {
  const { user } = useContext(AuthContext)
  const { posts } = useContext(PostContext)

  const userPosts = posts.filter((post) => post.user === user?.displayName)

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />

      <main className="flex-1 max-w-5xl mx-auto p-6">
        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/200"}
              alt=""
              className="w-36 h-36 rounded-full border-4 border-blue-500"
            />

            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-black mb-3">
                {user?.displayName || "นักศึกษา"}
              </h1>

              <p className="text-zinc-400 text-lg mb-6">{user?.email}</p>

              <p className="text-zinc-300 leading-relaxed max-w-2xl">
                พื้นที่สำหรับแสดงโครงการ ผลงานต้นแบบ งานทดลอง
                และเทคโนโลยีที่นักศึกษาใช้พัฒนาในรายวิชาหรือโปรเจกต์กลุ่ม
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <div className="px-4 py-2 rounded-2xl bg-blue-500/20 text-blue-400">
                  React
                </div>

                <div className="px-4 py-2 rounded-2xl bg-purple-500/20 text-purple-400">
                  Firebase
                </div>

                <div className="px-4 py-2 rounded-2xl bg-cyan-500/20 text-cyan-400">
                  UI/UX
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
            <h2 className="text-4xl font-bold text-blue-400">
              {userPosts.length}
            </h2>

            <p className="text-zinc-400 mt-2">โครงการ</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
            <h2 className="text-4xl font-bold text-purple-400">128</h2>

            <p className="text-zinc-400 mt-2">ยอดเข้าชม</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
            <h2 className="text-4xl font-bold text-green-400">24</h2>

            <p className="text-zinc-400 mt-2">ความคิดเห็น</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">โครงการของฉัน</h2>

          <div className="space-y-6">
            {userPosts.map((post) => {
              const projectName = post.projectName || post.title || "ยังไม่มีชื่อโครงการ"
              const technologies = post.technologies || post.technology || "ยังไม่ได้ระบุ"

              return (
                <div
                  key={post.id}
                  className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={post.avatar || user?.photoURL || "https://i.pravatar.cc/100"}
                      alt=""
                      className="w-14 h-14 rounded-full"
                    />

                    <div>
                      <h3 className="font-bold text-lg">
                        {post.user || "ไม่ระบุชื่อ"}
                      </h3>

                      <p className="text-zinc-500 text-sm">{post.time}</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{projectName}</h2>

                  <div className="space-y-2 text-zinc-400">
                    <p>หมวดหมู่: {post.category || "ไม่ระบุหมวดหมู่"}</p>
                    <p>สมาชิก: {post.members || "ยังไม่ได้ระบุ"}</p>
                    <p>อาจารย์ที่ปรึกษา: {post.advisor || "ยังไม่ได้ระบุ"}</p>
                    <p>เทคโนโลยีที่ใช้: {technologies}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Rightbar />
    </div>
  )
}

export default Profile
