import React, { useState } from 'react'
import Bookslist from './Bookslist'

const SearchBook = () => {
    const [books, setBooks] = useState([])
    const [mess, setMess] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSearch = async () => {
        if (mess.trim() === "") {
            setBooks([])
            return
        }

        setLoading(true)
        setError("")
        try {
            const res = await fetch(`https://openlibrary.org/search.json?title=${mess}`)
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await res.json()
            const filteredBooks = data.docs.filter(book => book.cover_i)
            setBooks(filteredBooks)
        } catch (err) {
            setError('Failed to fetch books. Please try again later.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className='search_system'>
                <input className='input'
                    value={mess}
                    onChange={(e) => setMess(e.target.value)}
                    placeholder="Enter book title"
                />
                <button onClick={handleSearch} className='search_btn'> Find</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <Bookslist books={books} />
        </div>
    )
}

export default SearchBook
