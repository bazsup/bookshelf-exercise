"use client"

// 💡 book contains title: string, coverImg: string, finished: boolean

const BookList = ({books}) => {
  return (
    <div className="bookList">
      {books.map((book) => (
        <div className="book">
          <div className="book-thumbnail">
            <img src={book.converImg} alt="book cover" />
          </div>
          <p className="text-title">{book.title}</p>
          {book.finished ? <span className="readingStatus">finished</span> : ""}
        </div>
      ))}
    </div>
  )
}

export default BookList
