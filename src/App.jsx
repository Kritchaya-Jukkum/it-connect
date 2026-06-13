import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import PostDetail from "./pages/PostDetail"
import Home from "./pages/Home"
import Feed from "./pages/Feed"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import EditProject from "./pages/EditProject"
import Admin from "./pages/Admin"
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/feed" element={<Feed />} />

        <Route path="/create" element={<CreatePost />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/post/:id" element={<PostDetail />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/edit/:id" element={<EditProject />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App