function Rightbar() {
  return (
    <aside className="hidden lg:block w-80 h-screen sticky top-0 border-l border-white/10 p-6">

      {/* Search */}

      <input
        type="text"
        placeholder="Search..."
        className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none mb-8"
      />

      {/* Trending */}

      <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 mb-6">

        <h2 className="text-2xl font-bold mb-6">
          Trending Topics
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-zinc-500 text-sm">
              Q&A
            </p>

            <h3 className="font-semibold">
              React Router
            </h3>
          </div>

          <div>
            <p className="text-zinc-500 text-sm">
              Lost & Found
            </p>

            <h3 className="font-semibold">
              AirPods Pro
            </h3>
          </div>

          <div>
            <p className="text-zinc-500 text-sm">
              Tutoring
            </p>

            <h3 className="font-semibold">
              JavaScript Basics
            </h3>
          </div>

        </div>

      </div>

      {/* Active Students */}

      <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">

        <h2 className="text-2xl font-bold mb-6">
          Active Students
        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/100?img=1"
              className="w-12 h-12 rounded-full"
            />

            <div>

              <h3 className="font-semibold">
                Kritchaya
              </h3>

              <p className="text-zinc-500 text-sm">
                Frontend Developer
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <img
              src="https://i.pravatar.cc/100?img=2"
              className="w-12 h-12 rounded-full"
            />

            <div>

              <h3 className="font-semibold">
                Napat
              </h3>

              <p className="text-zinc-500 text-sm">
                UI Designer
              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  )
}

export default Rightbar