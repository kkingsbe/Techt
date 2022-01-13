import { useState } from 'react'
import { Navbar,Search,Category,ArticleCard } from "./components"
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <Navbar categoryNames={["3D Printing", "Electronics", "Programming"]}></Navbar>
      <Category title={"Electronics"}></Category>
    </div>
  )
}

export default App
