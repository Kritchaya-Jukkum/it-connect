import { useContext } from "react"

import { AuthContext } from "../context/AuthContext"

import { Navigate } from "react-router-dom"

function Login() {

  const { user, login } = useContext(AuthContext)

  if (user) {

    return <Navigate to="/feed" />

  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md p-8 rounded-3xl bg-zinc-900 border border-zinc-800 text-white">

        <h1 className="text-5xl font-bold mb-4 text-center">
          Welcome Back
        </h1>

        <p className="text-zinc-400 text-center mb-10">
          Sign in to IT Project Hub
        </p>

        <button
          onClick={login}
          className="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition"
        >

          Continue with Google

        </button>

      </div>

    </div>
  )
}

export default Login