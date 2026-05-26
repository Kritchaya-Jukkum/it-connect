function Features() {
  return (
    <section className="relative z-10 grid md:grid-cols-3 gap-6 px-8 pb-20">

      <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl hover:scale-105 transition">

        <div className="text-4xl mb-5">
          🔍
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Smart Search
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          ค้นหาของหายได้รวดเร็วด้วยระบบค้นหาอัจฉริยะ
        </p>

      </div>

      <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl hover:scale-105 transition">

        <div className="text-4xl mb-5">
          ⚡
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Realtime System
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          อัปเดตสถานะและแจ้งเตือนแบบเรียลไทม์
        </p>

      </div>

      <div className="p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-xl hover:scale-105 transition">

        <div className="text-4xl mb-5">
          🔒
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Secure Platform
        </h2>

        <p className="text-zinc-400 leading-relaxed">
          ปลอดภัย รองรับการจัดการข้อมูลผู้ใช้
        </p>

      </div>

    </section>
  )
}

export default Features