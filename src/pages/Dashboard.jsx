import { useContext, useMemo } from "react"

import Rightbar from "../components/Rightbar"
import Sidebar from "../components/Sidebar"
import { PostContext } from "../context/posts"
import { AuthContext } from "../context/auth"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"
function splitList(value) {
  return (value || "")
    .split(/[,،\n]/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function Dashboard() {
  const { posts } = useContext(PostContext)
  const { user } = useContext(AuthContext)
  const stats = useMemo(() => {
    const categories = new Set()
    const students = new Set()
    const technologyCounts = new Map()

    posts.forEach((post) => {
      if (post.category) categories.add(post.category)

      splitList(post.members).forEach((member) => {
        students.add(member.toLowerCase())
      })

      splitList(post.technologies || post.technology).forEach((technology) => {
        const key = technology.toLowerCase()
        const label = technology
        const current = technologyCounts.get(key) || { label, count: 0 }
        technologyCounts.set(key, { label: current.label, count: current.count + 1 })
        
      })
    })

    const mostUsedTechnology = [...technologyCounts.values()].sort(
      (a, b) => b.count - a.count
    )[0]

    const webProjects = posts.filter(
  (post) => post.category === "Web Application"
).length

const mobileProjects = posts.filter(
  (post) => post.category === "Mobile Application"
).length

const aiProjects = posts.filter(
  (post) => post.category === "Artificial Intelligence"
).length

const iotProjects = posts.filter(
  (post) => post.category === "Internet of Things (IoT)"
).length

const gameProjects = posts.filter(
  (post) => post.category === "Game Development"
).length
    return {
      totalProjects: posts.length,
      totalCategories: categories.size,
      totalStudents: students.size,
      mostUsedTechnology: mostUsedTechnology?.label || "ยังไม่มีข้อมูล",
      mostUsedTechnologyCount: mostUsedTechnology?.count || 0,
      webProjects,
      mobileProjects,
      aiProjects,
      iotProjects,
      gameProjects
    }
  }, [posts])
  const chartData = [
  { category: "Web", count: stats.webProjects },
  { category: "Mobile", count: stats.mobileProjects },
  { category: "AI", count: stats.aiProjects },
  { category: "IoT", count: stats.iotProjects },
  { category: "Game", count: stats.gameProjects },
]
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <Sidebar />

      <main className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">แดชบอร์ด</h1>
          <p className="text-zinc-400">
            ภาพรวมข้อมูลโครงการทั้งหมดใน IT Project Hub
          </p>
        </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
            <p className="text-zinc-400 mb-3">Total Projects</p>
            <h2 className="text-5xl font-bold text-blue-400">
              {stats.totalProjects}
            </h2>
            <p className="text-zinc-500 mt-3">จำนวนโครงการทั้งหมด</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
            <p className="text-zinc-400 mb-3">Total Categories</p>
            <h2 className="text-5xl font-bold text-purple-400">
              {stats.totalCategories}
            </h2>
            <p className="text-zinc-500 mt-3">จำนวนหมวดหมู่ที่มีข้อมูล</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
            <p className="text-zinc-400 mb-3">Total Students</p>
            <h2 className="text-5xl font-bold text-green-400">
              {stats.totalStudents}
            </h2>
            <p className="text-zinc-500 mt-3">นับจากรายชื่อสมาชิก</p>
          </div>

          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
            <p className="text-zinc-400 mb-3">Most Used Technology</p>
            <h2 className="text-3xl font-bold text-cyan-400 break-words">
              {stats.mostUsedTechnology}
            </h2>
            <p className="text-zinc-500 mt-3">
              พบใน {stats.mostUsedTechnologyCount} โครงการ
            </p>
          </div>
        </div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-8 mb-15">

  <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
    <p className="text-zinc-400">Web App</p>
    <h2 className="text-4xl font-bold text-blue-400">
      {stats.webProjects}
    </h2>
  </div>

  <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
    <p className="text-zinc-400">Mobile</p>
    <h2 className="text-4xl font-bold text-green-400">
      {stats.mobileProjects}
    </h2>
  </div>

  <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
    <p className="text-zinc-400">AI</p>
    <h2 className="text-4xl font-bold text-purple-400">
      {stats.aiProjects}
    </h2>
  </div>

  <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
    <p className="text-zinc-400">IoT</p>
    <h2 className="text-4xl font-bold text-yellow-400">
      {stats.iotProjects}
    </h2>
  </div>

  <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
    <p className="text-zinc-400">Game</p>
    <h2 className="text-4xl font-bold text-red-400">
      {stats.gameProjects}
    </h2>
  </div>

</div>
      <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 mt-8">

  <h2 className="text-2xl font-bold mb-6">
    สถิติโครงงานตามหมวดหมู่
  </h2>

  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={chartData}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" />
    </BarChart>
  </ResponsiveContainer>

</div>
      </main>

      <Rightbar />
    </div>
  )
}

export default Dashboard
