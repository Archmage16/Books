import React, { useEffect, useState } from 'react'
import Bookslist from './Bookslist'

const SearchBook = () => {
    const [books, setbook] = useState([])
    useEffect(() =>{
        getBooks()
    })
    const getBooks = async () =>{
        const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=c++&key=AIzaSyCUxWcotNHUcPghDrO8dq7GQNIzQCG6m80')
        const Data = await res.json()
        setbook(Data.items)}
  return (
    <div>
        <Bookslist books = {books}/>
    </div>
  )
}

export default SearchBook