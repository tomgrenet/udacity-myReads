//Shelf.js
// Display book with identical status

import React from 'react';
import Book from './Book'

const shelf = (props) => props.books.filter(book => book.status === props.status).map((book)=> { 
    return(
        <div> 
            <Book 
                className = 'book'
                author = {book.author}
                title = {book.title}
                status = {book.status}
                />
        </div>
    )
})

export default shelf
