import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Features from "../components/Features"

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden relative">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <Navbar />
      <Hero />
      <Stats />
      <Features />

    </div>
  )
}

export default Home