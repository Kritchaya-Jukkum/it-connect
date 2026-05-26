import Navbar from "../components/Navbar"
function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      <Navbar />

      <aside className="w-72 bg-zinc-900 border-r border-zinc-800 p-6">

        <h1 className="text-3xl font-bold mb-10">
          Dashboard
        </h1>

        <div className="space-y-4">

          <button className="w-full text-left p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700">
            Overview
          </button>

          <button className="w-full text-left p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700">
            My Posts
          </button>

          <button className="w-full text-left p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700">
            Settings
          </button>

        </div>

      </aside>

      <main className="flex-1 p-10">

        <h2 className="text-5xl font-bold mb-10">
          Welcome Back
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-4xl font-bold text-blue-400">
              12
            </h3>

            <p className="text-zinc-400 mt-3">
              Active Posts
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-4xl font-bold text-green-400">
              5
            </h3>

            <p className="text-zinc-400 mt-3">
              Found Items
            </p>
          </div>

        </div>

      </main>

    </div>
  )
}

export default Dashboard