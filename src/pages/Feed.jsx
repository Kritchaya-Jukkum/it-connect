import { useContext, useMemo, useState } from "react"
import { Link } from "react-router-dom"

import Rightbar from "../components/Rightbar"
import Sidebar from "../components/Sidebar"
import { PostContext } from "../context/posts"
const categories = [
  { label: "ทั้งหมด", value: "all" },
  { label: "Web Application", value: "Web Application" },
  { label: "Mobile Application", value: "Mobile Application" },
  { label: "AI", value: "Artificial Intelligence" },
  { label: "IoT", value: "Internet of Things (IoT)" },
  { label: "Game", value: "Game Development" },
]

function Feed() {
  const { posts } = useContext(PostContext)
  const [selectedYear, setSelectedYear] = useState("ทั้งหมด")
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const filteredPosts = useMemo(() => {
    const keyword = search.trim().toLowerCase()
const filteredPosts = posts.filter((post) => {

  if (selectedYear === "ทั้งหมด") {
    return true
  }

  return post.academicYear === selectedYear

})
    return posts.filter((post) => {

  if (post.status !== "approved") {
    return false
  }

  const projectName = post.projectName || post.title || ""
      const technologies = post.technologies || post.technology || ""
      const matchesSearch =
        !keyword ||
        projectName.toLowerCase().includes(keyword) ||
        (post.members || "").toLowerCase().includes(keyword) ||
        technologies.toLowerCase().includes(keyword)

      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory

      const matchesYear =
        selectedYear === "ทั้งหมด" || post.academicYear === selectedYear

      return matchesSearch && matchesCategory && matchesYear
    })
  }, [posts, search, selectedCategory, selectedYear])

  return (
    <div className="
min-h-screen
bg-gradient-to-br
from-zinc-950
via-slate-950
to-black
text-white
flex
">
      <Sidebar />

      <main className="flex-1 w-full max-w-4xl mx-auto p-3 md:p-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            โครงการทั้งหมด
          </h1>

          <input
            type="text"
            placeholder="Search Projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none focus:border-blue-500 transition"
          />
        </div>
<div className="flex gap-4 mb-8 overflow-x-auto pb-2">
  <button
  onClick={() => setSelectedYear("ทั้งหมด")}
  className={`px-4 py-2 rounded-2xl transition ${
    selectedYear === "ทั้งหมด"
      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
      : "bg-zinc-900 border border-zinc-800"
  }`}
>
  ทั้งหมด
</button>

  <button
    onClick={() => setSelectedYear("2567")}
    className={`px-4 py-2 rounded-2xl transition ${
      selectedYear === "2567"
        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
        : "bg-zinc-900 border border-zinc-800"
    }`}
  >
    2567
  </button>

  <button
    onClick={() => setSelectedYear("2568")}
    className={`px-4 py-2 rounded-2xl transition ${
      selectedYear === "2568"
        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
        : "bg-zinc-900 border border-zinc-800"
    }`}
  >
    2568
  </button>

  <button
    onClick={() => setSelectedYear("2569")}
    className={`px-4 py-2 rounded-2xl transition ${
      selectedYear === "2569"
        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
        : "bg-zinc-900 border border-zinc-800"
    }`}
  >
    2569
  </button>

</div>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-5 py-2 rounded-2xl whitespace-nowrap transition ${
                selectedCategory === category.value
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredPosts.map((post) => {
            const projectName = post.projectName || post.title || "ยังไม่มีชื่อโครงการ"
            const technologies = post.technologies || post.technology || "ยังไม่ได้ระบุ"

            return (
              <div
                key={post.id}
                className="
rounded-3xl
overflow-hidden
bg-white/5
backdrop-blur-md
border
border-white/10
hover:border-blue-500/40
hover:shadow-xl
hover:shadow-blue-500/10
hover:-translate-y-1
transition-all
duration-300
"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={projectName}
                    className="
w-full
max-h-[250px]
md:max-h-[500px]
object-cover
hover:scale-105
transition-transform
duration-500
"
                  />
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-6 gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img
                        src={post.avatar || "https://i.pravatar.cc/100"}
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

                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-500/20 text-blue-400">
                      {post.category || "ไม่ระบุหมวดหมู่"}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {projectName}
                  </h2>
<div className="flex gap-2 mb-4">

  <span className="
  px-3 py-1
  rounded-full
  bg-green-500/20
  text-green-400
  text-sm
  ">
    📚ปีการศึกษา: {post.academicYear}
  </span>

</div>
                  <div className="grid gap-2 text-zinc-400 mb-4">
                    <p>สมาชิก: {post.members || "ยังไม่ได้ระบุ"}</p>
                    

                    <p>เทคโนโลยีที่ใช้: {technologies}</p>
                  </div>

                  <p className="text-zinc-400 mb-6">
                    {post.description || "ยังไม่มีรายละเอียดโครงการ"}
                  </p>

                  <Link to={`/post/${post.id}`}>
                    <button className="
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-blue-600
to-cyan-500
font-semibold
hover:scale-[1.02]
transition
">
                      ดูรายละเอียดโครงการ
                    </button>
                  </Link>
                </div>
              </div>
            )
          })}

          {filteredPosts.length === 0 && (
            <div className="
w-full
p-4
rounded-2xl
bg-white/5
backdrop-blur-md
border
border-white/10
outline-none
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/20
transition
">
              ไม่พบโครงการที่ตรงกับการค้นหา
            </div>
          )}
        </div>
      </main>

      <Rightbar />
    </div>
  )
}

export default Feed
