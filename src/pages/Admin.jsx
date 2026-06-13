import { useContext } from "react"
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"
import "../assets/fonts/THSarabunNew"
import { PostContext } from "../context/posts"
import Sidebar from "../components/Sidebar"
import { db } from "../firebase/firebase"
import { useEffect, useState } from "react"
import { AuthContext } from "../context/auth"
import {
  doc,
  deleteDoc,
  collection,
  getDocs,
  updateDoc
} from "firebase/firestore"
async function approvePost(postId) {

  try {

    await updateDoc(
      doc(db, "posts", postId),
      {
        status: "approved"
      }
    )

    window.location.reload()

  } catch (error) {

    console.log(error)

  }

}
function Admin() {

  const { posts } = useContext(PostContext)
  const { user } = useContext(AuthContext)
  const [totalUsers, setTotalUsers] = useState(0)
  const [totalAdmins, setTotalAdmins] = useState(0)
  const [totalStudents, setTotalStudents] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {

  async function loadUsers() {

   const snapshot = await getDocs(
  collection(db, "users")
)

const userList = []

snapshot.forEach((doc) => {

  userList.push({
    id: doc.id,
    ...doc.data()
  })

})

setUsers(userList)

setTotalUsers(snapshot.size)

let admins = 0
let students = 0

snapshot.forEach((doc) => {

  const data = doc.data()
    
  if (data.role === "admin") {
    admins++
  } else {
    students++
  }

})

setTotalAdmins(admins)
setTotalStudents(students)

  }

  loadUsers()

}, [])
 async function changeRole(userId, currentRole) {

  console.log("CLICKED")
  console.log(userId)
  console.log(currentRole)

  try {

    await updateDoc(
      doc(db, "users", userId),
      {
        role:
          currentRole === "admin"
            ? "student"
            : "admin"
      }
    )

    window.location.reload()

  } catch (error) {

    console.log(error)

  }

}
  async function handleDelete(id) {

   
  const confirmDelete = window.confirm(
    "ต้องการลบโครงการนี้หรือไม่?"
  )

  if (!confirmDelete) return

  try {

    await deleteDoc(
      doc(db, "posts", id)
    )

  } catch (error) {

    console.log(error)

  }

}

  if (user?.role !== "admin") {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        ไม่มีสิทธิ์เข้าถึงหน้านี้
      </h1>
    </div>
  )
}
function exportPDF() {

  const pdf = new jsPDF()

  pdf.setFont("2.3.2 THSarabunNew")

  pdf.setFontSize(20)

  pdf.text(
  "รายงานโครงงานนักศึกษา IT Project Hub",
  14,
  20
)

  autoTable(pdf, {
  columnStyles: {
  2: { cellWidth: 60 }
},
  startY: 30,

  headStyles: {
    font: "2.3.2 THSarabunNew",
    fontStyle: "normal"
  },

  bodyStyles: {
    font: "2.3.2 THSarabunNew",
    fontStyle: "normal"
  },

  styles: {
    font: "2.3.2 THSarabunNew",
    fontStyle: "normal",
    fontSize: 14
  },

  head: [[
  "ชื่อโครงการ",
  "ปีการศึกษา",
  "สมาชิก",
  "อาจารย์",
  "หมวดหมู่"
]],

body: posts.map((post) => [

  post.projectName || post.title || "-",

  post.academicYear || "-",

  post.members || "-",

  post.advisor || "-",

  post.category || "-"

])

})

  pdf.save("projects-report.pdf")

}
    return (
  <div className="min-h-screen bg-zinc-950 text-white flex">
    <Sidebar />

    <main className="flex-1 p-8">
      <h1 className="text-5xl font-bold">
  Admin Panel
</h1>

<p className="text-zinc-400 mt-2">
  Welcome, {user?.displayName}
</p>
<p className="text-red-400 mb-8">
  Role: {user?.role}
</p>
<button
  onClick={exportPDF}
  className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 mb-8"
>
  Export PDF
</button>

<div className="mb-10">

  <h2 className="text-3xl font-bold mb-4">
    User Management
  </h2>

  <div className="space-y-3">

    {users.map((u) => (

      <div
        key={u.id}
        className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex justify-between items-center"
      >

        <div>

          <p className="font-bold">
            {u.displayName}
          </p>

          <p className="text-zinc-400 text-sm">
            {u.email}
          </p>

          <p className="text-blue-400">
            {u.role}
          </p>

        </div>

        {u.id !== user?.uid && (
  <button
    onClick={() =>
      changeRole(u.id, u.role)
    }
    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500"
  >
    เปลี่ยน Role
  </button>
)}

      </div>

    ))}

  </div>

</div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
          <p className="text-zinc-400">จำนวนโครงงานทั้งหมด</p>

          <h2 className="text-5xl font-bold text-blue-400">
            {posts.length}
          </h2>
        </div>

        <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
          <p className="text-zinc-400">จำนวนผู้ใช้ทั้งหมด</p>

          <h2 className="text-5xl font-bold text-green-400">
            {totalUsers}
          </h2>
        </div>
        <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
  <p className="text-zinc-400">Admin</p>

  <h2 className="text-5xl font-bold text-red-400">
    {totalAdmins}
  </h2>
</div>

<div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
  <p className="text-zinc-400">Student</p>

  <h2 className="text-5xl font-bold text-yellow-400">
    {totalStudents}
  </h2>
</div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">
                {post.projectName || post.title}
              </h2>

              <p className="text-zinc-400">
                ปีการศึกษา: {post.academicYear || "-"}
              </p>

              <p className="text-zinc-500">
                ผู้เพิ่ม: {post.user || "-"}
              </p>
            </div>
           <div className="flex gap-2">

  <div className="flex gap-2">

  {post.status === "pending" && (
    <button
      onClick={() => approvePost(post.id)}
      className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500"
    >
      อนุมัติ
    </button>
  )}

  <button
    onClick={() => handleDelete(post.id)}
    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500"
  >
    ลบ
  </button>

</div>

              </div>
          </div>
        ))}
      </div>
    </main>
  </div>
)
}

export default Admin