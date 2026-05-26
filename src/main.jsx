import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthContext.jsx'
import PostProvider from './context/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <PostProvider>

      <AuthProvider>

        <App />

      </AuthProvider>
      
    </PostProvider>

  </React.StrictMode>,
)