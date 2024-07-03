import React from 'react'
import './index.css';

const Book = ({author, title, img, alt, index}) => {
    return (
      <article className='book'>
        <span className='number'>{`# ${index+1}`}</span>
        <img src= {img} alt={alt}/>
        <h2>{title}</h2>
        <h4 >{author.toUpperCase()}</h4>
      </article>
    )
};

export default Book;