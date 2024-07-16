import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({blog, handleAddToBookMarks, handleMarkAsRead }) => {
        const {cover, title, author_img, author, posted_date, reading_time, hashtags} =blog;
    return (
        <div className='mt-8 '>
            <img className='rounded-md w-full' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center mt-8'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h4 className='text-2xl font-semibold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className='ml-2' onClick={()=>handleAddToBookMarks(blog)} ><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mt-4'>{title}</h2>
            <p>
                {
                    hashtags.map((tag, idx) => <span key={idx} className='ml-2'> <a href="">#{tag} </a> </span>)
                }
            </p>
            <button className='text-lg text-blue-700 font-semibold underline mt-3' onClick={()=>handleMarkAsRead(reading_time)}>Mark as Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookMarks : PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blog;