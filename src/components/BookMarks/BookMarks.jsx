import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const BookMarks = ({bookMarks}) => {
    
    return (
        <div className='w-1/3 bg-gray-200 ml-5 pt-5 mt-8'>
            <h2 className='text-2xl font-semibold text-center'>Bookmarked Blogs : {bookMarks.length} </h2>
            {
                bookMarks.map(bookMark => <Bookmark bookMark={bookMark} key={bookMark.id}></Bookmark>)
            }
        </div>
    );
};
BookMarks.propTypes ={
    bookMarks: PropTypes.array,
}
export default BookMarks;