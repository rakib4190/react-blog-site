import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] =  useState([]);
  const [readingTime, setReadingTime] = useState(0);
  // add to bookmark handler
  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks);
  }
  // reading time handler
  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time);
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='flex'>
      <Blogs handleAddToBookMarks = {handleAddToBookMarks} handleMarkAsRead ={handleMarkAsRead}></Blogs>
      <BookMarks 
        bookMarks = {bookMarks} 
        readingTime ={readingTime}>
      </BookMarks>
      </div>
    </div>
  )
}

export default App
