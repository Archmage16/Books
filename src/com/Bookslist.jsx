import React from 'react'
import './Bookslist.css'

const Bookslist = ({ books }) => {
    return (
        <div className="container">
            {books.length === 0 ? (
                <p>No books</p>
            ) : (
                books.map((book) => (
                    <div key={book.key} className="bookItem">
                        <img
                            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                            alt={book.title}
                            className="coverImage"
                        />
                        <div className="bookInfo">
                            <h3 className="title">{book.title}</h3>
                            <p className="author">{book.author_name ? book.author_name.join(', ') : 'Unknown author'}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Bookslist
