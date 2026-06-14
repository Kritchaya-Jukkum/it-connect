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
    <div className="
min-h-screen
bg-gradient-to-br
from-zinc-950
via-slate-950
to-black
text-white
">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6 md:p-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            {post.image ? (
              <img
                src={post.image}
                alt={projectName}
                className="
w-full
h-[500px]
object-cover
rounded-3xl
border
border-white/10
shadow-2xl
shadow-blue-500/10
hover:scale-[1.02]
transition-all
duration-500
"
              />
            ) : (
              <div className="w-full h-[500px] rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                ยังไม่มีรูปภาพโครงการ
              </div>
            )}
          </div>

        <div
className="
bg-white/5
backdrop-blur-md
border
border-white/10
rounded-3xl
p-8
"
>

  <span
    className="
    inline-block
    px-4 py-2
    rounded-full
    mb-4
    bg-gradient-to-r
    from-blue-600/20
    to-cyan-500/20
    text-cyan-300
    border
    border-cyan-500/20
    "
  >
    {post.category || "ไม่ระบุหมวดหมู่"}
  </span>

  <div className="flex gap-2 mb-6">
    <span
      className="
      px-3 py-1
      rounded-full
      bg-green-500/20
      text-green-400
      text-sm
      "
    >
      📚 {post.academicYear}
    </span>
  </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              {projectName}
            </h1>

            <div className="space-y-4 text-zinc-400 text-lg">
             
             <div
className="
p-4
rounded-2xl
bg-black/20
border
border-white/5
"
>
  <p className="mb-2 font-semibold text-white">
    👥 สมาชิกในกลุ่ม
  </p>

  <p className="whitespace-pre-line text-zinc-300">
    {post.members || "ยังไม่ได้ระบุ"}
  </p>
</div>
<div className="space-y-5 text-zinc-300">
             <p>
  👨‍🏫 อาจารย์ที่ปรึกษา:
  {post.advisor || "ยังไม่ได้ระบุ"}
</p>

<p>
  💻 เทคโนโลยี:
  {technologies}
</p>

<p>
  👤 ผู้เพิ่ม:
  {post.user}
</p>
             <p className="text-zinc-500 text-sm">
  🕒 {post.time}
</p>
            </div>
</div>
            <div
className="
mt-10
p-6
rounded-3xl
bg-white/5
border
border-white/10
"
>
              <h2 className="text-3xl font-bold mb-4">รายละเอียดโครงการ</h2>
              <p className="text-zinc-300 leading-8 whitespace-pre-line">
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
                   className="px-6 py-4 rounded-2xl bg-gradient-to-r
from-green-500
to-emerald-500
text-white font-bold text-center
hover:scale-[1.02]
transition-all
duration-300"
                  >
                    View Report
                  </a>
                )}
               


                {post.videoUrl && (
                  <a
                    href={post.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-4 rounded-2xl bg-gradient-to-r
from-blue-600
to-cyan-500
text-white font-bold text-center
hover:scale-[1.02]
transition-all
duration-300"
                  >
                    Watch Video
                  </a>
                )}
                  </div>
            )}
           
{post.ownerId === user?.uid && (
  <div className="mt-6 flex gap-4">

    <Link to={`/edit/${post.id}`}>
      <button className="px-6 py-4 rounded-2xl bg-gradient-to-r
from-yellow-500
to-orange-500 text-white font-bold hover:scale-[1.02]
transition-all
duration-300">
        Edit Project
      </button>
    </Link>

    <button
      onClick={handleDelete}
      className="px-6 py-4 rounded-2xl bg-gradient-to-r
from-red-600
to-pink-600 text-white font-bold hover:scale-[1.02]
transition-all
duration-300"
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
