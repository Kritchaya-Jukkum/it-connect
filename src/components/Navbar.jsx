import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
function Navbar() {
  const { user, logout } = useContext(AuthContext)
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-zinc-950/70 backdrop-blur-2xl">

      <Link to="/" className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30">
          IT
        </div>

        <div>

          <h1 className="text-2xl font-bold text-white">
            IT Project Hub
          </h1>

          <p className="text-xs text-zinc-500">
            Community Platform
          </p>

        </div>

      </Link>

      <div className="hidden md:flex items-center gap-8 text-zinc-300">

        <Link to="/" className="hover:text-white transition">
          Home
        </Link>

        <Link to="/feed" className="hover:text-white transition">
          Community
        </Link>

        <Link to="/create" className="hover:text-white transition">
          Create Post
        </Link>

        <Link to="/dashboard" className="hover:text-white transition">
          Dashboard
        </Link>

      </div>

      

        {
  user ? (

    <div className="flex items-center gap-4">

      <img
        src={user.photoURL}
        className="w-11 h-11 rounded-full border border-zinc-700"
      />

      <button
        onClick={logout}
        className="px-5 py-2 rounded-2xl bg-red-500 hover:bg-red-400 transition"
      >

        Logout

      </button>

    </div>

  ) : (

    <Link to="/login">

      <button className="px-5 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">

        Login

      </button>

    </Link>

  )
}

      

    </nav>
  )
}

export default Navbar