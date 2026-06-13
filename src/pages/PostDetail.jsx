import { useContext } from "react"
import { useParams } from "react-router-dom"
import { doc, deleteDoc } from "firebase/firestore"
import { db } from "../firebase/firebase"
import Navbar from "../components/Navbar"
import { PostContext } from "../context/posts"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth"
import { Link } from "react-router-dom"
function PostDetail() {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const { posts } = useContext(PostContext)
  const navigate = useNavigate()

  const post = posts.find((p) => p.id === id)

async function handleDelete() {

   console.log(post)

  const confirmDelete = window.confirm(
    "ต้องการลบโครงการนี้หรือไม่?"
  )

  if (!confirmDelete) return

  try {

    await deleteDoc(doc(db, "posts", post.id))

    navigate("/feed")

  } catch (error) {

    console.log(error)

  }

}

if (!post) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        ไม่พบโครงการ
      </div>
    )
  }

  const projectName = post.projectName || post.title || "ยังไม่มีชื่อโครงการ"
  const technologies = post.technologies || post.technology || "ยังไม่ได้ระบุ"

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            {post.image ? (
              <img
                src={post.image}
                alt={projectName}
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            ) : (
              <div className="w-full h-[500px] rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                ยังไม่มีรูปภาพโครงการ
              </div>
            )}
          </div>

          <div>
            <span className="inline-block px-4 py-2 rounded-full mb-6 bg-blue-500/20 text-blue-400">
              {post.category || "ไม่ระบุหมวดหมู่"}
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              {projectName}
            </h1>

            <div className="space-y-4 text-zinc-400 text-lg">
              <p>หมวดหมู่โครงการ: {post.category || "ไม่ระบุหมวดหมู่"}</p>
              <div>
  <p>สมาชิกในกลุ่ม:</p>

  <p className="whitespace-pre-line">
    {post.members || "ยังไม่ได้ระบุ"}
  </p>
</div>
              <p>อาจารย์ที่ปรึกษา: {post.advisor || "ยังไม่ได้ระบุ"}</p>
              <p>เครื่องมือและเทคโนโลยีที่ใช้: {technologies}</p>
              <p>ผู้เพิ่มโครงการ: {post.user || "ไม่ระบุชื่อ"}</p>
              <p>{post.time}</p>
            </div>

            <div className="mt-10">
              <h2 className="text-3xl font-bold mb-4">รายละเอียดโครงการ</h2>
              <p className="text-zinc-400 leading-relaxed">
                {post.description || "ยังไม่มีรายละเอียดโครงการ"}
              </p>
            </div>

            {(post.pdfUrl || post.videoUrl) && (
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {post.pdfUrl && (
                  <a
                    href={post.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-4 rounded-2xl bg-white text-black font-bold text-center hover:scale-[1.02] transition"
                  >
                    View Report
                  </a>
                )}
               


                {post.videoUrl && (
                  <a
                    href={post.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold text-center hover:bg-blue-500 transition"
                  >
                    Watch Video
                  </a>
                )}
                  </div>
            )}
           
{post.ownerId === user?.uid && (
  <div className="mt-6 flex gap-4">

    <Link to={`/edit/${post.id}`}>
      <button className="px-6 py-4 rounded-2xl bg-yellow-600 text-white font-bold">
        Edit Project
      </button>
    </Link>

    <button
      onClick={handleDelete}
      className="px-6 py-4 rounded-2xl bg-red-600 text-white font-bold"
    >
      Delete Project
    </button>

  </div>
)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
