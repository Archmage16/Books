const Bookslist = ({books}) => {
  return (
    <div className='book-list'>
      {books.map((book) => (
        book.volumeInfo && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? (
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} key={book.id} />
        ) : (
          <p key={book.id}>No image available</p>
        )
      ))}
    </div>
  )
}

export default Bookslist
            // <h1 key={book.id}>{book.volumeInfo.title}</h1>
            // <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" key={book.id}/>
            // 