import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] =  useState([]);
  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookmarks, blog]
    setBookMarks(newBookMarks);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='flex'>
      <Blogs handleAddToBookMarks = {handleAddToBookMarks} ></Blogs>
      <BookMarks></BookMarks>
      </div>
    </div>
  )
}

export default App
