import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] =  useState([]);
  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='flex'>
      <Blogs handleAddToBookMarks = {handleAddToBookMarks} ></Blogs>
      <BookMarks bookMarks = {bookMarks}></BookMarks>
      </div>
    </div>
  )
}

export default App
