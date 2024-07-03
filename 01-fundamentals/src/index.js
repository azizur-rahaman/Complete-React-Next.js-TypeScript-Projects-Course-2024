
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css';
import {bookList} from './booklist.js';
import Book from './Book.js';

const author = "Lauren Roberts";
const title = "Reckless (The Powerless Trilogy)";
const img = "./images/image.jpg";
const alt = "Reckless (The Powerless Trilogy) book cover";


export const BookList = () => {
  return (
    <>
    <h1>Amazon Best Seller</h1>
      <section className='bookList'>
      {
        bookList.map((book,index)=> {
          console.log("book",book);
          console.log("index: ",index);
          return <Book key={index} {...book} index={index}></Book>
        })
      }
    </section>
    </>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);