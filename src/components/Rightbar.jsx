function Rightbar() {
  return (
    <aside className="hidden lg:block w-80 h-screen sticky top-0 border-l border-white/10 p-6">

      {/* Search */}

      <input
        type="text"
        placeholder="Search projects..."
        className="w-full p-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none mb-8"
      />

      {/* Trending */}

      <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 mb-6">

        <h2 className="text-2xl font-bold mb-6">
          Featured Categories
        </h2>

        <div className="space-y-4">

 <div>
  <p className="text-zinc-500 text-sm">
    Category
  </p>

  <h3 className="font-semibold">
    Web Application
  </h3>
</div>

<div>
  <p className="text-zinc-500 text-sm">
    Category
  </p>

  <h3 className="font-semibold">
    Artificial Intelligence
  </h3>
</div>

<div>
  <p className="text-zinc-500 text-sm">
    Category
  </p>

  <h3 className="font-semibold">
    Internet of Things (IoT)
  </h3>
</div>

        </div>

      </div>

      {/* Project Technologies */}

     {/* Project Technologies */}

<div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">

  <h2 className="text-2xl font-bold mb-6">
    Project Technologies
  </h2>

  <div className="space-y-4">

    <div>
      <h3 className="font-semibold">
        React.js
      </h3>
    </div>

    <div>
      <h3 className="font-semibold">
        Firebase
      </h3>
    </div>

    <div>
      <h3 className="font-semibold">
        Node.js
      </h3>
    </div>

    <div>
      <h3 className="font-semibold">
        Tailwind CSS
      </h3>
    </div>

  </div>

</div>

    </aside>
  )
}

export default Rightbar