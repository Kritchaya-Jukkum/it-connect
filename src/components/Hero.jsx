function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">

      <div className="mb-6 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-xl">
        Digital Community Platform
      </div>

      <h1 className="text-4xl md:text-7xl font-black leading-tight">

        Connect
        <span className="text-blue-500">
          .
        </span>

        Learn
        <span className="text-purple-500">
          .
        </span>

        Share

      </h1>

      <p className="text-zinc-400 text-xl mt-8 max-w-3xl leading-relaxed">

        IT Connect คือแพลตฟอร์มกลางสำหรับนักศึกษาแผนก IT
        ที่รวม Community, Q&A, Lost & Found,
        การช่วยเหลือด้านการเรียน และกิจกรรมต่าง ๆ
        ไว้ในที่เดียว

      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-12">

        <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-lg shadow-xl shadow-blue-500/30">

          Join Community

        </button>

        <button className="px-8 py-4 rounded-2xl border border-zinc-700 bg-zinc-900/40 backdrop-blur-xl hover:bg-zinc-800 transition text-lg">

          Explore Feed

        </button>

      </div>

      {/* Community Tags */}

      <div className="flex flex-wrap justify-center gap-4 mt-16">

        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          💬 Community Discussions
        </div>

        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          📚 Q&A & Tutoring
        </div>

        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          🔍 Lost & Found
        </div>

        <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300">
          🚀 Student Projects
        </div>

      </div>

    </section>
  )
}

export default Hero