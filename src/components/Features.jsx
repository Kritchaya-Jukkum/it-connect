function Features() {
  return (
    <section className="relative z-10 grid md:grid-cols-3 gap-6 px-8 pb-20">
      <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl hover:scale-105 transition">
        <div className="text-4xl mb-5">01</div>

        <h2 className="text-2xl font-bold mb-4">ค้นหาโครงการได้ง่าย</h2>

        <p className="text-zinc-400 leading-relaxed">
          รวมโครงการนักศึกษาไว้ให้ค้นดูตามหมวดหมู่ ชื่อโครงการ สมาชิก
          อาจารย์ที่ปรึกษา เทคโนโลยี และรายละเอียดของผลงาน
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl hover:scale-105 transition">
        <div className="text-4xl mb-5">02</div>

        <h2 className="text-2xl font-bold mb-4">ข้อมูลอัปเดตแบบเรียลไทม์</h2>

        <p className="text-zinc-400 leading-relaxed">
          ใช้ Firebase Firestore เพื่อให้หน้าแสดงโครงการและความคิดเห็น
          อัปเดตทันทีเมื่อมีการเพิ่มข้อมูลใหม่
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl hover:scale-105 transition">
        <div className="text-4xl mb-5">03</div>

        <h2 className="text-2xl font-bold mb-4">เข้าสู่ระบบก่อนเผยแพร่</h2>

        <p className="text-zinc-400 leading-relaxed">
          ยังคงใช้ Firebase Authentication เพื่อให้นักศึกษาลงชื่อเข้าใช้
          เพิ่มโครงการ และร่วมแสดงความคิดเห็นได้อย่างเป็นระบบ
        </p>
      </div>
    </section>
  )
}

export default Features
