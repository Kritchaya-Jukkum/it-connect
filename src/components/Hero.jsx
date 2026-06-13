import { Link } from "react-router-dom"

function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
      <div className="mb-6 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-xl">
        แหล่งรวมโครงการนักศึกษา
      </div>

      <h1 className="text-4xl md:text-7xl font-black leading-tight">
        IT Project Hub
      </h1>

      <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">
        เว็บไซต์สำหรับรวบรวมโครงการของนักศึกษาทุกกลุ่มไว้ในที่เดียว
        เพื่อให้ค้นหา ดูรายละเอียด แลกเปลี่ยนความคิดเห็น
        และต่อยอดไอเดียจากผลงานของเพื่อน ๆ ได้ง่ายขึ้น
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <Link to="/create">
          <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-lg shadow-xl shadow-blue-500/30">
            Add Project (เพิ่มโครงการ)
          </button>
        </Link>

        <Link to="/feed">
          <button className="px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/40 backdrop-blur-xl hover:bg-zinc-800 transition text-lg">
            View All Projects (ดูโครงการทั้งหมด)
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-16">
        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          Project Category (ประเภทโครงงาน)
        </div>

        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          Members (สมาชิก)
        </div>

        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          Advisor (อาจารย์ที่ปรึกษา)
        </div>

        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          Tools & Technologies Used (เครื่องมือและเทคโนโลยีที่ใช้)
        </div>
      </div>
    </section>
  )
}

export default Hero
