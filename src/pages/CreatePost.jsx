import Navbar from "../components/Navbar"

import { useContext, useState } from "react"

import { useNavigate } from "react-router-dom"

import { collection, addDoc } from "firebase/firestore"

import { db } from "../firebase/firebase"

import { AuthContext } from "../context/AuthContext"

function CreatePost() {

  const { user } = useContext(AuthContext)

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [type, setType] = useState("LOST")
  const [category, setCategory] = useState("Lost & Found")
  const [image, setImage] = useState("")
  function handleImageUpload(e) {

  const file = e.target.files[0]

  if (!file) return

  const reader = new FileReader()

  reader.onloadend = () => {

    setImage(reader.result)

  }

  reader.readAsDataURL(file)

}

  async function handleSubmit() {

    try {

      await addDoc(collection(db, "posts"), {

        category,

        type,

        title,

        location,

        user: user?.displayName || "Anonymous",

        avatar: user?.photoURL || "",

        time: "Just now",

        image,

        likes: 0,

        comments: []

      })

      navigate("/feed")

    } catch (error) {

      console.log(error)

    }

  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <div className="p-10 flex justify-center">

        <div className="w-full max-w-2xl p-8 rounded-3xl bg-zinc-900 border border-zinc-800">

          <h1 className="text-5xl font-bold mb-10">
            Create Post
          </h1>

          {/* Category */}

          <div className="mb-6">

            <label className="block mb-3 text-zinc-400">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            >

              <option>
                Lost & Found
              </option>

              <option>
                Q&A
              </option>

              <option>
                Tutoring
              </option>

              <option>
                Projects
              </option>

              <option>
                Events
              </option>

            </select>

          </div>

          {/* Type */}

          <div className="mb-6">

            <label className="block mb-3 text-zinc-400">
              Post Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            >

              <option value="LOST">
                LOST ITEM
              </option>

              <option value="FOUND">
                FOUND ITEM
              </option>

            </select>

          </div>

          {/* Title */}

          <div className="mb-6">

            <label className="block mb-3 text-zinc-400">
              Item Name
            </label>

            <input
              type="text"
              placeholder="Enter item name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />

          </div>

  {/* Upload Image */}

<div className="mb-6">

  <label className="block mb-3 text-zinc-400">
    Upload Image
  </label>

  <label className="flex items-center justify-center w-full h-40 border-2 border-dashed border-zinc-700 rounded-3xl cursor-pointer hover:border-blue-500 transition bg-zinc-900">

  <div className="text-center">

    <p className="text-5xl mb-3">
      📷
    </p>

    <p className="text-zinc-400">
      Click to upload image
    </p>

  </div>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
  />

</label>

</div>

{/* Preview */}

{
  image && (

    <div className="mb-8">

      <img
        src={image}
        className="w-full h-80 object-cover rounded-3xl border border-zinc-800"
      />

    </div>

  )
}
          {/* Location */}

          <div className="mb-8">

            <label className="block mb-3 text-zinc-400">
              Location
            </label>

            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-800 border border-zinc-700 outline-none"
            />

          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
          >

            Publish Post

          </button>

        </div>

      </div>

    </div>
  )
}

export default CreatePost