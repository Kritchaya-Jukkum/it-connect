function Stats() {
  return (
    <section className="relative z-10 grid md:grid-cols-4 gap-6 px-8 pb-16">
      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <h2 className="text-5xl font-bold text-blue-400">300+</h2>

        <p className="text-zinc-400 mt-3">นักศึกษา IT</p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <h2 className="text-5xl font-bold text-purple-400">120+</h2>

        <p className="text-zinc-400 mt-3">โครงการนักศึกษา</p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <h2 className="text-5xl font-bold text-cyan-400">45+</h2>

        <p className="text-zinc-400 mt-3">หมวดหมู่โครงการ</p>
      </div>

      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <h2 className="text-5xl font-bold text-green-400">89%</h2>

        <p className="text-zinc-400 mt-3">การมีส่วนร่วม</p>
      </div>
    </section>
  )
}

export default Stats
