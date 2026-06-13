        import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"

import Navbar from "../components/Navbar"
import { AuthContext } from "../context/auth"
import { db } from "../firebase/firebase"

const categories = [
  "Web Application",
  "Mobile Application",
  "Artificial Intelligence",
  "Internet of Things (IoT)",
  "Game Development",
  "Other",
]

function CreatePost() {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const [category, setCategory] = useState(categories[0])
  const [projectName, setProjectName] = useState("")
  const [academicYear, setAcademicYear] = useState("2569")
  const [members, setMembers] = useState("")
  const [advisor, setAdvisor] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [pdfUrl, setPdfUrl] = useState("")
  const [videoUrl, setVideoUrl] = useState("")

  function handleImageUpload(e) {
    const file = e.target.files[0]

    if (!file) return

    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
    }

    reader.readAsDataURL(file)
  }

  async function handleSubmit() {
    if (!projectName.trim()) return

    try {
      await addDoc(collection(db, "posts"), {
        
        status: "pending",
        rejectReason: "",
        category,
        academicYear,
        projectName,
        title: projectName,
        members,
        advisor,
        technologies,
        technology: technologies,
        description,
        image,
        pdfUrl,
        videoUrl,
        user: user?.displayName || "ไม่ระบุชื่อ",
        avatar: user?.photoURL || "",
        ownerId: user?.uid || "",
        time: new Date().toLocaleString(),
      })

      navigate("/feed")
    } catch (error) {
      console.log(error)
    }
  }
if (!user) {

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        กรุณาเข้าสู่ระบบก่อนเพิ่มโครงการ
      </h1>
    </div>
  )

}
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="p-10 flex justify-center">
        <div className="w-full max-w-2xl p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
          <h1 className="text-5xl font-bold mb-10">เพิ่มโครงการ</h1>

          <div className="mb-6">
            <label className="block mb-3 text-zinc-400">หมวดหมู่โครงการ</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block mb-3 text-zinc-400">ชื่อโครงการ</label>
            <input
              type="text"
              placeholder="กรอกชื่อโครงการ"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />
          </div>

          <div className="mb-6">
  <label className="block mb-3 text-zinc-400">
    สมาชิกในกลุ่ม
  </label>

  <textarea
    placeholder={`รายชื่อสมาชิกในกลุ่ม (เช่น)\n- นายสมชาย ใจดี\n- นางสาวสมหญิง แสนสวย\n- นายสมปอง สุดหล่อ`}
    value={members}
    onChange={(e) => setMembers(e.target.value)}
    rows={4}
    className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
  />
</div>

          <div className="mb-6">
            <label className="block mb-3 text-zinc-400">อาจารย์ที่ปรึกษา</label>
            <input
              type="text"
              placeholder="กรอกชื่ออาจารย์ที่ปรึกษา"
              value={advisor}
              onChange={(e) => setAdvisor(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />
          </div>

          <div className="mb-6">
  <label className="block mb-3 text-zinc-400">
    Academic Year (ปีการศึกษา)
  </label>

  <select
    value={academicYear}
    onChange={(e) => setAcademicYear(e.target.value)}
    className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
  >
    <option>2567</option>
    <option>2568</option>
    <option>2569</option>
    <option>2570</option>
  </select>
</div>

          <div className="mb-6">
            <label className="block mb-3 text-zinc-400">
              เครื่องมือและเทคโนโลยีที่ใช้
            </label>
            <input
              type="text"
              placeholder="React, Firebase, Node.js"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-3 text-zinc-400">รูปภาพโครงการ</label>
            <label className="flex items-center justify-center w-full h-40 border-2 border-dashed border-zinc-700 rounded-3xl cursor-pointer hover:border-blue-500 transition bg-zinc-900">
              <div className="text-center">
                <p className="text-5xl mb-3">รูปภาพ</p>
                <p className="text-zinc-400">คลิกเพื่ออัปโหลดรูปภาพโครงการ</p>
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {image && (
            <div className="mb-8">
              <img
                src={image}
                alt="ตัวอย่างรูปภาพโครงการ"
                className="w-full h-80 object-cover rounded-3xl border border-zinc-800"
              />
            </div>
          )}

          <div className="mb-8">
            <label className="block mb-3 text-zinc-400">
              รายละเอียดโครงการ
            </label>
            <textarea
              placeholder="อธิบายแนวคิด วิธีทำ หรือจุดเด่นของโครงการ"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none resize-none"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-3 text-zinc-400">Project PDF URL</label>
            <input
              type="url"
              placeholder="https://drive.google.com/... หรือ URL ไฟล์ PDF"
              value={pdfUrl}
              onChange={(e) => setPdfUrl(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />
          </div>

          <div className="mb-8">
            <label className="block mb-3 text-zinc-400">Video URL</label>
            <input
              type="url"
              placeholder="https://youtube.com/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
          >
            เผยแพร่โครงการ
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost