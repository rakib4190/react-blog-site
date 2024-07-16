import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog.jsx/Blog";

const Blogs = ({handleAddToBookMarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);
    return (
        <div className="w-2/3 pb-24">
            <h2>Blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookMarks ={handleAddToBookMarks} 
                   >
                    </Blog>)
            }
        </div>
    );
};

export default Blogs;