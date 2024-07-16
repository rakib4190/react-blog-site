import PropTypes from 'prop-types';

const Bookmark = ({bookMark}) => {
    const {title} =bookMark;
    return (
        <div className='p-5 m-5 bg-white rounded-xl'>
            <h2 className='text-xl text-gray-600'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookMark: PropTypes.object,
    
};

export default Bookmark;