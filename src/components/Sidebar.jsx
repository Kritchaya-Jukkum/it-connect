import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-72 h-screen sticky top-0 border-r border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6">

      {/* Logo */}

      <div className="flex items-center gap-4 mb-12">

        <div className="w-14 h-14 rounded-3xl bg-blue-600 flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-500/30">

          IT

        </div>

        <div>

          <h1 className="text-2xl font-bold text-white">
            IT Connect
          </h1>

          <p className="text-zinc-500 text-sm">
            Community Platform
          </p>

        </div>

      </div>

      {/* Navigation */}

      <nav className="space-y-3">

        <Link to="/feed">

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-600 text-white hover:scale-[1.02] transition">

            <span className="text-xl">
              🏠
            </span>

            <span className="font-semibold">
              Community Feed
            </span>

          </div>

        </Link>

        <Link to="/create">

          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900 transition">

            <span className="text-xl">
              ➕
            </span>

            <span>
              Create Post
            </span>

          </div>

        </Link>

        <Link to="/dashboard">

          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900 transition">

            <span className="text-xl">
              📊
            </span>

            <span>
              Dashboard
            </span>

          </div>
<Link to="/profile">

  <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900 transition">

    <span className="text-xl">
      👤
    </span>

    <span>
      Profile
    </span>

  </div>

</Link>
        </Link>

        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900 transition cursor-pointer">

          <span className="text-xl">
            🔔
          </span>

          <span>
            Notifications
          </span>

        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900 transition cursor-pointer">

          <span className="text-xl">
            💬
          </span>

          <span>
            Messages
          </span>

        </div>

      </nav>

      {/* Bottom Card */}

      <div className="mt-auto p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600">

        <h2 className="text-2xl font-bold mb-3">
          IT Connect
        </h2>

        <p className="text-sm text-white/80 mb-5">
          Connect with your IT community.
        </p>

        <button className="w-full py-3 rounded-2xl bg-white text-black font-bold">

          Explore

        </button>

      </div>

    </aside>
  )
}

export default Sidebar