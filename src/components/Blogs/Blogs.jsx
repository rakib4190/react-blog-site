import PropTypes from 'prop-types'
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog.jsx/Blog";

const Blogs = ({handleAddToBookMarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className="w-2/3 pb-24">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookMarks ={handleAddToBookMarks} 
                    handleMarkAsRead = {handleMarkAsRead}
                   >
                    </Blog>)
            }
        </div>
    );
};
Blogs.propTypes={
   handleAddToBookMarks: PropTypes.func,
   handleMarkAsRead: PropTypes.func,
}
export default Blogs;