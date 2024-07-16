import PropTypes from 'prop-types';
import React from 'react';

const Blog = ({blog}) => {
        const {cover, title} =blog;
    return (
        <div>
            <img src={cover} alt="" />
            <h2>name : {title}</h2>
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.array.isRequired
}
export default Blog;