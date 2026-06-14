import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth"
function Navbar() {
  const { user, logout } = useContext(AuthContext)
  return (
    <nav className="
sticky top-0 z-50
flex items-center justify-between
px-8 py-5
border-b border-white/5
bg-black/30
backdrop-blur-2xl
">

      <Link to="/" className="flex items-center gap-3">

        <div className="
w-12
h-12
rounded-2xl
bg-gradient-to-br
from-blue-500
to-cyan-400
flex
items-center
justify-center
font-bold
text-xl
shadow-lg
shadow-blue-500/30
">
  🚀
</div>

        <div>

          <h1 className="text-2xl font-bold text-white">
            IT Project Hub
          </h1>

          <p className="text-xs text-zinc-500">
            แหล่งรวมโครงการนักศึกษา
          </p>

        </div>

      </Link>

      <div className="hidden md:flex items-center gap-8 text-zinc-300">

        <Link to="/" className="
  hover:text-white
  transition
  hover:translate-y-[-1px]
  "
>
          หน้าแรก
        </Link>

        <Link
  to="/feed"
  className="
  hover:text-white
  transition
  hover:translate-y-[-1px]
  "
>
          โครงการทั้งหมด
        </Link>

        <Link to="/create" className="  hover:text-white
  transition
  hover:translate-y-[-1px]
  ">
          เพิ่มโครงการ
        </Link>

        <Link to="/dashboard" className="
  hover:text-white
  transition
  hover:translate-y-[-1px]
  "
>
          แดชบอร์ด
        </Link>

      </div>

      

        {
  user ? (

    <div className="flex items-center gap-4">

      <img
  src={user.photoURL}
  alt={user.displayName}
  className="
w-11
h-11
rounded-full
border-2
border-blue-500/30
shadow-lg
shadow-blue-500/20
"
/>
<div className="hidden lg:block">
  <p className="text-sm font-semibold text-white">
    {user.displayName}
  </p>

 <p className="text-xs text-cyan-400">
  {user.role === "admin"
    ? "🛡️ Admin"
    : "🎓 Student"}
</p>
</div>
      <button
        onClick={logout}
        className="
px-5 py-2
rounded-2xl
bg-gradient-to-r
from-red-500
to-pink-500
text-white
font-semibold
hover:scale-[1.03]
transition-all
duration-300
"
      >

        ออกจากระบบ

      </button>

    </div>

  ) : (

    <Link to="/login">

      <button className="
px-5 py-2
rounded-2xl
bg-gradient-to-r
from-blue-600
to-cyan-500
hover:scale-[1.03]
transition-all
duration-300
shadow-lg
shadow-blue-500/20
">

        เข้าสู่ระบบ

      </button>

    </Link>

  )
}

      

    </nav>
  )
}

export default Navbar
