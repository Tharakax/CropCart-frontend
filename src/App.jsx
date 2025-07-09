import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/loginpage'
import AdminDashboard from './pages/admindashboard'
import Testing from './pages/testing'

function App() {

  return (
    <div className="min-h-screen w-full">
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/testing" element={<Testing />} />
        {/* Add more routes as needed */}

      </Routes>
    </div>
  )
}

export default App
