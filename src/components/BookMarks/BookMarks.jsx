import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const BookMarks = ({bookMarks, readingTime}) => {
    
    return (
        <div className='w-1/3'>
            <div className='bg-purple-50 ml-5  mt-8 rounded-lg border-2 border-blue-700'>
                <h2 className='text-2xl text-center font-semibold p-6'>Spent time on read : {readingTime}</h2>
            </div>
            <div className='bg-gray-200 ml-5 pt-5 mt-8 pb-10'>
            <h2 className='text-2xl font-semibold text-center'>Bookmarked Blogs : {bookMarks.length} </h2>
            {
                bookMarks.map(bookMark => <Bookmark bookMark={bookMark} key={bookMark.id}></Bookmark>)
            }

            </div>

        </div>
    );
};
BookMarks.propTypes ={
    bookMarks: PropTypes.array,
}
export default BookMarks;